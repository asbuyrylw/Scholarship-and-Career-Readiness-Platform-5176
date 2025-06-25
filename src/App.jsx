import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Services from './components/home/Services';
import StudentDashboard from './components/student/StudentDashboard';
import CounselorDashboard from './components/counselor/CounselorDashboard';
import ScholarshipMatcher from './components/student/ScholarshipMatcher';
import FAFSANavigator from './components/student/FAFSANavigator';
import ResumeArchitect from './components/student/ResumeArchitect';
import TranscriptIntelligence from './components/student/TranscriptIntelligence';
import CareerDNA from './components/premium/CareerDNA';
import EquityCenter from './components/counselor/EquityCenter';
import PricingPage from './components/pricing/PricingPage';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
              <Features />
              <Services />
            </motion.div>
          } />
          <Route path="/student" element={<StudentDashboard />} />
          <Route path="/counselor" element={<CounselorDashboard />} />
          <Route path="/scholarships" element={<ScholarshipMatcher />} />
          <Route path="/fafsa" element={<FAFSANavigator />} />
          <Route path="/resume" element={<ResumeArchitect />} />
          <Route path="/transcripts" element={<TranscriptIntelligence />} />
          <Route path="/career-dna" element={<CareerDNA />} />
          <Route path="/equity" element={<EquityCenter />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;