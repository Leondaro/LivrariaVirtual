import "../styles/sass/styles.scss";
import { ToastContainer } from "react-toastify";

export default function MyApp({ Component, pageProps }) {
    return <>
        <Component {...pageProps} />
        <ToastContainer />
    </>
}