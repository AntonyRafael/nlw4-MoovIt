import '../styles/global.css'

import  {ChallangesProvider } from '../pages/contexts/ChallangesContext'

function MyApp({ Component, pageProps }) {
  return (
    <ChallangesProvider>
      <Component {...pageProps} />
    </ChallangesProvider>
    )
}

export default MyApp
