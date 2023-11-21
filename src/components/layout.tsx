import * as React from "react";
import { LocalizedLink } from "gatsby-theme-i18n";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <LocalizedLink language="en" to="/">
          Home
        </LocalizedLink>
      </header>
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;
