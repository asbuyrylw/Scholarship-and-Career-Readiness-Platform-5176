import express from 'express';
import cors from 'cors';
import multer from 'multer';
import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Configure OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configure multer for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
});

// AI Service Functions
class AIService {
  // Scholarship Matching AI
  static async matchScholarships(studentProfile) {
    try {
      const prompt = `
        Analyze this student profile and recommend scholarships based on 25+ criteria:
        
        Student Profile:
        - GPA: ${studentProfile.gpa}
        - Major: ${studentProfile.major}
        - Extracurriculars: ${studentProfile.extracurriculars}
        - Demographics: ${studentProfile.demographics}
        - Financial Need: ${studentProfile.financialNeed}
        - Leadership Experience: ${studentProfile.leadership}
        - Community Service Hours: ${studentProfile.communityService}
        
        Provide scholarship recommendations with match scores (0-100) and reasoning.
        Format as JSON with scholarship name, match score, requirements, and reasoning.
      `;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'You are an expert scholarship counselor with access to comprehensive scholarship databases. Provide accurate, personalized recommendations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000,
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI Scholarship Matching Error:', error);
      throw new Error('Failed to generate scholarship matches');
    }
  }

  // FAFSA Error Detection
  static async validateFAFSA(fafsaData) {
    try {
      const prompt = `
        Analyze this FAFSA data for errors and optimization opportunities:
        
        FAFSA Data:
        ${JSON.stringify(fafsaData, null, 2)}
        
        Check for:
        1. Income consistency issues
        2. Asset reporting errors
        3. Dependency status problems
        4. Missing required fields
        5. EFC optimization opportunities
        
        Provide detailed error analysis and suggestions for improvement.
      `;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'You are a FAFSA expert who identifies errors and provides optimization strategies to maximize financial aid eligibility.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 1500,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI FAFSA Validation Error:', error);
      throw new Error('Failed to validate FAFSA data');
    }
  }

  // Resume Enhancement
  static async enhanceResume(experienceData) {
    try {
      const prompt = `
        Transform this basic work experience into professional resume language:
        
        Original Experience:
        - Title: ${experienceData.title}
        - Company: ${experienceData.company}
        - Description: ${experienceData.originalDescription}
        - Duration: ${experienceData.duration}
        
        Create:
        1. Professional bullet points with action verbs
        2. Quantified achievements where possible
        3. Skills extraction
        4. ATS-optimized keywords
        
        Focus on transferable skills and professional growth.
      `;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'You are a professional resume writer who transforms basic experiences into compelling, ATS-optimized descriptions.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI Resume Enhancement Error:', error);
      throw new Error('Failed to enhance resume');
    }
  }

  // Career DNA Analysis
  static async analyzeCareerDNA(assessmentData) {
    try {
      const prompt = `
        Analyze this career assessment data and provide comprehensive career guidance:
        
        Assessment Results:
        - Big 5 Personality: ${JSON.stringify(assessmentData.personality)}
        - NACE Competencies: ${JSON.stringify(assessmentData.competencies)}
        - Interests: ${assessmentData.interests}
        - Skills: ${assessmentData.skills}
        - Values: ${assessmentData.values}
        
        Provide:
        1. Top 5 career cluster matches with percentages
        2. Specific occupation recommendations
        3. Personalized career roadmap
        4. Skills development suggestions
        5. Education pathway recommendations
      `;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'You are a career counselor with expertise in personality assessment, career matching, and professional development planning.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.6,
        max_tokens: 2500,
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error('OpenAI Career Analysis Error:', error);
      throw new Error('Failed to analyze career DNA');
    }
  }

  // Document OCR Processing
  static async processDocument(documentText, documentType) {
    try {
      const prompt = `
        Extract and structure information from this ${documentType} document:
        
        Document Content:
        ${documentText}
        
        Extract relevant data points and format as structured JSON.
        For ${documentType}, focus on key financial/academic information.
      `;

      const completion = await openai.chat.completions.create({
        model: process.env.OPENAI_MODEL || 'gpt-4-turbo-preview',
        messages: [
          {
            role: 'system',
            content: 'You are an expert document processor that extracts structured data from various document types with high accuracy.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.1,
        max_tokens: 1500,
      });

      return JSON.parse(completion.choices[0].message.content);
    } catch (error) {
      console.error('OpenAI Document Processing Error:', error);
      throw new Error('Failed to process document');
    }
  }
}

// API Routes

// Scholarship Matching Endpoint
app.post('/api/scholarships/match', async (req, res) => {
  try {
    const { studentProfile } = req.body;
    
    if (!studentProfile) {
      return res.status(400).json({ error: 'Student profile is required' });
    }

    const matches = await AIService.matchScholarships(studentProfile);
    
    res.json({
      success: true,
      matches,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Scholarship matching error:', error);
    res.status(500).json({ 
      error: 'Failed to generate scholarship matches',
      details: error.message 
    });
  }
});

// FAFSA Validation Endpoint
app.post('/api/fafsa/validate', async (req, res) => {
  try {
    const { fafsaData } = req.body;
    
    if (!fafsaData) {
      return res.status(400).json({ error: 'FAFSA data is required' });
    }

    const validation = await AIService.validateFAFSA(fafsaData);
    
    res.json({
      success: true,
      validation,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('FAFSA validation error:', error);
    res.status(500).json({ 
      error: 'Failed to validate FAFSA',
      details: error.message 
    });
  }
});

// Resume Enhancement Endpoint
app.post('/api/resume/enhance', async (req, res) => {
  try {
    const { experienceData } = req.body;
    
    if (!experienceData) {
      return res.status(400).json({ error: 'Experience data is required' });
    }

    const enhancement = await AIService.enhanceResume(experienceData);
    
    res.json({
      success: true,
      enhancement,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Resume enhancement error:', error);
    res.status(500).json({ 
      error: 'Failed to enhance resume',
      details: error.message 
    });
  }
});

// Career DNA Analysis Endpoint
app.post('/api/career/analyze', async (req, res) => {
  try {
    const { assessmentData } = req.body;
    
    if (!assessmentData) {
      return res.status(400).json({ error: 'Assessment data is required' });
    }

    const analysis = await AIService.analyzeCareerDNA(assessmentData);
    
    res.json({
      success: true,
      analysis,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Career analysis error:', error);
    res.status(500).json({ 
      error: 'Failed to analyze career DNA',
      details: error.message 
    });
  }
});

// Document Processing Endpoint
app.post('/api/documents/process', upload.single('document'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Document file is required' });
    }

    const { documentType } = req.body;
    const documentText = req.file.buffer.toString('utf-8');
    
    const processedData = await AIService.processDocument(documentText, documentType);
    
    res.json({
      success: true,
      processedData,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Document processing error:', error);
    res.status(500).json({ 
      error: 'Failed to process document',
      details: error.message 
    });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    timestamp: new Date().toISOString(),
    openai: process.env.OPENAI_API_KEY ? 'configured' : 'missing'
  });
});

app.listen(port, () => {
  console.log(`🚀 AI Server running on port ${port}`);
  console.log(`📡 OpenAI Integration: ${process.env.OPENAI_API_KEY ? '✅ Configured' : '❌ Missing API Key'}`);
});

export default app;