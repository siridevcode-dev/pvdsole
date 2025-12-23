import { Inter } from 'next/font/google'
import './globals.css'
import { Layout } from '../components/layout'

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
})

export const metadata = {
    title: 'Phornsavarn Development',
    description: 'Phornsavarn Development Sole Company Limited',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${inter.variable}`}>
            <body className="font-sans antialiased">
                <Layout>{children}</Layout>
            </body>
        </html>
    )
}
