import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, Construction } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-alumni-50 via-white to-gold-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-alumni-200">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-alumni-600 to-alumni-800 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-alumni-900">University Alumni</h1>
              <p className="text-xs text-alumni-600">Association Portal</p>
            </div>
          </Link>
          <Link to="/login">
            <Button className="bg-alumni-600 hover:bg-alumni-700 text-white">
              Alumni Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 flex items-center justify-center">
        <Card className="max-w-md border-alumni-200 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-gold-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-alumni-900">{title}</CardTitle>
            <CardDescription className="text-alumni-600">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-alumni-600">
              This page is coming soon. Please continue exploring other sections of the alumni portal.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/">
                <Button variant="outline" className="border-alumni-300 text-alumni-700 hover:bg-alumni-50">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-alumni-600 hover:bg-alumni-700 text-white">
                  Login to Portal
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
