import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

interface BookingRequestBody {
  name: string;
  phone: string;
  hubName: string;
  hubSlug?: string;
  city: string;
  date: string;
  timeSlot: string;
  travelers?: number;
  notes?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: BookingRequestBody = await req.json();

    const { name, phone, hubName, city, date, timeSlot, travelers = 1, notes = "" } = body;

    // Validate required fields
    if (!name || !phone || !hubName || !city || !date || !timeSlot) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required booking fields (name, phone, hubName, city, date, timeSlot).",
        },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();
    const formattedDate = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const bookingId = `SPT-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Date.now().toString().slice(-4)}`;

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL || process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    // Replace literal escaped newlines with actual newlines if coming from env string
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    let syncedToGoogleSheets = false;
    let syncError: string | null = null;

    if (spreadsheetId && clientEmail && privateKey) {
      try {
        const auth = new google.auth.JWT({
          email: clientEmail,
          key: privateKey,
          scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        });

        const sheets = google.sheets({ version: "v4", auth });

        // Row structure: [Booking ID, Timestamp (IST), Full Name, Phone Number, Hub Name, City, Travel Date, Time Slot, Travelers, Notes, Status]
        const rowValues = [
          bookingId,
          formattedDate,
          name,
          phone,
          hubName,
          city,
          date,
          timeSlot,
          travelers.toString(),
          notes,
          "PENDING_CONFIRMATION",
        ];

        await sheets.spreadsheets.values.append({
          spreadsheetId,
          range: "Sheet1!A:K",
          valueInputOption: "USER_ENTERED",
          requestBody: {
            values: [rowValues],
          },
        });

        syncedToGoogleSheets = true;
      } catch (err: unknown) {
        console.error("Error appending row to Google Sheets:", err);
        syncError = err instanceof Error ? err.message : "Failed to append to Google Sheets";
      }
    } else {
      console.log(
        "ℹ️ Google Sheets credentials not configured. Booking received and saved in-memory/log:",
        {
          bookingId,
          timestamp,
          name,
          phone,
          hubName,
          city,
          date,
          timeSlot,
          travelers,
          notes,
        }
      );
    }

    return NextResponse.json({
      success: true,
      bookingId,
      timestamp,
      booking: {
        bookingId,
        name,
        phone,
        hubName,
        city,
        date,
        timeSlot,
        travelers,
        notes,
      },
      syncedToGoogleSheets,
      message: syncedToGoogleSheets
        ? "Booking confirmed and synced to Google Sheets!"
        : "Booking received! (Google Sheets credentials pending in .env.local)",
      syncError: syncError || undefined,
    });
  } catch (error: unknown) {
    console.error("Booking API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

