import type { Metadata } from 'next'
import stylex from '@stylexjs/stylex'
import './globals.css'

export const metadata: Metadata = {
  title: 'Stylex Next.js Starter | stylexjs.in',
  description: 'Next.js App built with StyleX',
}

const DARK_MODE = '@media (prefers-color-scheme: dark)'

const s = stylex.create({
  body: {
    fontFamily: 'Monospace, monospace',
    // fontFamily: 'Verdana, sans-serif',
    // fontFamily: "sans-serif",
    // fontFamily: "Arial, sans-serif",
    backgroundColor: {
      default: 'white',
      [DARK_MODE]: 'black',
    },
    color: {
      default: 'black',
      [DARK_MODE]: 'white',
    },
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body {...stylex.props(s.body)}>{children}</body>
    </html>
  )
}
