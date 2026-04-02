import './globals.css'
import { Space_Grotesk } from 'next/font/google' // Changed to Space Grotesk

// Initialize the premium tech font
const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

export const metadata = {
  title: 'Anirudh Vikal | Portfolio',
  description: 'Data Scientist & Software Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* Apply the font to the whole body */}
      <body className={`${spaceGrotesk.className} bg-[#030303] text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}