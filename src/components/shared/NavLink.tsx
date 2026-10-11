"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ slug, title }: { slug: string; title: string }) => {
  const pathname = usePathname();
  const href = `/category/${slug}`;
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`whitespace-nowrap border-b-2 pb-1 font-medium transition ${
        isActive
          ? "border-red-700 text-red-700"
          : "border-transparent text-gray-800 hover:text-red-700"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;