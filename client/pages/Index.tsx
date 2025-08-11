import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Activity, Users, Database, BarChart3, Stethoscope, AirVent, Baby } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-background to-health-50">
      <Navigation />
      {/* Hero Section */}
      <section className="relative px-6 pt-14 pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4 bg-medical-100 text-medical-700 hover:bg-medical-200">
              <Activity className="mr-2 h-4 w-4" />
              Medical Research Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              Understanding Pollution's Impact on 
              <span className="text-medical-500"> Neonatal Lung Development</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              A comprehensive data collection platform enabling healthcare professionals to contribute vital research data on environmental factors affecting infant respiratory health.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/questionnaire">
                <Button size="lg" className="bg-medical-500 hover:bg-medical-600">
                  Start Data Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                <BarChart3 className="mr-2 h-4 w-4" />
                View Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Contributing to Critical Research
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your clinical observations help build a comprehensive understanding of environmental health impacts
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-medical-100 rounded-lg">
                    <Stethoscope className="h-6 w-6 text-medical-600" />
                  </div>
                  <CardTitle className="text-lg">Clinical Data Collection</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Structured questionnaires designed by medical professionals to capture relevant patient data, environmental exposures, and clinical observations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-health-100 rounded-lg">
                    <AirVent className="h-6 w-6 text-health-600" />
                  </div>
                  <CardTitle className="text-lg">Respiratory Health Focus</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Specialized focus on neonatal and infant lung development patterns, breathing complications, and respiratory system maturation markers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-medical-100 rounded-lg">
                    <Baby className="h-6 w-6 text-medical-600" />
                  </div>
                  <CardTitle className="text-lg">Neonatal Development</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Track developmental milestones, growth patterns, and health outcomes in newborns exposed to various environmental conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-health-100 rounded-lg">
                    <Database className="h-6 w-6 text-health-600" />
                  </div>
                  <CardTitle className="text-lg">Secure Data Storage</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  HIPAA-compliant data storage with advanced encryption ensures patient privacy while enabling meaningful research analysis.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-medical-100 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-medical-600" />
                  </div>
                  <CardTitle className="text-lg">Research Analytics</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Advanced analytics and visualization tools help identify patterns, correlations, and insights from collected clinical data.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="p-2 bg-health-100 rounded-lg">
                    <Users className="h-6 w-6 text-health-600" />
                  </div>
                  <CardTitle className="text-lg">Collaborative Research</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  Connect with fellow researchers and healthcare professionals contributing to environmental health studies worldwide.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-medical-500 to-health-500">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Contribute?
            </h2>
            <p className="mt-4 text-lg text-medical-100">
              Join healthcare professionals worldwide in advancing our understanding of environmental health impacts on infant development.
            </p>
            <div className="mt-8">
              <Link to="/questionnaire">
                <Button size="lg" variant="secondary" className="bg-white text-medical-600 hover:bg-medical-50">
                  <Heart className="mr-2 h-4 w-4" />
                  Begin Data Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
