// Frontend AI Service - Interfaces with backend AI endpoints

class AIService {
  constructor() {
    // For demo purposes, we'll simulate AI responses
    this.mockMode = true;
    this.baseURL = process.env.NODE_ENV === 'production' 
      ? 'https://your-api-domain.com/api' 
      : 'http://localhost:3001/api';
  }

  // Generic API request handler
  async makeRequest(endpoint, data, options = {}) {
    // In mock mode, return simulated responses
    if (this.mockMode) {
      return this.getMockResponse(endpoint, data);
    }

    try {
      const response = await fetch(`${this.baseURL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'API request failed');
      }

      return await response.json();
    } catch (error) {
      console.error(`AI Service Error (${endpoint}):`, error);
      // Fallback to mock response on error
      return this.getMockResponse(endpoint, data);
    }
  }

  // Mock response generator
  getMockResponse(endpoint, data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        switch (endpoint) {
          case '/scholarships/match':
            resolve({ matches: this.getMockScholarshipMatches() });
            break;
          case '/fafsa/validate':
            resolve({ validation: this.getMockFAFSAValidation() });
            break;
          case '/resume/enhance':
            resolve({ enhancement: this.getMockResumeEnhancement(data.experienceData) });
            break;
          case '/career/analyze':
            resolve({ analysis: this.getMockCareerAnalysis() });
            break;
          default:
            resolve({ result: 'Mock response' });
        }
      }, 1000); // Simulate network delay
    });
  }

  // Scholarship Matching
  async matchScholarships(studentProfile) {
    try {
      const response = await this.makeRequest('/scholarships/match', {
        studentProfile
      });
      
      return response.matches || [];
    } catch (error) {
      console.error('Scholarship matching failed:', error);
      return this.getMockScholarshipMatches();
    }
  }

  // FAFSA Validation
  async validateFAFSA(fafsaData) {
    try {
      const response = await this.makeRequest('/fafsa/validate', {
        fafsaData
      });
      
      return response.validation;
    } catch (error) {
      console.error('FAFSA validation failed:', error);
      return this.getMockFAFSAValidation();
    }
  }

  // Resume Enhancement
  async enhanceResume(experienceData) {
    try {
      const response = await this.makeRequest('/resume/enhance', {
        experienceData
      });
      
      return response.enhancement;
    } catch (error) {
      console.error('Resume enhancement failed:', error);
      return this.getMockResumeEnhancement(experienceData);
    }
  }

  // Career DNA Analysis
  async analyzeCareerDNA(assessmentData) {
    try {
      const response = await this.makeRequest('/career/analyze', {
        assessmentData
      });
      
      return response.analysis;
    } catch (error) {
      console.error('Career analysis failed:', error);
      return this.getMockCareerAnalysis();
    }
  }

  // Document Processing
  async processDocument(file, documentType) {
    try {
      const formData = new FormData();
      formData.append('document', file);
      formData.append('documentType', documentType);

      const response = await fetch(`${this.baseURL}/documents/process`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Document processing failed');
      }

      const result = await response.json();
      return result.processedData;
    } catch (error) {
      console.error('Document processing failed:', error);
      return {
        extractedData: {
          income: '$45,000',
          assets: '$12,000',
          dependents: 2
        },
        confidence: 0.95
      };
    }
  }

  // Mock data generators
  getMockScholarshipMatches() {
    return [
      {
        id: 1,
        name: 'Merit Excellence Scholarship',
        matchScore: 95,
        amount: '$15,000',
        deadline: 'March 15, 2024',
        provider: 'National Education Foundation',
        requirements: ['GPA 3.5+', 'Community Service', 'Leadership'],
        description: 'Awarded to students demonstrating academic excellence and community leadership.',
        category: 'Merit-Based',
        renewable: true,
        reasoning: 'Your 3.75 GPA and leadership experience in Robotics Club align perfectly with this scholarship\'s criteria.'
      },
      {
        id: 2,
        name: 'STEM Leadership Award',
        matchScore: 88,
        amount: '$8,500',
        deadline: 'April 1, 2024',
        provider: 'Tech Innovation Institute',
        requirements: ['STEM Major', 'GPA 3.2+', 'Project Portfolio'],
        description: 'Supporting future technology leaders with academic and project-based achievements.',
        category: 'STEM',
        renewable: false,
        reasoning: 'Your Computer Science major and technical project experience make this a strong match.'
      },
      {
        id: 3,
        name: 'First-Generation College Success Grant',
        matchScore: 92,
        amount: '$5,000',
        deadline: 'February 28, 2024',
        provider: 'Educational Equity Foundation',
        requirements: ['First-Gen Status', 'Financial Need', 'Academic Progress'],
        description: 'Supporting first-generation college students in achieving their educational goals.',
        category: 'Need-Based',
        renewable: true,
        reasoning: 'Your first-generation status and demonstrated financial need qualify you for this targeted support.'
      }
    ];
  }

  getMockFAFSAValidation() {
    return `
**FAFSA Analysis Report**

✅ **Validation Results:**
- Income reporting: Consistent across forms
- Asset valuations: Within acceptable ranges
- Dependency status: Correctly classified

⚠️ **Optimization Opportunities:**
1. Consider timing of asset liquidation to reduce EFC
2. Explore professional judgment appeals for special circumstances
3. Review state aid deadlines for additional opportunities

💡 **Estimated EFC:** $3,200 - $3,800

**Next Steps:**
- Submit FAFSA by state deadline (March 1st)
- Complete CSS Profile for institutional aid
- Appeal EFC if family circumstances have changed
    `;
  }

  getMockResumeEnhancement(experienceData) {
    const enhanced = {
      'Retail Associate': `• Delivered exceptional customer service to 50+ daily customers while maintaining 99% transaction accuracy
• Collaborated with cross-functional team of 8 associates to achieve monthly sales targets consistently exceeding $25K
• Demonstrated strong problem-solving skills by resolving customer concerns and processing returns efficiently
• Managed inventory control and visual merchandising to optimize product placement and drive sales`,

      'Babysitter': `• Provided comprehensive childcare management for families with children ages 3-12, ensuring safety and educational development
• Designed and implemented age-appropriate learning activities that improved children's academic performance by 15%
• Demonstrated exceptional communication skills through detailed progress reports to parents and conflict resolution
• Managed multiple responsibilities including meal preparation, transportation coordination, and emergency response protocols`,

      'Tutor': `• Mentored 15+ students in mathematics and science, resulting in average grade improvements of 1.2 letter grades
• Developed personalized learning strategies tailored to individual learning styles and academic needs
• Utilized technology platforms and interactive teaching methods to enhance student engagement and comprehension
• Maintained detailed progress tracking and provided regular feedback to students, parents, and academic coordinators`
    };

    const jobTitle = experienceData?.title || 'Experience';
    const enhancedText = enhanced[jobTitle] || enhanced['Retail Associate'];

    return `**Enhanced Professional Description:**

${enhancedText}

**Extracted Transferable Skills:**
• Customer Service Excellence
• Team Collaboration
• Problem-Solving
• Communication
• Time Management
• Attention to Detail
• Adaptability
• Leadership

**ATS Keywords Added:**
customer service, team collaboration, problem-solving, communication, time management, leadership, sales, inventory management`;
  }

  getMockCareerAnalysis() {
    return `
**Career DNA Analysis Report**

🎯 **Top Career Cluster Matches:**
1. **Engineering & Technology (92% match)**
   - Software Engineer: $95,000 average salary
   - Data Scientist: $110,000 average salary
   - Systems Analyst: $88,000 average salary

2. **Business & Finance (85% match)**
   - Financial Analyst: $78,000 average salary
   - Project Manager: $92,000 average salary
   - Business Analyst: $82,000 average salary

3. **Healthcare Sciences (78% match)**
   - Health Informatics: $89,000 average salary
   - Biomedical Engineer: $95,000 average salary
   - Healthcare Administrator: $75,000 average salary

🧠 **Personality Insights:**
Your high conscientiousness (91%) and openness (82%) indicate strong analytical skills and attention to detail, perfect for technology and engineering roles.

📈 **NACE Competency Highlights:**
- Technology: 94% (Exceptional)
- Critical Thinking: 88% (Strong)
- Problem Solving: 92% (Exceptional)

🛤️ **Personalized Career Roadmap:**
**Year 1-2:** Complete AP Computer Science and Mathematics courses
**Year 3-4:** Build coding portfolio and seek internships
**College:** Major in Computer Science or Engineering
**Post-Grad:** Entry-level software engineering position

**Recommended Skills to Develop:**
• Python/Java Programming
• Data Analysis Tools
• Project Management
• Technical Communication
    `;
  }

  // Health check
  async checkHealth() {
    try {
      const response = await fetch(`${this.baseURL}/health`);
      return await response.json();
    } catch (error) {
      return { 
        status: 'mock-mode', 
        message: 'Running in demo mode with simulated AI responses',
        openai: 'demo'
      };
    }
  }
}

export default new AIService();