import { Home, Search, PlusSquare, MessageSquare, User } from "lucide-react"

export default function BottomTabBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10">
      <div className="max-w-lg mx-auto flex items-center justify-around">
        <button className="p-4 flex flex-col items-center text-magenta-600">
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1">Home</span>
        </button>

        <button className="p-4 flex flex-col items-center text-gray-500">
          <Search className="h-6 w-6" />
          <span className="text-xs mt-1">Explore</span>
        </button>

        <button className="p-4 flex flex-col items-center text-gray-500">
          <PlusSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Post</span>
        </button>

        <button className="p-4 flex flex-col items-center text-gray-500">
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs mt-1">Messages</span>
        </button>

        <button className="p-4 flex flex-col items-center text-gray-500">
          <User className="h-6 w-6" />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  )
}
