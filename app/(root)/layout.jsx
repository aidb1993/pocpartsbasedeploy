import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-28 md:px-40 lg:px-56 xl:px-64">
          <div className="w-full px-4 sm:px-0">{children}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
