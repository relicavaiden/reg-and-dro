import '../styles/globals.css'
import { AppProps } from 'next/app'
import { Concert_One } from '@next/font/google'

// Come back to look at the individual fonts and to make sure that I can have a diffrent variable used for each page

const concert_one = Concert_One({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }) {
  return(
    <main className={concert_one.className}>
       <Component {...pageProps} />
    </main>
  );
}
