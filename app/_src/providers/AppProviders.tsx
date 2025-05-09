"use client"
import StoreProvider from "@/app/_src/redux/StoreProvider"

export default function AppProviders({
  children,
}: {
  children: React.ReactNode
}) {
  return <StoreProvider>{children}</StoreProvider>
}
