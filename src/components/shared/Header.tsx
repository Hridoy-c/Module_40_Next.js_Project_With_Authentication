"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import HeaderBtn from "./HeaderBtn";

function getBanglaDate() {
  const parts = new Intl.DateTimeFormat("bn-BD", {
    timeZone: "Asia/Dhaka",
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).formatToParts(new Date());

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return `${get("weekday")}, ${get("day")} ${get("month")}, ${get("year")}`;
}

function subscribe(callback: () => void) {
  // re-check every minute so the date changes at midnight
  const id = setInterval(callback, 60_000);
  return () => clearInterval(id);
}

const Header = () => {
  const date = useSyncExternalStore(
    subscribe,
    getBanglaDate, // browser value
    () => "", // server value (avoids hydration mismatch)
  );

  return (
    <header className="bg-white">
      <div className="mx-auto flex w-[92%] items-center justify-between gap-2 py-2 sm:w-[94%] sm:py-3 lg:w-full lg:max-w-[80vw]">
        {/* spacer keeps the logo centered on desktop */}
        <div className="hidden md:block md:w-44" />

        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-900 text-lg font-bold text-red-500 sm:h-10 sm:w-10 sm:text-xl">
            B
          </div>
          <div className="min-w-0">
            <p className="truncate font-serif text-lg font-bold leading-none text-red-700 sm:text-2xl">
              Bangla News 24
            </p>
            <p className="mt-1 min-h-4 truncate text-[11px] text-gray-600 sm:text-sm">
              {date}
            </p>
          </div>
        </Link>

        <HeaderBtn />
      </div>
    </header>
  );
};

export default Header;