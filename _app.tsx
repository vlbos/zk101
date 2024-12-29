import "../index.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId="G-ZM2C3CD7WJ"/>
    </>
  );
}
