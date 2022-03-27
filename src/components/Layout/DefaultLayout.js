import React from "react";
import { Footer } from "./Footer";
import { GoUP } from "../go-up/GoUp";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main>{children}</main>
      <Footer />
      <GoUP />
    </div>
  );
};

export default DefaultLayout;
