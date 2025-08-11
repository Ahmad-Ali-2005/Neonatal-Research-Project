import { RequestHandler } from "express";

// In a real application, this would connect to a database
// For now, we'll store data in memory (this resets on server restart)
const questionnaires: any[] = [];

export const handleQuestionnaireSubmission: RequestHandler = (req, res) => {
  try {
    const questionnaireData = req.body;
    
    // Validate required fields
    const requiredFields = [
      'doctorName', 'hospitalName', 'specialization', 'yearsOfExperience',
      'patientId', 'birthDate', 'gestationalAge', 'birthWeight', 'gender',
      'motherResidenceArea', 'proximityToIndustrialArea', 'airQualityIndex', 'smokingExposure',
      'breathingPatterns', 'oxygenRequirement', 'followUpRequired'
    ];
    
    for (const field of requiredFields) {
      if (!questionnaireData[field]) {
        return res.status(400).json({
          error: `Missing required field: ${field}`
        });
      }
    }
    
    // Add timestamp and ID
    const submission = {
      id: Date.now().toString(),
      submittedAt: new Date().toISOString(),
      ...questionnaireData
    };
    
    // Store the submission (in real app, this would be saved to database)
    questionnaires.push(submission);
    
    res.status(201).json({
      message: "Questionnaire submitted successfully",
      submissionId: submission.id
    });
    
  } catch (error) {
    console.error('Error processing questionnaire submission:', error);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};

export const handleGetQuestionnaires: RequestHandler = (req, res) => {
  try {
    // In a real application, you'd want authentication and authorization here
    // Return anonymized data for research purposes
    const anonymizedData = questionnaires.map(q => ({
      id: q.id,
      submittedAt: q.submittedAt,
      specialization: q.specialization,
      yearsOfExperience: q.yearsOfExperience,
      gestationalAge: q.gestationalAge,
      birthWeight: q.birthWeight,
      gender: q.gender,
      motherResidenceArea: q.motherResidenceArea,
      proximityToIndustrialArea: q.proximityToIndustrialArea,
      airQualityIndex: q.airQualityIndex,
      smokingExposure: q.smokingExposure,
      respiratoryComplications: q.respiratoryComplications,
      breathingPatterns: q.breathingPatterns,
      oxygenRequirement: q.oxygenRequirement,
      followUpRequired: q.followUpRequired
      // Exclude personal identifiers like doctorName, hospitalName, patientId
    }));
    
    res.json({
      total: anonymizedData.length,
      data: anonymizedData
    });
    
  } catch (error) {
    console.error('Error retrieving questionnaires:', error);
    res.status(500).json({
      error: "Internal server error"
    });
  }
};
