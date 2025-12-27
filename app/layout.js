import './globals.css'
import Navigation from './components/Navigation'

export const metadata = {
  title: 'Portfolio | Developer',
  description: 'Full-stack developer portfolio showcasing projects and experience',
  icons: {
    icon: '/ref/Favicon.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
