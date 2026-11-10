# Spotgeto — Hyperlocal Quick Booking Platform

Spotgeto connects curious travelers and culture enthusiasts with vetted local guides (**"Spotmates"**) for private, unscripted walking journeys across ancient Indian cities like Varanasi.

Designed with an editorial luxury aesthetic inspired by Varanasi's historic ghats, sandstone architecture, and warm morning light.

---

## 🏛️ Tech Stack

- **Framework:** Next.js 16+ with App Router (Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom editorial design tokens matching the Stitch design
- **Typography:** Google Fonts:
  - **Headings:** `Playfair Display` (editorial serif)
  - **Body UI:** `DM Sans` (humanist geometric sans-serif)
- **Icons:** Lucide React
- **Google Sheets API:** Integrated via `googleapis` Service Account (JWT)
- **Deployment:** Deploy-ready for Vercel

---

## 🗺️ Application Architecture & Pages

| Route | Page | Description |
|---|---|---|
| `/` | **Homepage (Page 1)** | Editorial hero section with live city selector ("Now Live" for Varanasi, "Launching Q2/Q3" for Jaipur, Udaipur, Rishikesh), interactive toast for upcoming cities, arched architectural portal, "How Spotgeto Works" 3 step cards, "What Makes a Spotmate Different" 4 USP cards, and Final CTA sanctuary box. |
| `/city/[slug]` | **City Hub Page (Page 2)** | e.g. `/city/varanasi`. "First time in Varanasi? Start here →" recommendation banner, filterable grid of 4 curated walking hubs with landmark tags, italicized atmosphere teasers, duration, Spotmate type, and pricing. |
| `/hub/[slug]` | **Hub Detail Page (Page 3)** | e.g. `/hub/assi-southern-akharas`, `/hub/old-kashi-gallis`, `/hub/manikarnika-riverfront`, `/hub/sarnath-sanctuary`. Detailed rationale explaining **why** this specific Spotmate type is assigned (Local Expert vs. Certified Historian), Spotmate profile, 4 unscripted discovery teasers, 3 USP highlight cards (Hidden Gems, Authentic Food, Real Souvenirs), and prominent booking trigger. |
| Modal / Flow | **Booking Form (Page 4)** | Hub selector, Date picker, Time slot selector (Morning / Afternoon / Evening), Full Name, WhatsApp phone number with +91 prefix, and guest counter. Sends data via POST to `/api/booking` and confirms with a 15-minute WhatsApp match confirmation and direct WhatsApp concierge chat. |
| `/api/booking` | **API Route** | Appends booking rows directly to Google Sheets using Google Sheets API v4. Resilient fallback mode when credentials are pending. |

---

## 🎨 Color Palette & Visual Language

- **Primary (`#1E2B4D` - Deep Indigo):** Imparts solemnity, ancient depth, and architectural stability.
- **Secondary (`#FFC72C` / `#d97706` - Warm Gold / Saffron Amber):** Reserved as a high-focus accent strictly for primary actions, active indicators, and curation badges.
- **Neutral Canvas (`#fcf9f4` - Warm Sandstone Cream):** Replaces harsh digital white with organic tonal depth (`#f0ede9`, `#ebe8e3`, `#f6f3ee`).
- **Typography:**
  - `Playfair Display` for headlines with italic accents on keywords (*"Know Someone"*).
  - `DM Sans` for body text, numbers, and metadata badges.

---

## 📊 Google Sheets API Setup

The application pushes every confirmed booking to a Google Sheet with the following columns:

```
[Booking ID, Timestamp (IST), Full Name, Phone Number, Hub Name, City, Travel Date, Time Slot, Travelers, Special Notes, Status]
```

### Steps to configure:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g. `spotgeto-bookings`).
3. Enable the **Google Sheets API**.
4. Go to **APIs & Services > Credentials** and create a **Service Account**.
5. Create and download a **JSON key** for this service account.
6. Create a new Google Sheet in Google Drive. Copy the Spreadsheet ID from the URL:
   `https://docs.google.com/spreadsheets/d/<SPREADSHEET_ID>/edit`
7. Click the **Share** button on your Google Sheet and invite the Service Account email with **Editor** permissions.
8. Add the following environment variables to your `.env.local` (or in Vercel project settings):

```env
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_CLIENT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
NEXT_PUBLIC_WHATSAPP_SUPPORT_PHONE=919876543210
```

> **Note:** If environment variables are omitted during initial local testing, the application gracefully saves and logs the booking payload, creates the booking reference ID, and displays the WhatsApp confirmation screen without failing.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

---

## ☁️ Deploying to Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. In the [Vercel Dashboard](https://vercel.com/), click **Add New Project** and import the repository.
3. In **Environment Variables**, add:
   - `GOOGLE_SHEET_ID`
   - `GOOGLE_CLIENT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `NEXT_PUBLIC_WHATSAPP_SUPPORT_PHONE`
4. Click **Deploy**. Vercel will automatically build and deploy the Next.js application.
