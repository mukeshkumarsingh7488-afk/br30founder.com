import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop.jsx";

export default function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
