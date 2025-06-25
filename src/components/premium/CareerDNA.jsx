import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBrain, FiTarget, FiUsers, FiTrendingUp, FiStar, FiPlay, FiLock } = FiIcons;

const CareerDNA = () => {
  const [assessmentStarted, setAssessmentStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const careerClusters = [
    { name: 'Engineering & Technology', match: 92, color: 'bg-blue-500' },
    { name: 'Healthcare Sciences', match: 85, color: 'bg-green-500' },
    { name: 'Business & Finance', match: 78, color: 'bg-purple-500' },
    { name: 'Education & Training', match: 71, color: 'bg-orange-500' },
    { name: 'Arts & Communication', match: 65, color: 'bg-pink-500' }
  ];

  const personalityResults = {
    'Openness': 82,
    'Conscientiousness': 91,
    'Extraversion': 67,
    'Agreeableness': 75,
    'Neuroticism': 34
  };

  const naceCompetencies = [
    { name: 'Critical Thinking', score: 88, description: 'Analyze complex problems and develop solutions' },
    { name: 'Communication', score: 79, description: 'Express ideas clearly in written and verbal formats' },
    { name: 'Teamwork', score: 85, description: 'Collaborate effectively with diverse groups' },
    { name: 'Leadership', score: 72, description: 'Guide and influence others toward common goals' },
    { name: 'Technology', score: 94, description: 'Leverage digital tools and platforms effectively' }
  ];

  const mentorConsultations = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Senior Software Engineer at Google',
      expertise: 'Computer Science & AI',
      rating: 4.9,
      available: true
    },
    {
      name: 'Michael Rodriguez',
      title: 'Biomedical Engineer at Mayo Clinic',
      expertise: 'Healthcare Technology',
      rating: 4.8,
      available: true
    },
    {
      name: 'Jennifer Liu',
      title: 'Product Manager at Microsoft',
      expertise: 'Technology Leadership',
      rating: 4.9,
      available: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Career DNA Premium</h1>
              <p className="text-lg text-gray-600">Discover your perfect career path with AI-powered assessment</p>
            </div>
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Premium Feature - $7.99/month
            </div>
          </div>
        </motion.div>

        {/* Assessment Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiBrain} className="text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Assessment Complete</h3>
                <p className="opacity-90">Big 5 Personality + NACE Competencies Analysis</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">94%</div>
              <div className="text-sm opacity-80">Match Confidence</div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Cluster Matches */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Career Cluster Matches</h2>
              <div className="space-y-4">
                {careerClusters.map((cluster, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-900">{cluster.name}</span>
                        <span className="text-sm font-semibold text-gray-600">{cluster.match}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${cluster.color} transition-all duration-300`}
                          style={{ width: `${cluster.match}%` }}
                        ></div>
                      </div>
                    </div>
                    <button className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors">
                      Explore
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* NACE Competencies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">NACE Career Readiness Competencies</h2>
              <div className="grid gap-4">
                {naceCompetencies.map((competency, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{competency.name}</h3>
                      <span className="text-lg font-bold text-primary-600">{competency.score}%</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{competency.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${competency.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Mentor Consultations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Industry Mentor Consultations</h2>
              <div className="space-y-4">
                {mentorConsultations.map((mentor, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                          <SafeIcon icon={FiUsers} className="text-primary-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{mentor.name}</h3>
                          <p className="text-sm text-gray-600">{mentor.title}</p>
                          <p className="text-xs text-gray-500">{mentor.expertise}</p>
                          <div className="flex items-center space-x-1 mt-1">
                            <SafeIcon icon={FiStar} className="text-yellow-400 w-3 h-3" />
                            <span className="text-xs text-gray-600">{mentor.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {mentor.available ? (
                          <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                            Book Session
                          </button>
                        ) : (
                          <button className="bg-gray-100 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed">
                            Unavailable
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Personality Profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Big 5 Personality Profile</h3>
              <div className="space-y-4">
                {Object.entries(personalityResults).map(([trait, score]) => (
                  <div key={trait}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{trait}</span>
                      <span className="text-sm text-gray-600">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Career Roadmap */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Personalized Career Roadmap</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <p className="font-medium text-gray-900">Complete STEM Courses</p>
                    <p className="text-sm text-gray-600">Focus on AP Math & Science</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <p className="font-medium text-gray-900">Build Portfolio</p>
                    <p className="text-sm text-gray-600">Create coding projects</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <p className="font-medium text-gray-900">Seek Internships</p>
                    <p className="text-sm text-gray-600">Gain industry experience</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                View Full Roadmap
              </button>
            </motion.div>

            {/* Upgrade CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <SafeIcon icon={FiLock} className="text-2xl" />
                <h3 className="text-lg font-bold">Premium Features</h3>
              </div>
              <ul className="space-y-2 text-sm mb-4">
                <li>• Advanced personality insights</li>
                <li>• 1-on-1 mentor sessions</li>
                <li>• Personalized career roadmaps</li>
                <li>• Industry salary data</li>
              </ul>
              <button className="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Upgrade to Premium
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDNA;