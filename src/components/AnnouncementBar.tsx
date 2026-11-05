import Link from "next/link";

const FACEBOOK_URL = "https://www.facebook.com/SavinosPizzaIOM";

export default function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-white">
      <Link
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 h-9 px-4 text-center font-body text-xs sm:text-sm text-[#163b49] hover:bg-[#163b49]/5 transition-colors duration-200"
      >
        <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.019 3.657 9.176 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.888h2.773l-.443 2.91h-2.33V22c4.78-.764 8.437-4.921 8.437-9.94Z" />
        </svg>
        <span className="truncate">
          For the latest updates and special offers, check out our Facebook community
        </span>
      </Link>
    </div>
  );
}
