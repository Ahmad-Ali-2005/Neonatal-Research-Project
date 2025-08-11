import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface PlaceholderPageProps {
  pageTitle: string;
}

export default function PlaceholderPage({ pageTitle }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-background to-health-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">{pageTitle}</h1>
            <p className="text-sm text-muted-foreground">Medical Research Platform</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Card className="shadow-lg border-0 text-center">
          <CardHeader className="pb-6">
            <div className="mx-auto p-4 bg-medical-100 rounded-full w-fit mb-4">
              <Construction className="h-8 w-8 text-medical-600" />
            </div>
            <CardTitle className="text-2xl">{pageTitle}</CardTitle>
            <CardDescription className="text-base">
              This section is currently under development
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're working hard to bring you comprehensive tools for {pageTitle.toLowerCase()}. 
              This page will include advanced features for managing and analyzing medical research data 
              related to pollution effects on neonatal lung development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/">
                <Button variant="outline" size="lg">
                  Return to Homepage
                </Button>
              </Link>
              
              <Link to="/questionnaire">
                <Button size="lg" className="bg-medical-500 hover:bg-medical-600">
                  Continue Data Collection
                </Button>
              </Link>
            </div>
            
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <MessageCircle className="h-4 w-4" />
                For help or inquiries call or text XXX-XXXXXXXX.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
