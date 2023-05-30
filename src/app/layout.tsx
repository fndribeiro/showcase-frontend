import './globals.css'

export const metadata = {
  title: 'Fernando Ribeiro Showcase',
  description: 'Showcase development features by Fernando Ribeiro.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
