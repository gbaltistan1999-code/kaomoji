import { Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { getBundle } from "@/data/i18n";
import { siteConfig } from "@/lib/site-config";
import { StaticPage } from "./static-page";
import { ContactForm } from "../contact-form";

export function ContactPage({ locale }: { locale: Locale }) {
  const { ui } = getBundle(locale);
  const email = siteConfig.contactEmail;
  return (
    <StaticPage locale={locale} pageKey="contact">
      <div className="mt-6 rounded-2xl border border-line bg-card p-5">
        <p className="flex items-center gap-2 font-semibold">
          <Mail className="h-5 w-5 text-accent-text" aria-hidden="true" />
          {ui.contact.emailLabel}
        </p>
        {email ? (
          <a href={`mailto:${email}`} className="mt-1 inline-block text-lg">
            {email}
          </a>
        ) : (
          <p className="mt-1 text-muted">{ui.contact.noEmail}</p>
        )}
      </div>
      {email && <ContactForm email={email} strings={ui.contact} />}
    </StaticPage>
  );
}
