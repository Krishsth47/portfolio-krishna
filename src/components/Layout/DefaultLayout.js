import React from "react";
import { Footer } from "./Footer";
import { Hero } from "../hero/Hero";
import { GoUP } from "../go-up/GoUp";

export const DefaultLayout = ({ children }) => {
  return (
    <div className="layout">
      <Hero />
      <main>{children}</main>
      <Footer />
      <GoUP />
    </div>
  );
};

export default DefaultLayout;
