"use client";

import type { ReactNode } from "react";
import { trackEvent } from "./Analytics";

type EmailLinkProps = {
  className?: string;
  children: ReactNode;
};

export default function EmailLink({ className, children }: EmailLinkProps) {
  return (
    <a
      className={className}
      href="mailto:hello@wyedesign.co.uk"
      onClick={() => trackEvent("contact_email_click", { location: "contact_page" })}
    >
      {children}
    </a>
  );
}
