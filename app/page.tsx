import NavBar from "@/components/nav-bar"
import BottomTabBar from "@/components/bottom-tab-bar"
import PostCard from "@/components/post-card"
import { ThemeProvider } from "@/components/theme-provider"

// Sample post data
const posts = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: "2h ago",
    content: "Just finished working on a new AI project. The results are promising! #AI #MachineLearning",
    image: "/placeholder.svg?height=300&width=500",
    likes: 42,
    reposts: 12,
    comments: 8,
  },
  {
    id: 2,
    user: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: "4h ago",
    content: "The latest advancements in NLP are mind-blowing. Chatbots are becoming more human-like every day.",
    likes: 28,
    reposts: 5,
    comments: 3,
  },
  {
    id: 3,
    user: {
      name: "Mike Rivera",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: "6h ago",
    content: "Just published my research on sentiment analysis in social media. Check it out!",
    image: "/placeholder.svg?height=300&width=500",
    likes: 56,
    reposts: 23,
    comments: 15,
  },
  {
    id: 4,
    user: {
      name: "Priya Patel",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    timestamp: "8h ago",
    content:
      "Excited to announce our new open-source NLP library! It's designed to make text processing easier for developers.",
    likes: 89,
    reposts: 34,
    comments: 12,
  },
]

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div className="flex flex-col min-h-screen bg-gray-50">
        <NavBar />

        <main className="flex-1 max-w-lg mx-auto w-full pb-16">
          <div className="feed-container space-y-4 p-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </main>

        <BottomTabBar />
      </div>
    </ThemeProvider>
  )
}
