"use client"

import { useState } from "react"
import { Heart, MessageCircle, Repeat2 } from "lucide-react"
import ChatbotOverlay from "./chatbot-overlay"

interface User {
  name: string
  avatar: string
}

interface Post {
  id: number
  user: User
  timestamp: string
  content: string
  image?: string
  likes: number
  reposts: number
  comments: number
}

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  const [showChatbot, setShowChatbot] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden relative">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
              <img
                src={post.user.avatar || "/placeholder.svg"}
                alt={post.user.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{post.user.name}</h3>
              <p className="text-xs text-gray-500">{post.timestamp}</p>
            </div>
          </div>

          <button
            onClick={() => setShowChatbot(true)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-magenta-100 text-magenta-600 hover:bg-magenta-200 transition-colors"
            aria-label="Open chatbot"
          >
            <span className="text-lg">🟣</span>
          </button>
        </div>

        <div className="mt-3">
          <p className="text-gray-800">{post.content}</p>

          {post.image && (
            <div className="mt-3 rounded-lg overflow-hidden">
              <img src={post.image || "/placeholder.svg"} alt="Post attachment" className="w-full h-auto" />
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center justify-between text-gray-500">
          <button className="flex items-center space-x-1 hover:text-red-500">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{post.likes}</span>
          </button>

          <button className="flex items-center space-x-1 hover:text-green-500">
            <Repeat2 className="h-4 w-4" />
            <span className="text-xs">{post.reposts}</span>
          </button>

          <button className="flex items-center space-x-1 hover:text-blue-500">
            <MessageCircle className="h-4 w-4" />
            <span className="text-xs">{post.comments}</span>
          </button>
        </div>
      </div>

      {showChatbot && <ChatbotOverlay onClose={() => setShowChatbot(false)} postContent={post.content} />}
    </div>
  )
}
