import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, Save, CheckCircle, Baby, MapPin, Calendar, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

export default function Questionnaire() {
  const [currentSection, setCurrentSection] = useState(0);
  const [formData, setFormData] = useState({
    // Doctor Information
    doctorName: "",
    hospitalName: "",
    specialization: "",
    yearsOfExperience: "",
    
    // Patient Information
    patientId: "",
    birthDate: "",
    gestationalAge: "",
    birthWeight: "",
    gender: "",
    
    // Environmental Factors
    motherResidenceArea: "",
    proximityToIndustrialArea: "",
    airQualityIndex: "",
    smokingExposure: "",
    
    // Lung Development Indicators
    respiratoryComplications: [],
    breathingPatterns: "",
    oxygenRequirement: "",
    lungFunctionTests: "",
    
    // Clinical Observations
    additionalFindings: "",
    followUpRequired: "",
    treatmentPlan: ""
  });

  const sections = [
    { title: "Doctor Information", icon: User, description: "Your professional details" },
    { title: "Patient Details", icon: Baby, description: "Neonatal patient information" },
    { title: "Environmental Factors", icon: MapPin, description: "Pollution and environmental exposure" },
    { title: "Lung Development", icon: Calendar, description: "Respiratory health assessment" },
    { title: "Clinical Summary", icon: CheckCircle, description: "Observations and recommendations" }
  ];

  const progress = ((currentSection + 1) / sections.length) * 100;

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/questionnaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        alert('Questionnaire submitted successfully!');
      }
    } catch (error) {
      console.error('Error submitting questionnaire:', error);
      alert('Error submitting questionnaire. Please try again.');
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-50 via-background to-health-50">
      <Navigation />

      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Medical Research Questionnaire</h1>
              <p className="text-sm text-muted-foreground">Effects of Pollution on Neonatal Lung Development</p>
            </div>
            <Badge variant="secondary" className="bg-medical-100 text-medical-700">
              Section {currentSection + 1} of {sections.length}
            </Badge>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <Card className="shadow-lg border-0">
          <CardHeader className="pb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-medical-100 rounded-lg">
                {currentSection === 0 && <User className="h-6 w-6 text-medical-600" />}
                {currentSection === 1 && <Baby className="h-6 w-6 text-medical-600" />}
                {currentSection === 2 && <MapPin className="h-6 w-6 text-medical-600" />}
                {currentSection === 3 && <Calendar className="h-6 w-6 text-medical-600" />}
                {currentSection === 4 && <CheckCircle className="h-6 w-6 text-medical-600" />}
              </div>
              <div>
                <CardTitle className="text-xl">{sections[currentSection].title}</CardTitle>
                <CardDescription>{sections[currentSection].description}</CardDescription>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {/* Section 0: Doctor Information */}
            {currentSection === 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="doctorName">Full Name *</Label>
                  <Input
                    id="doctorName"
                    value={formData.doctorName}
                    onChange={(e) => updateFormData("doctorName", e.target.value)}
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hospitalName">Hospital/Clinic Name *</Label>
                  <Input
                    id="hospitalName"
                    value={formData.hospitalName}
                    onChange={(e) => updateFormData("hospitalName", e.target.value)}
                    placeholder="Metropolitan Medical Center"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="specialization">Specialization *</Label>
                  <Select onValueChange={(value) => updateFormData("specialization", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your specialization" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neonatology">Neonatology</SelectItem>
                      <SelectItem value="pediatrics">Pediatrics</SelectItem>
                      <SelectItem value="pulmonology">Pulmonology</SelectItem>
                      <SelectItem value="family-medicine">Family Medicine</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Input
                    id="experience"
                    type="number"
                    value={formData.yearsOfExperience}
                    onChange={(e) => updateFormData("yearsOfExperience", e.target.value)}
                    placeholder="5"
                  />
                </div>
              </div>
            )}

            {/* Section 1: Patient Details */}
            {currentSection === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="patientId">Patient ID *</Label>
                  <Input
                    id="patientId"
                    value={formData.patientId}
                    onChange={(e) => updateFormData("patientId", e.target.value)}
                    placeholder="Anonymous identifier"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthDate">Birth Date *</Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => updateFormData("birthDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gestationalAge">Gestational Age (weeks) *</Label>
                  <Input
                    id="gestationalAge"
                    type="number"
                    value={formData.gestationalAge}
                    onChange={(e) => updateFormData("gestationalAge", e.target.value)}
                    placeholder="38"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="birthWeight">Birth Weight (grams) *</Label>
                  <Input
                    id="birthWeight"
                    type="number"
                    value={formData.birthWeight}
                    onChange={(e) => updateFormData("birthWeight", e.target.value)}
                    placeholder="3200"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Gender *</Label>
                  <RadioGroup 
                    value={formData.gender} 
                    onValueChange={(value) => updateFormData("gender", value)}
                    className="flex space-x-6"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Section 2: Environmental Factors */}
            {currentSection === 2 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="motherResidence">Mother's Residence Area *</Label>
                  <Select onValueChange={(value) => updateFormData("motherResidenceArea", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select area type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urban-high-pollution">Urban - High Pollution</SelectItem>
                      <SelectItem value="urban-moderate-pollution">Urban - Moderate Pollution</SelectItem>
                      <SelectItem value="suburban">Suburban</SelectItem>
                      <SelectItem value="rural">Rural</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="proximity">Proximity to Industrial Area *</Label>
                  <Select onValueChange={(value) => updateFormData("proximityToIndustrialArea", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select proximity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1km">Less than 1 km</SelectItem>
                      <SelectItem value="1-5km">1-5 km</SelectItem>
                      <SelectItem value="5-10km">5-10 km</SelectItem>
                      <SelectItem value="more-than-10km">More than 10 km</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="airQuality">Average Air Quality Index *</Label>
                  <Select onValueChange={(value) => updateFormData("airQualityIndex", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select AQI range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50 (Good)</SelectItem>
                      <SelectItem value="51-100">51-100 (Moderate)</SelectItem>
                      <SelectItem value="101-150">101-150 (Unhealthy for Sensitive)</SelectItem>
                      <SelectItem value="151-200">151-200 (Unhealthy)</SelectItem>
                      <SelectItem value="201+">201+ (Very Unhealthy)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Smoking Exposure During Pregnancy *</Label>
                  <RadioGroup 
                    value={formData.smokingExposure} 
                    onValueChange={(value) => updateFormData("smokingExposure", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none" />
                      <Label htmlFor="none">No exposure</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="passive" id="passive" />
                      <Label htmlFor="passive">Passive smoking</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="active" id="active" />
                      <Label htmlFor="active">Active smoking</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            )}

            {/* Section 3: Lung Development */}
            {currentSection === 3 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label>Respiratory Complications (check all that apply)</Label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Respiratory Distress Syndrome", "Bronchopulmonary Dysplasia", "Pneumonia", "Meconium Aspiration", "Pneumothorax", "Apnea"].map((complication) => (
                      <div key={complication} className="flex items-center space-x-2">
                        <Checkbox 
                          id={complication}
                          checked={formData.respiratoryComplications.includes(complication)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              updateFormData("respiratoryComplications", [...formData.respiratoryComplications, complication]);
                            } else {
                              updateFormData("respiratoryComplications", formData.respiratoryComplications.filter(c => c !== complication));
                            }
                          }}
                        />
                        <Label htmlFor={complication} className="text-sm">{complication}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breathingPatterns">Breathing Patterns *</Label>
                  <Select onValueChange={(value) => updateFormData("breathingPatterns", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select breathing pattern" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="normal">Normal</SelectItem>
                      <SelectItem value="tachypnea">Tachypnea</SelectItem>
                      <SelectItem value="bradypnea">Bradypnea</SelectItem>
                      <SelectItem value="irregular">Irregular</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="oxygenRequirement">Oxygen Requirement *</Label>
                  <Select onValueChange={(value) => updateFormData("oxygenRequirement", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select oxygen requirement" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No supplemental oxygen</SelectItem>
                      <SelectItem value="low-flow">Low-flow nasal cannula</SelectItem>
                      <SelectItem value="high-flow">High-flow nasal cannula</SelectItem>
                      <SelectItem value="cpap">CPAP</SelectItem>
                      <SelectItem value="mechanical-ventilation">Mechanical ventilation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lungFunctionTests">Lung Function Test Results</Label>
                  <Textarea
                    id="lungFunctionTests"
                    value={formData.lungFunctionTests}
                    onChange={(e) => updateFormData("lungFunctionTests", e.target.value)}
                    placeholder="Please describe any lung function test results, X-ray findings, or other diagnostic results..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Section 4: Clinical Summary */}
            {currentSection === 4 && (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="additionalFindings">Additional Clinical Findings</Label>
                  <Textarea
                    id="additionalFindings"
                    value={formData.additionalFindings}
                    onChange={(e) => updateFormData("additionalFindings", e.target.value)}
                    placeholder="Any additional observations, findings, or relevant clinical notes..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Follow-up Required *</Label>
                  <RadioGroup 
                    value={formData.followUpRequired} 
                    onValueChange={(value) => updateFormData("followUpRequired", value)}
                    className="space-y-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="followup-yes" />
                      <Label htmlFor="followup-yes">Yes, follow-up scheduled</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="followup-no" />
                      <Label htmlFor="followup-no">No follow-up needed</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="treatmentPlan">Treatment Plan</Label>
                  <Textarea
                    id="treatmentPlan"
                    value={formData.treatmentPlan}
                    onChange={(e) => updateFormData("treatmentPlan", e.target.value)}
                    placeholder="Current treatment plan, medications, or interventions..."
                    rows={3}
                  />
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentSection === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>
          
          <div className="flex space-x-3">
            <Button variant="outline">
              <Save className="h-4 w-4 mr-2" />
              Save Draft
            </Button>
            
            {currentSection < sections.length - 1 ? (
              <Button onClick={handleNext} className="bg-medical-500 hover:bg-medical-600">
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-health-500 hover:bg-health-600">
                <CheckCircle className="h-4 w-4 mr-2" />
                Submit Questionnaire
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
