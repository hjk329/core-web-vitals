import '../styles/globals.css'
import Header from "../src/views/components/Header";
import Footer from "../src/views/components/Footer";

function MyApp({ Component, pageProps }) {
  return (
      <>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
      </>
  )
}

export default MyApp
