import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MapPin, Trophy, BookOpen, Heart, Brain, Zap, Target, MessageCircle, Sparkles, Bot } from "lucide-react";
import AIAssistant from "@/components/AIAssistant";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-gold-50">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-alumni-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-alumni-600 to-alumni-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-alumni-900">
                University Alumni
              </h1>
              <p className="text-xs text-alumni-600">Association Portal</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#about"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              About
            </a>
            <a
              href="#events"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Events
            </a>
            <a
              href="#directory"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Directory
            </a>
            <a
              href="#careers"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Careers
            </a>
            <Link to="/login">
              <Button className="bg-alumni-600 hover:bg-alumni-700 text-white">
                Alumni Login
              </Button>
            </Link>
          </nav>
          <div className="md:hidden">
            <Link to="/login">
              <Button
                size="sm"
                className="bg-alumni-600 hover:bg-alumni-700 text-white"
              >
                Login
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-gold-100 text-gold-800 border-gold-200">
            Connecting Alumni Worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-alumni-900 mb-6 leading-tight">
            Welcome to the
            <span className="block bg-gray-800 text-white px-4 py-2 rounded-lg">
              University of Calcutta Alumni Association
            </span>
          </h1>
          <p className="text-xl text-alumni-700 mb-8 leading-relaxed">
            Stay connected with your fellow graduates, discover opportunities,
            and continue your lifelong journey with our vibrant alumni
            community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button
                size="lg"
                className="bg-alumni-600 hover:bg-alumni-700 text-white px-8 py-4 text-lg"
              >
                Join the Network
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-alumni-300 text-alumni-700 hover:bg-alumni-50 px-8 py-4 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-alumni-900 mb-4">
            Why Join Our Alumni Network?
          </h2>
          <p className="text-lg text-alumni-600 max-w-2xl mx-auto">
            Discover the benefits of staying connected with your alma mater and
            fellow graduates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-alumni-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-alumni-600" />
              </div>
              <CardTitle className="text-alumni-900">
                Alumni Directory
              </CardTitle>
              <CardDescription className="text-alumni-600">
                Connect with thousands of alumni worldwide and expand your
                professional network
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-gold-600" />
              </div>
              <CardTitle className="text-alumni-900">
                Exclusive Events
              </CardTitle>
              <CardDescription className="text-alumni-600">
                Attend reunions, networking events, and professional development
                workshops
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-alumni-100 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-alumni-600" />
              </div>
              <CardTitle className="text-alumni-900">
                Career Opportunities
              </CardTitle>
              <CardDescription className="text-alumni-600">
                Access exclusive job postings and mentorship programs from
                fellow alumni
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-gold-600" />
              </div>
              <CardTitle className="text-alumni-900">Global Chapters</CardTitle>
              <CardDescription className="text-alumni-600">
                Join local alumni chapters in cities around the world
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-alumni-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-alumni-600" />
              </div>
              <CardTitle className="text-alumni-900">
                Lifelong Learning
              </CardTitle>
              <CardDescription className="text-alumni-600">
                Access continuing education programs and university resources
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-gold-600" />
              </div>
              <CardTitle className="text-alumni-900">Give Back</CardTitle>
              <CardDescription className="text-alumni-600">
                Support current students through mentorship and scholarship
                programs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Agentic AI Section */}
      <section className="py-20 bg-gradient-to-r from-alumni-900 via-alumni-800 to-alumni-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-gold-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gold-400/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-gold-300 mr-2" />
              <span className="text-gold-200 font-medium">Powered by Agentic AI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Intelligent Alumni Networking
            </h2>
            <p className="text-xl text-alumni-200 max-w-3xl mx-auto leading-relaxed">
              Experience the future of alumni connections with our AI-powered platform that learns, adapts,
              and proactively helps you build meaningful relationships and advance your career.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Smart Matching</CardTitle>
                <CardDescription className="text-alumni-200">
                  AI analyzes your profile, interests, and career goals to connect you with the most relevant alumni for networking and mentorship opportunities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Career Intelligence</CardTitle>
                <CardDescription className="text-alumni-200">
                  Get personalized career recommendations, job opportunities, and skill development paths based on successful alumni in your field.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Proactive Insights</CardTitle>
                <CardDescription className="text-alumni-200">
                  Receive intelligent notifications about networking opportunities, relevant events, and potential collaborations before you even know you need them.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mr-3">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Meet CU Assistant</h3>
                </div>
                <p className="text-alumni-200 mb-6 leading-relaxed">
                  Your personal AI-powered alumni guide that understands your goals, suggests connections,
                  and helps you navigate the vast network of Calcutta University graduates worldwide.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="bg-blue-400/20 text-blue-200 px-3 py-1 rounded-full text-sm">Smart Recommendations</span>
                  <span className="bg-purple-400/20 text-purple-200 px-3 py-1 rounded-full text-sm">Natural Language</span>
                  <span className="bg-green-400/20 text-green-200 px-3 py-1 rounded-full text-sm">24/7 Available</span>
                </div>
                <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white border-0">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat with CU Assistant
                </Button>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/20 to-white/10 rounded-xl p-6 border border-white/30">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 flex-1">
                        <p className="text-white text-sm">
                          "I found 3 alumni in your field who are currently hiring. Would you like me to facilitate an introduction?"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-alumni-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">You</span>
                      </div>
                      <div className="bg-alumni-600/80 rounded-lg p-3 flex-1">
                        <p className="text-white text-sm">
                          "Yes, that would be great! Can you also suggest relevant networking events?"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                      <div className="bg-white/20 rounded-lg p-3 flex-1">
                        <p className="text-white text-sm">
                          "Absolutely! I've scheduled introductions and found 2 perfect events for next week..."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-alumni-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-gold-400 mb-2">50K+</h3>
              <p className="text-alumni-200">Active Alumni</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold-400 mb-2">120+</h3>
              <p className="text-alumni-200">Countries Represented</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold-400 mb-2">500+</h3>
              <p className="text-alumni-200">Annual Events</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gold-400 mb-2">$2M+</h3>
              <p className="text-alumni-200">Scholarships Awarded</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-alumni-900 mb-6">
            Ready to Reconnect?
          </h2>
          <p className="text-xl text-alumni-600 mb-8">
            Join thousands of alumni who are already part of our thriving
            community
          </p>
          <Link to="/login">
            <Button
              size="lg"
              className="bg-alumni-600 hover:bg-alumni-700 text-white px-12 py-4 text-lg"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-alumni-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-alumni-600 to-alumni-800 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold">University Alumni</span>
              </div>
              <p className="text-alumni-300">
                Connecting graduates and fostering lifelong relationships within
                our university community.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-alumni-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Directory
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-alumni-300">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-alumni-300 mb-4">
                Get updates on events and opportunities
              </p>
              <Button
                variant="outline"
                className="border-alumni-600 text-alumni-300 hover:bg-alumni-800"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="border-t border-alumni-800 mt-8 pt-8 text-center text-alumni-400">
            <p>
              &copy; 2024 University Alumni Association. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
