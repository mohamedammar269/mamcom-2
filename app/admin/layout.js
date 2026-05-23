// app/admin/layout.js
import { getServerSession } from 'next-auth'
import SessionProvider from '@/components/SessionProvider'

export default async function AdminLayout({ children }) {
  const session = await getServerSession()
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}
