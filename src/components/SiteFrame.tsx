import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type SiteFrameProps = {
  children: ReactNode;
};

export default function SiteFrame({ children }: SiteFrameProps) {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
