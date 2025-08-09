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
import {
  BookOpen,
  Users,
  Award,
  Globe,
  Heart,
  Target,
  Calendar,
  GraduationCap,
  Bot,
} from "lucide-react";
import AIAssistant from "@/components/AIAssistant";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-gold-50">
      {/* Header/Navigation */}
      <header className="bg-white/80 backdrop-blur-md border-b border-alumni-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-alumni-600 to-alumni-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-alumni-900">
                University Alumni
              </h1>
              <p className="text-xs text-alumni-600">Association Portal</p>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Home
            </Link>
            <a
              href="#history"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              History
            </a>
            <a
              href="#mission"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Mission
            </a>
            <a
              href="#leadership"
              className="text-alumni-700 hover:text-alumni-900 transition-colors"
            >
              Leadership
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
            About Our Association
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-alumni-900 mb-6 leading-tight">
            About the
            <span className="block bg-gray-800 text-white px-4 py-2 rounded-lg mt-2">
              University of Calcutta Alumni Association
            </span>
          </h1>
          <p className="text-xl text-alumni-700 mb-8 leading-relaxed">
            Connecting generations of brilliant minds from one of India's most
            prestigious institutions, fostering lifelong relationships and
            driving positive change in the world.
          </p>
        </div>
      </section>

      {/* University History Section */}
      <section id="history" className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4 bg-alumni-100 text-alumni-800 border-alumni-200">
              Est. 1857
            </Badge>
            <h2 className="text-4xl font-bold text-alumni-900 mb-6">
              A Legacy of Excellence
            </h2>
            <p className="text-lg text-alumni-700 mb-6 leading-relaxed">
              The University of Calcutta, established in 1857, stands as one of
              India's oldest and most prestigious universities. With over 165
              years of academic excellence, we have nurtured countless leaders,
              innovators, and change-makers who have shaped the world.
            </p>
            <p className="text-lg text-alumni-700 mb-8 leading-relaxed">
              Our alumni association continues this tradition by maintaining the
              bonds formed during university years and creating new opportunities
              for collaboration, mentorship, and mutual support among our global
              community of graduates.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-alumni-600 mb-2">165+</h3>
                <p className="text-alumni-700">Years of Legacy</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-alumni-600 mb-2">50K+</h3>
                <p className="text-alumni-700">Global Alumni</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-alumni-100 to-gold-100 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 w-20 h-20 bg-alumni-600/10 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-gold-400/20 rounded-full"></div>
              <GraduationCap className="w-24 h-24 text-alumni-600 mb-6" />
              <h3 className="text-2xl font-bold text-alumni-900 mb-4">
                Notable Alumni Include
              </h3>
              <ul className="space-y-3 text-alumni-700">
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-gold-600" />
                  Nobel Laureates & Scientists
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-gold-600" />
                  Industry Leaders & Entrepreneurs
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-gold-600" />
                  Government Officials & Diplomats
                </li>
                <li className="flex items-center">
                  <Award className="w-5 h-5 mr-3 text-gold-600" />
                  Artists & Cultural Icons
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="bg-alumni-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Mission & Vision</h2>
            <p className="text-xl text-alumni-200 max-w-3xl mx-auto">
              Empowering our alumni community to create lasting impact while
              maintaining the proud traditions of the University of Calcutta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Mission</CardTitle>
                <CardDescription className="text-alumni-200">
                  To connect, support, and empower University of Calcutta alumni
                  worldwide, fostering lifelong relationships and creating
                  opportunities for personal and professional growth while
                  giving back to our alma mater.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Vision</CardTitle>
                <CardDescription className="text-alumni-200">
                  To be the premier global network of University of Calcutta
                  graduates, driving innovation, excellence, and positive change
                  in society while preserving and promoting our institutional
                  values and heritage.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Our Values</CardTitle>
                <CardDescription className="text-alumni-200">
                  Excellence, integrity, inclusivity, and service to society.
                  We believe in the power of education to transform lives and
                  the responsibility of alumni to create opportunities for
                  future generations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-alumni-900 mb-6">
            Leadership Team
          </h2>
          <p className="text-xl text-alumni-600 max-w-3xl mx-auto">
            Our dedicated leadership team works tirelessly to serve the alumni
            community and advance the mission of our association
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-alumni-600 to-alumni-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-alumni-900">President</CardTitle>
              <CardDescription className="text-alumni-600">
                Leading the association's strategic vision and fostering global
                alumni connections across all disciplines and generations.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-alumni-900">Vice President</CardTitle>
              <CardDescription className="text-alumni-600">
                Coordinating regional chapters and organizing events that bring
                alumni together for networking and professional development.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-alumni-200 hover:shadow-lg transition-shadow bg-white/70 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <CardTitle className="text-alumni-900">Secretary</CardTitle>
              <CardDescription className="text-alumni-600">
                Managing association operations, maintaining member records, and
                ensuring effective communication across our global network.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-alumni-600 to-alumni-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Join Our Leadership</h3>
          <p className="text-alumni-200 mb-6 max-w-2xl mx-auto">
            Interested in contributing to the alumni community? We're always
            looking for passionate alumni to join our leadership team and help
            shape the future of our association.
          </p>
          <Button className="bg-gold-500 hover:bg-gold-600 text-white border-0">
            Get Involved
          </Button>
        </div>
      </section>

      {/* AI Features Highlight */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  Powered by AI
                </Badge>
              </div>
              <h3 className="text-3xl font-bold text-alumni-900 mb-4">
                Smart Alumni Network
              </h3>
              <p className="text-lg text-alumni-700 mb-6">
                Our association leverages cutting-edge Agentic AI technology to
                provide personalized networking opportunities, career guidance,
                and intelligent matching between alumni based on interests,
                expertise, and goals.
              </p>
              <ul className="space-y-3 text-alumni-700">
                <li className="flex items-center">
                  <Bot className="w-5 h-5 mr-3 text-blue-600" />
                  AI-powered alumni matching and networking
                </li>
                <li className="flex items-center">
                  <Bot className="w-5 h-5 mr-3 text-blue-600" />
                  Personalized career and mentorship recommendations
                </li>
                <li className="flex items-center">
                  <Bot className="w-5 h-5 mr-3 text-blue-600" />
                  Intelligent event and opportunity discovery
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-200">
                <Bot className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-alumni-900 mb-2">
                  CU Assistant
                </h4>
                <p className="text-alumni-600 mb-4">
                  Your personal AI guide for navigating the alumni network
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  Try AI Assistant
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-alumni-900 mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-alumni-600 mb-8">
            Become part of the University of Calcutta Alumni Association and
            connect with fellow graduates worldwide
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button
                size="lg"
                className="bg-alumni-600 hover:bg-alumni-700 text-white px-12 py-4 text-lg"
              >
                Join the Network
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="outline"
                size="lg"
                className="border-alumni-300 text-alumni-700 hover:bg-alumni-50 px-12 py-4 text-lg"
              >
                Back to Home
              </Button>
            </Link>
          </div>
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
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-alumni-300">
                <li>
                  <a href="#history" className="hover:text-white transition-colors">
                    Our History
                  </a>
                </li>
                <li>
                  <a href="#mission" className="hover:text-white transition-colors">
                    Mission & Vision
                  </a>
                </li>
                <li>
                  <a href="#leadership" className="hover:text-white transition-colors">
                    Leadership
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Alumni Network
                  </Link>
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
              &copy; 2024 University of Calcutta Alumni Association. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
}
