"use client";

import type { ReactNode } from "react";

type EmailLinkProps = {
  className?: string;
  children: ReactNode;
};

export default function EmailLink({ className, children }: EmailLinkProps) {
  return (
    <a
      className={className}
      href="mailto:hello@wyedesign.co.uk"
    >
      {children}
    </a>
  );
}
