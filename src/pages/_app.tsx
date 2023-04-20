import { type AppType } from "next/app";

import { api } from "~/utils/api";
import Navbar from "~/Components/Navbar";
import Header from "~/Components/Header";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></script>

      <Header />
      <Navbar />
      <Component {...pageProps} />

    </>
  );
};

export default api.withTRPC(MyApp);
