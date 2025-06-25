import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUser, FiFileText, FiEdit, FiDownload, FiEye, FiStar, FiCheck } = FiIcons;

const ResumeArchitect = () => {
  const [activeSection, setActiveSection] = useState('personal');
  
  const resumeSections = [
    { id: 'personal', name: 'Personal Info', icon: FiUser, completed: true },
    { id: 'experience', name: 'Experience', icon: FiFileText, completed: false },
    { id: 'education', name: 'Education', icon: FiStar, completed: true },
    { id: 'skills', name: 'Skills', icon: FiCheck, completed: false }
  ];

  const experienceEntries = [
    {
      title: 'Retail Associate',
      company: 'Local Store',
      duration: 'June 2023 - Present',
      original: 'Help customers and work cash register',
      enhanced: 'Deliver exceptional customer service while processing transactions and maintaining inventory accuracy'
    },
    {
      title: 'Babysitter',
      company: 'Family Services',
      duration: 'September 2022 - May 2023',
      original: 'Watch kids after school',
      enhanced: 'Provided comprehensive childcare management including educational support, meal preparation, and safety supervision'
    }
  ];

  const skillsSuggestions = [
    'Customer Service Excellence',
    'Point-of-Sale Systems',
    'Inventory Management',
    'Team Collaboration',
    'Problem Solving',
    'Time Management',
    'Communication',
    'Leadership'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Resume Architect</h1>
          <p className="text-lg text-gray-600">Transform your experiences into professional achievements</p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-4">Resume Sections</h2>
              <div className="space-y-2">
                {resumeSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all ${
                      activeSection === section.id
                        ? 'bg-primary-100 text-primary-700'
                        : 'hover:bg-gray-50 text-gray-600'
                    }`}
                  >
                    <SafeIcon icon={section.icon} className="text-lg" />
                    <span className="flex-1 font-medium">{section.name}</span>
                    {section.completed && (
                      <SafeIcon icon={FiCheck} className="text-green-500" />
                    )}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiEye} />
                  <span>Preview Resume</span>
                </button>
                <button className="w-full mt-2 border-2 border-primary-500 text-primary-600 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-all flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiDownload} />
                  <span>Download PDF</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {activeSection === 'experience' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
                  <div className="space-y-6">
                    {experienceEntries.map((entry, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
                            <p className="text-gray-600">{entry.company}</p>
                            <p className="text-sm text-gray-500">{entry.duration}</p>
                          </div>
                          <button className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                            AI Enhanced
                          </button>
                        </div>
                        
                        <div className="space-y-4">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <h4 className="font-medium text-red-800 mb-2">Original Description:</h4>
                            <p className="text-red-700 text-sm">{entry.original}</p>
                          </div>
                          
                          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <h4 className="font-medium text-green-800 mb-2">AI-Enhanced Description:</h4>
                            <p className="text-green-700 text-sm">{entry.enhanced}</p>
                          </div>
                        </div>
                        
                        <button className="mt-4 bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2">
                          <SafeIcon icon={FiEdit} />
                          <span>Edit Description</span>
                        </button>
                      </div>
                    ))}
                    
                    <button className="w-full border-2 border-dashed border-gray-300 rounded-lg p-6 text-gray-500 hover:border-primary-300 hover:text-primary-600 transition-all">
                      + Add New Experience
                    </button>
                  </div>
                </div>
              )}

              {activeSection === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills & Competencies</h2>
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">AI-Suggested Skills</h3>
                    <p className="text-gray-600 mb-4">Based on your experience, we recommend these skills:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skillsSuggestions.map((skill, index) => (
                        <button
                          key={index}
                          className="bg-primary-50 text-primary-700 px-4 py-2 rounded-lg border border-primary-200 hover:bg-primary-100 transition-colors text-sm"
                        >
                          + {skill}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">ATS Optimization Score</h3>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <span className="text-2xl font-bold text-green-600">85%</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Your resume is well-optimized for Applicant Tracking Systems. Add 2 more technical skills to reach 90%.
                    </p>
                  </div>
                </div>
              )}

              {activeSection === 'personal' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeSection === 'education' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">School Name</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="High School Name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Graduation Year</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="2024"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">GPA</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="3.8"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Relevant Coursework</label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="AP Courses, Honors Classes"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeArchitect;