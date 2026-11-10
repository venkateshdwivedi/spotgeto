"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { CheckCircle2, Info, X } from "lucide-react";

interface Toast {
  id: string;
  message: string;
  type?: "info" | "success";
}

interface ToastContextType {
  showToast: (message: string, type?: "info" | "success") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = useCallback((message: string, type: "info" | "success" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none px-4 sm:px-0">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="pointer-events-auto flex items-start gap-3 p-4 rounded-xl bg-[#1E2B4D] text-white shadow-xl border border-white/10 transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
          >
            {toast.type === "success" ? (
              <CheckCircle2 className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
            ) : (
              <Info className="w-5 h-5 text-[#FFC72C] shrink-0 mt-0.5" />
            )}
            <div className="flex-1 text-sm font-medium leading-snug">{toast.message}</div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-white/60 hover:text-white p-0.5 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

