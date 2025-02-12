import Head from "next/head";
import React from "react";

type Props = {
  children: JSX.Element;
};

const Layout = ({ children }: Props) => {
  return (
    <div id="layout">
      <Head>
        <title>Login Example</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main id="content">{children}</main>
    </div>
  );
};

export default Layout;
