"use client"

import type React from "react"

import { useState } from "react"
import { X, Send, ExternalLink } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface ChatbotOverlayProps {
  onClose: () => void
  postContent: string
}

interface RelatedPost {
  id: number
  user: string
  content: string
}

export default function ChatbotOverlay({ onClose, postContent }: ChatbotOverlayProps) {
  const [showRelatedPosts, setShowRelatedPosts] = useState(false)
  const [inputValue, setInputValue] = useState("")

  // Sample related links based on post content
  const relatedLinks = [
    {
      title: "Latest research on NLP advancements",
      url: "https://example.com/nlp-research",
    },
    {
      title: "How chatbots are transforming customer service",
      url: "https://example.com/chatbot-trends",
    },
    {
      title: "Building AI-powered social media tools",
      url: "https://example.com/ai-social-media",
    },
  ]

  // Sample related posts
  const relatedPosts: RelatedPost[] = [
    {
      id: 101,
      user: "Tech Insights",
      content:
        "Our analysis of the top NLP frameworks in 2025 shows significant improvements in context understanding.",
    },
    {
      id: 102,
      user: "AI Daily",
      content: "New benchmark results for conversational AI show human-level performance in specific domains.",
    },
    {
      id: 103,
      user: "Dev Community",
      content: "Tutorial: How to implement sentiment analysis in your social media monitoring tool.",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would send the question to the NLP backend
    setInputValue("")
  }

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10">
      <div className="bg-white rounded-xl m-4 max-h-[80%] overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h3 className="font-semibold text-gray-900">TrustBot Assistant</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
            aria-label="Close chatbot"
          >
            <X className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 rounded-full bg-magenta-100 flex items-center justify-center flex-shrink-0">
              <span className="text-sm">🟣</span>
            </div>
            <div>
              <p className="text-gray-800">
                👋 Hi! Curious about this post? I found some links you might want to check out.
              </p>
            </div>
          </div>

          <div className="pl-11 space-y-3">
            {relatedLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-600">{link.title}</span>
                  <ExternalLink className="h-3 w-3 text-gray-400" />
                </div>
              </a>
            ))}

            <Button
              variant="outline"
              className="w-full text-magenta-600 border-magenta-200 hover:bg-magenta-50"
              onClick={() => setShowRelatedPosts(!showRelatedPosts)}
            >
              {showRelatedPosts ? "Hide Related Posts" : "View Related Posts"}
            </Button>
          </div>

          {showRelatedPosts && (
            <div className="pl-11 space-y-3 mt-2">
              <h4 className="text-sm font-medium text-gray-700">Related Posts</h4>
              {relatedPosts.map((post) => (
                <div key={post.id} className="p-3 border border-gray-200 rounded-lg bg-gray-50">
                  <p className="text-xs font-medium text-gray-700">{post.user}</p>
                  <p className="text-sm text-gray-800 mt-1">{post.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-200">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <Input
              type="text"
              placeholder="Ask something..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1"
            />
            <Button type="submit" size="icon" className="bg-magenta-600 hover:bg-magenta-700">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
