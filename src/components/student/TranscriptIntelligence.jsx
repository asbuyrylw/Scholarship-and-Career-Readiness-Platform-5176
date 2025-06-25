import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiFileText, FiShield, FiCheckCircle, FiAlertCircle, FiTrendingUp, FiTarget, FiBook } = FiIcons;

const TranscriptIntelligence = () => {
  const [verificationStatus, setVerificationStatus] = useState('verified');
  
  const transcriptData = {
    gpa: 3.75,
    credits: 24,
    school: 'Lincoln High School',
    graduationDate: 'May 2024',
    lastUpdated: '15 minutes ago'
  };

  const courseMapping = [
    {
      course: 'AP Computer Science',
      grade: 'A',
      credits: 4,
      skills: ['Programming', 'Problem Solving', 'Logical Thinking', 'Algorithm Design']
    },
    {
      course: 'Honors English Literature',
      grade: 'A-',
      credits: 4,
      skills: ['Written Communication', 'Critical Analysis', 'Research', 'Public Speaking']
    },
    {
      course: 'AP Calculus AB',
      grade: 'B+',
      credits: 4,
      skills: ['Mathematical Analysis', 'Quantitative Reasoning', 'Problem Solving']
    },
    {
      course: 'Chemistry',
      grade: 'A',
      credits: 4,
      skills: ['Scientific Method', 'Laboratory Skills', 'Data Analysis', 'Attention to Detail']
    }
  ];

  const riskAlerts = [
    {
      type: 'warning',
      message: 'Math sequence gap detected - consider taking Pre-Calculus',
      severity: 'medium'
    },
    {
      type: 'success',
      message: 'Strong STEM foundation identified for engineering programs',
      severity: 'low'
    }
  ];

  const skillsProfile = {
    'Technical Skills': 85,
    'Communication': 78,
    'Problem Solving': 92,
    'Leadership': 65,
    'Research': 80
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Transcript Intelligence</h1>
          <p className="text-lg text-gray-600">NSC-verified academic records with AI-powered insights</p>
        </motion.div>

        {/* Verification Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiShield} className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">NSC Verification Complete</h3>
                <p className="text-gray-600">Last updated: {transcriptData.lastUpdated}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-2 text-green-600">
                <SafeIcon icon={FiCheckCircle} />
                <span className="font-semibold">Verified</span>
              </div>
              <p className="text-sm text-gray-500">100% Accurate</p>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Academic Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Academic Summary</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600">{transcriptData.gpa}</div>
                  <div className="text-sm text-gray-600">Cumulative GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600">{transcriptData.credits}</div>
                  <div className="text-sm text-gray-600">Total Credits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4.0</div>
                  <div className="text-sm text-gray-600">Senior Year GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">12</div>
                  <div className="text-sm text-gray-600">AP/Honors Courses</div>
                </div>
              </div>
            </motion.div>

            {/* Course-to-Skills Mapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Course-to-Skills Mapping</h2>
              <div className="space-y-6">
                {courseMapping.map((course, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{course.course}</h3>
                        <p className="text-sm text-gray-600">{course.credits} credits</p>
                      </div>
                      <div className="text-right">
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                          course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                          course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {course.grade}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Extracted Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {course.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Risk Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Academic Risk Analysis</h2>
              <div className="space-y-4">
                {riskAlerts.map((alert, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-3 p-4 rounded-lg border ${
                      alert.type === 'warning' ? 'bg-yellow-50 border-yellow-200' : 'bg-green-50 border-green-200'
                    }`}
                  >
                    <SafeIcon
                      icon={alert.type === 'warning' ? FiAlertCircle : FiCheckCircle}
                      className={`mt-1 ${alert.type === 'warning' ? 'text-yellow-600' : 'text-green-600'}`}
                    />
                    <div>
                      <p className={`font-medium ${alert.type === 'warning' ? 'text-yellow-800' : 'text-green-800'}`}>
                        {alert.message}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        Severity: {alert.severity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Skills Profile */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiTrendingUp} className="mr-2 text-primary-500" />
                Skills Profile
              </h3>
              <div className="space-y-4">
                {Object.entries(skillsProfile).map(([skill, score]) => (
                  <div key={skill}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                      <span className="text-sm text-gray-600">{score}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiFileText} />
                  <span>Download Report</span>
                </button>
                <button className="w-full border-2 border-primary-500 text-primary-600 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiTarget} />
                  <span>Find Scholarships</span>
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
                  <SafeIcon icon={FiBook} />
                  <span>Course Recommendations</span>
                </button>
              </div>
            </motion.div>

            {/* Processing Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Processing Details</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Time:</span>
                  <span className="font-medium">Less than 15 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Data Source:</span>
                  <span className="font-medium">NSC Verified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Compliance:</span>
                  <span className="font-medium">FERPA Compliant</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Auto-Purge:</span>
                  <span className="font-medium">120 days</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranscriptIntelligence;