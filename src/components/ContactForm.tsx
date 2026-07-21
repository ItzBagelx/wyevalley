"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { trackEvent } from "./Analytics";

type FormValues = {
  name: string;
  business: string;
  email: string;
  phone: string;
  industry: string;
  goal: string;
  currentWebsite: string;
  notes: string;
  website: string;
};

const initialValues: FormValues = {
  name: "",
  business: "",
  email: "",
  phone: "",
  industry: "",
  goal: "",
  currentWebsite: "",
  notes: "",
  website: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const hasTrackedStart = useRef(false);

  const update = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const trackStart = () => {
    if (!hasTrackedStart.current) {
      trackEvent("proposal_form_start", { form_name: "website_proposal" });
      hasTrackedStart.current = true;
    }
  };

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    setMessage("");

    if (process.env.NODE_ENV !== "production") {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      setState("success");
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "We could not send your request just now.");
      }

      trackEvent("generate_lead", { form_name: "website_proposal" });
      setState("success");
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "We could not send your request just now. Please email us instead.",
      );
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-3xl bg-theme-text-dark p-8 text-white shadow-xl sm:p-10" aria-live="polite">
        <CheckCircle2 className="mb-5 h-10 w-10 text-theme-bg" strokeWidth={1.5} />
        <h2 className="text-3xl text-white">Thanks — we have your request.</h2>
        <p className="mt-4 max-w-lg leading-relaxed text-white/75">
          We&apos;ll review the details and reply by email to arrange the next step.
        </p>
      </div>
    );
  }

  return (
    <form
      id="proposal"
      onSubmit={submit}
      onFocus={trackStart}
      className="rounded-3xl bg-white p-6 shadow-xl shadow-theme-bg-alt/50 sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-theme-text-dark">
          Your name
          <input
            required
            autoComplete="name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          />
        </label>
        <label className="block text-sm font-medium text-theme-text-dark">
          Business name
          <input
            required
            autoComplete="organization"
            value={values.business}
            onChange={(event) => update("business", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          />
        </label>
        <label className="block text-sm font-medium text-theme-text-dark">
          Email address
          <input
            required
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          />
        </label>
        <label className="block text-sm font-medium text-theme-text-dark">
          Phone <span className="font-normal text-theme-text-light">(optional)</span>
          <input
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          />
        </label>
        <label className="block text-sm font-medium text-theme-text-dark">
          Your industry
          <select
            required
            value={values.industry}
            onChange={(event) => update("industry", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          >
            <option value="">Choose one</option>
            <option>Trades &amp; construction</option>
            <option>Hospitality</option>
            <option>Professional services</option>
            <option>Retail</option>
            <option>Other small business</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-theme-text-dark">
          Main goal
          <select
            required
            value={values.goal}
            onChange={(event) => update("goal", event.target.value)}
            className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
          >
            <option value="">Choose one</option>
            <option>Generate more enquiries</option>
            <option>Build trust in my business</option>
            <option>Replace an existing website</option>
            <option>Explain my services clearly</option>
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-theme-text-dark">
        Existing website <span className="font-normal text-theme-text-light">(optional)</span>
        <input
          type="url"
          inputMode="url"
          placeholder="https://"
          value={values.currentWebsite}
          onChange={(event) => update("currentWebsite", event.target.value)}
          className="mt-2 w-full rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition placeholder:text-theme-text-light/60 focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
        />
      </label>

      <label className="mt-5 block text-sm font-medium text-theme-text-dark">
        Anything else we should know? <span className="font-normal text-theme-text-light">(optional)</span>
        <textarea
          rows={4}
          value={values.notes}
          onChange={(event) => update("notes", event.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-theme-bg-gray bg-theme-bg-light px-4 py-3 text-theme-text-dark outline-none transition focus:border-theme-accent focus:ring-2 focus:ring-theme-accent/20"
        />
      </label>

      <label className="sr-only" aria-hidden="true">
        Leave this field empty
        <input
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => update("website", event.target.value)}
        />
      </label>

      {state === "error" && (
        <p className="mt-5 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {message}
        </p>
      )}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={state === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-theme-accent px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-60"
        >
          {state === "submitting" ? "Sending request…" : "Request a website proposal"}
          <ArrowRight className="h-4 w-4" />
        </button>
        <p className="max-w-sm text-xs leading-relaxed text-theme-text-light">
          By sending this form, you agree to our{" "}
          <a className="underline underline-offset-4" href="/privacy-policy">
            privacy policy
          </a>
          .
        </p>
      </div>
    </form>
  );
}
