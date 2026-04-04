import { footerContent } from "@/components/home/content";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-lg font-bold text-white">{footerContent.clinicName}</p>
            <div className="mt-4 space-y-2 text-sm leading-6 text-slate-400">
              <p>{footerContent.phone}</p>
              <p>{footerContent.address}</p>
              <p>{footerContent.business}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
            {footerContent.links.map((link) => (
              <a key={link} href="#" className="transition-colors hover:text-white">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
