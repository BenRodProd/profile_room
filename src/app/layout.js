import './globals.css'
import Head from 'next/head'


export default function RootLayout({ children }) {
  return (
    <>
    <Head>
      <title>Benjamin Rodenstein</title>
    </Head>
    <html lang="en">
      <body >{children}</body>
    </html>
    </>
  )
}
