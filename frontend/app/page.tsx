import Image from "next/image"
import { Search, Bell, ChevronRight, BarChart2, Target, Calendar, Settings, Plus, CreditCard } from "lucide-react"

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-16 bg-white border-r border-gray-200 h-screen flex flex-col items-center py-6 fixed">
        <div className="mb-8">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">
            <span>M</span>
          </div>
        </div>
        <nav className="flex flex-col gap-4 items-center">
          <button className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
            <CreditCard size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-500">
            <BarChart2 size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-500">
            <Target size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-500">
            <Calendar size={20} />
          </button>
          <button className="w-10 h-10 rounded-lg hover:bg-gray-200 flex items-center justify-center text-gray-500">
            <Settings size={20} />
          </button>
        </nav>
        <div className="mt-auto">
          <button className="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
            <Plus size={20} />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 pl-16">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
          <nav className="flex items-center space-x-6">
            <div className="text-indigo-600 font-semibold">FinJin</div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Home Loan
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Car Loan
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Maintenance
              </a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">
                Booster
              </a>
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 pr-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 w-64"
              />
            </div>
            <button className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                2
              </span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                <Image src="/placeholder.svg?height=32&width=32" alt="Profile" width={32} height={32} />
              </div>
              <div className="text-sm">
                <div className="font-medium">Mansi</div>
                <div className="text-gray-500 text-xs">now</div>
              </div>
            </div>
          </div>
        </header>

      </main>
    </div>
  )
}
