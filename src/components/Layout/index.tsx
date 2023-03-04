import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-auto">{children}</div>
      <Footer />
    </>
  );
}
