import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type SiteFrameProps = {
  children: ReactNode;
  showFooterProposalCta?: boolean;
};

export default function SiteFrame({ children, showFooterProposalCta = true }: SiteFrameProps) {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer showProposalCta={showFooterProposalCta} />
    </div>
  );
}
