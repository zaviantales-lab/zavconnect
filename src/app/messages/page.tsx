'use client'

import { useState } from 'react'
import { Search, Send, MoreVertical, Phone, Video, Paperclip, Smile } from 'lucide-react'
import { GlassCard } from '@/components/ui/GlassCard'
import Image from 'next/image'

const conversations = [
  {
    id: '1',
    name: 'Sarah Chen',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=400',
    lastMessage: 'Thanks for the connection! Looking forward to collaborating.',
    timestamp: '2m ago',
    unread: true,
    online: true
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=400',
    lastMessage: 'The project timeline looks good. When can we start?',
    timestamp: '1h ago',
    unread: false,
    online: false
  },
  {
    id: '3',
    name: 'Alex Rivera',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?w=400',
    lastMessage: 'I have some ideas for the design. Want to chat?',
    timestamp: '3h ago',
    unread: true,
    online: true
  },
  {
    id: '4',
    name: 'Jessica Wong',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?w=400',
    lastMessage: 'Great meeting you at the conference yesterday!',
    timestamp: '1d ago',
    unread: false,
    online: false
  }
]

const messages = [
  {
    id: '1',
    senderId: '2',
    content: 'Hey! I saw your profile and I think we could work well together on some projects.',
    timestamp: '10:30 AM',
    isCurrentUser: false
  },
  {
    id: '2',
    senderId: '1',
    content: 'Hi Marcus! Thanks for reaching out. I\'d love to learn more about what you have in mind.',
    timestamp: '10:32 AM',
    isCurrentUser: true
  },
  {
    id: '3',
    senderId: '2',
    content: 'I\'m working on a fintech startup and we need someone with your React and TypeScript expertise. The project timeline looks good. When can we start?',
    timestamp: '10:35 AM',
    isCurrentUser: false
  },
  {
    id: '4',
    senderId: '1',
    content: 'That sounds really interesting! I\'m available to start next week. Could we schedule a call to discuss the details?',
    timestamp: '10:38 AM',
    isCurrentUser: true
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[1])
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[800px]">
          {/* Conversations Sidebar */}
          <div className="lg:col-span-4">
            <GlassCard className="h-full flex flex-col">
              <div className="p-6 border-b border-white/20 dark:border-gray-700">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Messages
                </h2>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full p-4 flex items-center space-x-3 hover:bg-white/10 dark:hover:bg-white/5 transition-colors duration-200 ${
                      selectedConversation.id === conversation.id ? 'bg-white/20 dark:bg-white/10' : ''
                    }`}
                  >
                    <div className="relative">
                      <Image
                        src={conversation.avatar}
                        alt={conversation.name}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      {conversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0 text-left">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900 dark:text-white truncate">
                          {conversation.name}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p className={`text-sm truncate ${
                        conversation.unread 
                          ? 'text-gray-900 dark:text-white font-medium' 
                          : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {conversation.lastMessage}
                      </p>
                    </div>
                    {conversation.unread && (
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-8">
            <GlassCard className="h-full flex flex-col">
              {/* Chat Header */}
              <div className="p-6 border-b border-white/20 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Image
                        src={selectedConversation.avatar}
                        alt={selectedConversation.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      {selectedConversation.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">
                        {selectedConversation.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {selectedConversation.online ? 'Online' : 'Offline'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-colors duration-200">
                      <Phone className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-colors duration-200">
                      <Video className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                    <button className="p-2 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-colors duration-200">
                      <MoreVertical className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                        message.isCurrentUser
                          ? 'bg-primary-600 text-white'
                          : 'bg-white/20 dark:bg-white/10 text-gray-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.isCurrentUser ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-6 border-t border-white/20 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                  <button className="p-2 rounded-lg bg-white/20 dark:bg-white/10 hover:bg-white/30 dark:hover:bg-white/20 transition-colors duration-200">
                    <Paperclip className="h-5 w-5 text-gray-600 dark:text-gray-300" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      placeholder="Type a message..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="w-full px-4 py-2 bg-white/50 dark:bg-gray-800/50 border border-white/30 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 pr-10"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <Smile className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim()}
                    className="p-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  )
}