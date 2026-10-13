"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { signOut, useSession } from "@/lib/auth-client";

const HeaderBtn = () => {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const [open, setOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // close the menu on outside click or Escape
  useEffect(() => {
    if (!open) return;

    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleSignOut = async () => {
    setSigningOut(true);
    await signOut({
      fetchOptions: {
        onSuccess: () => {
          setOpen(false);
          router.push("/");
          router.refresh();
        },
      },
    });
    setSigningOut(false);
  };

  const wrapper =
    "relative flex shrink-0 items-center justify-end gap-2 sm:gap-4 md:w-44";

  // loading placeholder, so the buttons don't flash
  if (isPending) {
    return (
      <div className={wrapper} aria-hidden="true">
        <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200" />
      </div>
    );
  }

  // logged out
  if (!session?.user) {
    return (
      <div className={wrapper}>
        <Link
          href="/sign-in"
          className="whitespace-nowrap text-xs text-gray-700 hover:text-black sm:text-sm"
        >
          সাইন ইন
        </Link>
        <Link
          href="/sign-up"
          className="whitespace-nowrap rounded-md bg-red-700 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-800 sm:px-4 sm:py-2 sm:text-sm"
        >
          সাইন আপ
        </Link>
      </div>
    );
  }

  // logged in
  const { name, email, image } = session.user;
  const initial = name?.trim().charAt(0).toUpperCase() || "U";
  const showImage = image && !imgError;

  const avatar = (size: string) => (
    <span
      className={`flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-red-700 font-bold text-white ${size}`}
    >
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={name}
          onError={() => setImgError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        initial
      )}
    </span>
  );

  return (
    <div ref={menuRef} className={wrapper}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full p-0.5 transition hover:bg-gray-100 sm:pr-3"
      >
        {avatar("h-9 w-9 text-sm")}
        <span className="hidden max-w-20 truncate text-sm font-medium text-gray-800 sm:block">
          {name}
        </span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className={`hidden h-4 w-4 text-gray-500 transition-transform sm:block ${
            open ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-[min(15rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg"
        >
          {/* user info */}
          <div className="flex items-center gap-3 border-b border-gray-100 bg-gray-50 p-4">
            {avatar("h-11 w-11 text-lg")}
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-gray-900">
                {name}
              </p>
              <p className="truncate text-xs text-gray-500">{email}</p>
            </div>
          </div>

          {/* actions */}
          <div className="p-1.5">
            <button
              type="button"
              role="menuitem"
              onClick={handleSignOut}
              disabled={signingOut}
              className="flex w-full items-center gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium text-red-700 transition hover:bg-red-50 disabled:opacity-60 sm:py-2"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4.25A2.25 2.25 0 0 1 5.25 2h5.5A2.25 2.25 0 0 1 13 4.25v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 0-.75-.75h-5.5a.75.75 0 0 0-.75.75v11.5c0 .41.34.75.75.75h5.5a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 1 1.5 0v2A2.25 2.25 0 0 1 10.75 18h-5.5A2.25 2.25 0 0 1 3 15.75V4.25Z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M19 10a.75.75 0 0 0-.75-.75H8.704l1.048-.943a.75.75 0 1 0-1.004-1.114l-2.5 2.25a.75.75 0 0 0 0 1.114l2.5 2.25a.75.75 0 1 0 1.004-1.114l-1.048-.943h9.546A.75.75 0 0 0 19 10Z"
                  clipRule="evenodd"
                />
              </svg>
              {signingOut ? "অপেক্ষা করুন..." : "সাইন আউট"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBtn;