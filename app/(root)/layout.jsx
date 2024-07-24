// app/(root)/layout.jsx
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";
import { metadata } from "./(home)/metadata";

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
      </head>
      <body>
        <main className="background-light850_dark100 relative">
          <Navbar />
          <div className="flex w-full">
            <section className="flex min-h-screen w-full flex-1 flex-col bg-white pb-6 pt-36 max-md:pb-14">
              <div className="w-full px-4 sm:px-0 md:px-0 lg:px-0 xl:px-64">
                {children}
              </div>
            </section>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
};

export default Layout;
