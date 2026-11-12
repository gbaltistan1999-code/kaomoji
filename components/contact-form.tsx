"use client";
// Opens the visitor's own email app with a prepared message (mailto:).
// Nothing is submitted to this website and no success message is faked.
import { useState } from "react";
import type { UiDict } from "@/types/i18n";

export function ContactForm({ email, strings }: { email: string; strings: UiDict["contact"] }) {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState<keyof UiDict["contact"]["topics"]>("suggestion");
  const [message, setMessage] = useState("");
  const [opened, setOpened] = useState(false);

  return (
    <form
      className="mt-6 space-y-4 rounded-2xl border border-line bg-card p-5"
      onSubmit={(e) => {
        e.preventDefault();
        const subject = strings.topics[topic];
        const body = name ? `${message}\n\n— ${name}` : message;
        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setOpened(true);
      }}
    >
      <h2 className="text-lg font-bold">{strings.formTitle}</h2>
      <p className="text-sm text-muted">{strings.formNote}</p>
      <label className="block text-sm">
        <span className="font-medium">{strings.nameLabel}</span>
        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-lg border border-line bg-bg px-3 py-2" autoComplete="name" />
      </label>
      <label className="block text-sm">
        <span className="font-medium">{strings.topicLabel}</span>
        <select value={topic} onChange={(e) => setTopic(e.target.value as typeof topic)} className="mt-1 w-full rounded-lg border border-line bg-bg px-3 py-2">
          {(Object.keys(strings.topics) as (keyof typeof strings.topics)[]).map((k) => (
            <option key={k} value={k}>
              {strings.topics[k]}
            </option>
          ))}
        </select>
      </label>
      <label className="block text-sm">
        <span className="font-medium">{strings.messageLabel}</span>
        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="mt-1 w-full rounded-lg border border-line bg-bg px-3 py-2" />
      </label>
      <button type="submit" className="kz-btn">
        {strings.submit}
      </button>
      {opened && <p className="text-sm text-muted" role="status">{strings.after}</p>}
    </form>
  );
}
