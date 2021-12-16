import '../styles/globals.css'
import '../styles/styles.css';
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/blog-list.css";



import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
        <Component {...pageProps} />
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </>
  )
}

export default MyApp
