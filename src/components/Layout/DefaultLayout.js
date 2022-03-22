import React from "react";
import { Footer } from "./Footer";
import { Hero } from "../hero/Hero";
import { CardGroup } from "react-bootstrap";
import { GoUP } from "../go-up/GoUp";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Hero />
      <main>{children}</main>
      <Footer />
      <GoUP />
    </div>
  );
};

export default DefaultLayout;
