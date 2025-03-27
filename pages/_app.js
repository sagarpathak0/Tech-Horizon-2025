import '../styles/fonts.css'
import '../styles/globals.css'
import Navbar3 from '../components/Navbar3'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar3 />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
