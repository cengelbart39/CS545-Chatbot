import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NavBar() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="max-w-lg mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-magenta-600">TrustBot</h1>
        </div>

        <div className="flex-1 mx-4">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Search..." className="pl-8 bg-gray-100 border-none text-sm" />
          </div>
        </div>

        <div className="flex items-center">
          <button className="w-8 h-8 rounded-full overflow-hidden">
            <img src="/placeholder.svg?height=32&width=32" alt="Profile" className="w-full h-full object-cover" />
          </button>
        </div>
      </div>
    </header>
  )
}
