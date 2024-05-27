import Bottombar from '@/components/ui/shared/Bottombar'
import Topbar from '@/components/ui/shared/Topbar'
import { Sidebar } from 'lucide-react'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className="w-full md:flex">
      <Topbar/>
      <Sidebar/>
      <section className="flex flex-1 h-full">
        <Outlet/>
      </section>
      <Bottombar/>
    </div>
  )
}

export default RootLayout