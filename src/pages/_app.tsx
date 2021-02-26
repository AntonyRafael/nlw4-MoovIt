import "../styles/global.css";

import { ChallangesProvider } from "../pages/contexts/ChallangesContext";

function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  );
}

export default MyApp;
