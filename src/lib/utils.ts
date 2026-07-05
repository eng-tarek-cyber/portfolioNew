import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}

export function absoluteUrl(path: string = ""): string {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://eng-tarek-cyber.github.io/portfolioNew";
  const base = siteUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}`;
}
