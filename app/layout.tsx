import type { Metadata } from "next"
import AppProviders from "@/app/_src/providers/AppProviders"
import "./_src/css/globals.css"

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quiz Application",
}

const RootLayout = ({
  children,
  sideNav,
}: {
  children: React.ReactNode
  sideNav: React.ReactNode
}) => {
  return (
    <html lang="en">
      <AppProviders>
        <body>
          <div className="flex h-screen w-screen relative bg-gray-900 bg-opacity-95">
            {sideNav}
            {children}
          </div>
        </body>
      </AppProviders>
    </html>
  )
}

export default RootLayout
