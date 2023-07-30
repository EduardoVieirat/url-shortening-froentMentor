import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight:  ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata = {
  title: 'URL Shortening',
  description: 'Url Shortner app',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
