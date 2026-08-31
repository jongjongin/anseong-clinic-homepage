import Link from "next/link";
import SiteLogo from "@/components/site/site-logo";
import { footerContent } from "@/components/home/content";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 pb-28 pt-16 text-slate-400 lg:pb-40">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-4">
            <SiteLogo className="h-11 w-[220px]" inverted />
            <div className="flex flex-col gap-1 text-sm leading-relaxed">
              <p>{footerContent.address}</p>
              <p>{footerContent.phone}</p>
              <p>{footerContent.business}</p>
            </div>
          </div>

          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium">
            {footerContent.links.map((link) =>
              link.href.startsWith("/") ? (
                <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>

        <p className="max-w-3xl text-xs leading-relaxed text-slate-500">{footerContent.notice}</p>

        <div className="flex flex-col gap-2 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {footerContent.clinicName}. All rights reserved.</p>
          <Link href="/admin/reservations" className="transition-colors hover:text-slate-300">
            관리자
          </Link>
        </div>
      </div>
    </footer>
  );
}
