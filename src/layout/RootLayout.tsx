import Footer from "@/shared/components/Footer";
import Navbar from "@/shared/components/Navbar";
import React, { ReactElement } from "react";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Navbar />
      <div className="h-screen">{children}</div>
      <Footer />
    </>
  );
};

export default RootLayout;