import { AnalyticsWrapper } from '@/components/AnalyticsWrapper'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}