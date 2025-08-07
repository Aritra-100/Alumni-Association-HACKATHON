import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  MessageCircle, 
  X, 
  Send, 
  Sparkles,
  Users,
  Calendar,
  Briefcase,
  BookOpen
} from "lucide-react";

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "assistant",
      content: "Hello! I'm CU Assistant, your AI-powered alumni guide. I can help you find connections, discover opportunities, and navigate the Calcutta University alumni network. How can I assist you today?"
    }
  ]);

  const quickActions = [
    { icon: Users, label: "Find Alumni", description: "Connect with graduates in your field" },
    { icon: Calendar, label: "Events", description: "Discover relevant networking events" },
    { icon: Briefcase, label: "Jobs", description: "Explore career opportunities" },
    { icon: BookOpen, label: "Mentorship", description: "Find or become a mentor" }
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setMessages(prev => [...prev, { type: "user", content: message }]);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: "assistant",
        content: "I understand you're looking for that. Let me search through our alumni network and find the best matches for you. This might take a moment..."
      }]);
    }, 1000);
  };

  const handleQuickAction = (action: string) => {
    setMessages(prev => [...prev, 
      { type: "user", content: `Help me with ${action}` },
      { type: "assistant", content: `Great choice! I'm analyzing our database to find the best ${action.toLowerCase()} opportunities for you based on your profile and interests. Here's what I found...` }
    ]);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-alumni-600 to-alumni-700 hover:from-alumni-700 hover:to-alumni-800 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="relative">
              <Bot className="w-6 h-6 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gold-400 rounded-full animate-pulse"></div>
            </div>
          )}
        </Button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] z-50">
          <Card className="h-full bg-white shadow-2xl border-alumni-200 flex flex-col">
            <CardHeader className="bg-gradient-to-r from-alumni-600 to-alumni-700 text-white rounded-t-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5 text-alumni-900" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-white">CU Assistant</CardTitle>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-xs text-alumni-200">Online</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-gold-400/20 text-gold-200 border-gold-400/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  AI
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.type === "user"
                          ? "bg-alumni-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{msg.content}</p>
                    </div>
                  </div>
                ))}
                
                {/* Quick Actions */}
                {messages.length === 1 && (
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600 font-medium">Quick Actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickAction(action.label)}
                          className="p-3 border border-alumni-200 rounded-lg hover:bg-alumni-50 transition-colors text-left group"
                        >
                          <div className="flex items-center space-x-2 mb-1">
                            <action.icon className="w-4 h-4 text-alumni-600" />
                            <span className="text-sm font-medium text-alumni-900">{action.label}</span>
                          </div>
                          <p className="text-xs text-gray-600">{action.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 border-alumni-200 focus:border-alumni-400"
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-alumni-600 hover:bg-alumni-700 text-white"
                    disabled={!message.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Powered by Agentic AI • Always learning, always helping
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
