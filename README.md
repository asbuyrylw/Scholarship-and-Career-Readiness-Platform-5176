# ScholarPath - AI-Powered Scholarship Platform

## Quick Start (Demo Mode)

The platform now runs in **demo mode** with simulated AI responses, so you can explore all features without needing OpenAI API keys initially.

### 1. Install & Run
```bash
npm install
npm run dev
```

### 2. Explore AI Features
- **Scholarship Matching**: Intelligent recommendations with match scores
- **FAFSA Navigator**: Error detection and optimization suggestions  
- **Resume Architect**: Professional experience enhancement
- **Career DNA**: Personality-driven career guidance
- **Transcript Intelligence**: Academic record analysis

## Production Setup (Real AI)

### 1. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/)
2. Create account and generate API key
3. Copy key starting with `sk-...`

### 2. Setup Backend Server
```bash
# Create server environment
cd server
npm install

# Add your API key to server/.env
OPENAI_API_KEY=sk-your-actual-api-key-here
OPENAI_MODEL=gpt-4-turbo-preview
PORT=3001

# Start backend server
npm run dev
```

### 3. Enable Real AI
Update `src/services/aiService.js`:
```javascript
constructor() {
  this.mockMode = false; // Enable real AI
  this.baseURL = 'http://localhost:3001/api';
}
```

### 4. Run Full Stack
```bash
# Terminal 1: Frontend
npm run dev

# Terminal 2: Backend  
cd server && npm run dev
```

## Features Overview

### 🎯 **AI Scholarship Matching**
- Analyzes 25+ student criteria
- Generates match scores with reasoning
- Tracks application deadlines
- Personalized recommendations

**Demo Data Includes:**
- Merit Excellence Scholarship (95% match)
- STEM Leadership Award (88% match)  
- First-Generation Success Grant (92% match)

### 📋 **FAFSA Intelligence**
- Error detection and validation
- EFC optimization strategies
- Income/asset analysis
- Deadline tracking

### 📄 **Resume Enhancement**
- Transforms basic experiences into professional language
- Extracts transferable skills
- ATS optimization
- Industry-specific keywords

### 🧬 **Career DNA Analysis**
- Big 5 personality assessment
- NACE competency evaluation
- Career cluster matching (16 pathways)
- Personalized roadmaps

### 📊 **Equity Analytics** (Counselor Tools)
- Gap analysis and intervention tracking
- Outcome projections
- Student progress monitoring
- Compliance reporting

## Architecture

```
Frontend (React + Vite)
├── Demo Mode: Simulated AI responses
├── Production: Real OpenAI integration
└── Graceful fallbacks for reliability

Backend (Express + OpenAI)
├── AI service endpoints
├── Document processing
├── Error handling
└── Rate limiting
```

## Cost Management

**Demo Mode:** Free - unlimited usage
**Production Mode:**
- OpenAI charges ~$0.002 per request
- Implement caching for cost optimization
- Monitor usage via OpenAI dashboard

## Security Best Practices

✅ **API keys never exposed to frontend**  
✅ **Environment variable configuration**  
✅ **Input validation and sanitization**  
✅ **Rate limiting and error handling**  
✅ **CORS protection**

## Next Steps

1. **Explore Demo**: Test all AI features in demo mode
2. **Get OpenAI Key**: Sign up for production AI capabilities  
3. **Deploy Backend**: Set up server with real AI integration
4. **Customize Prompts**: Tailor AI responses for your needs
5. **Scale Up**: Add caching, monitoring, and optimization

The platform provides immediate value in demo mode and scales to full AI power when you're ready! 🚀