import './globals.css'
import { Cuprum } from "next/font/google";
const cuprum = Cuprum({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cuprum",
});

export const metadata = {
  title: 'Full-Stack Web Development by Araz Ashkan Abedi',
  description: 'Stack: NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cuprum.variable}`}>{children}</body>
    </html>
  )
}
