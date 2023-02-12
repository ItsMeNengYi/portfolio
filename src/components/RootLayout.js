import { AnalyticsWrapper } from '@/components/AnalyticsWrapper'

export default function RootLayout({ children }) {
  return (
      <div>
        {children}
        <AnalyticsWrapper />
      </div>
  )
}