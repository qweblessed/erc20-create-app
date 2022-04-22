import '../styles/globals.css'
import {ContextProvider} from '../context/context'
import {MoralisProvider} from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
      <MoralisProvider
      serverUrl='https://zvomzzojjc51.usemoralis.com:2053/server'
      appId='m5BhTgpCR7xrYXXkgcJ50s3ihqCkz31yr34wXrsP'
      >
          <ContextProvider>
                <Component {...pageProps} />
          </ContextProvider>
      </MoralisProvider>
  )
}

export default MyApp
