import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiBarChart, FiTrendingUp, FiUsers, FiTarget, FiAlertTriangle, FiCheckCircle } = FiIcons;

const EquityCenter = () => {
  const [selectedMetric, setSelectedMetric] = useState('college-readiness');

  const equityMetrics = {
    'college-readiness': {
      title: 'College Readiness Gap Analysis',
      data: [
        { group: 'All Students', current: 78, target: 85, color: 'bg-blue-500' },
        { group: 'First-Generation', current: 65, target: 80, color: 'bg-green-500' },
        { group: 'Underrepresented Minorities', current: 62, target: 78, color: 'bg-purple-500' },
        { group: 'Low-Income Students', current: 58, target: 75, color: 'bg-orange-500' },
        { group: 'English Language Learners', current: 52, target: 70, color: 'bg-pink-500' }
      ]
    },
    'scholarship-access': {
      title: 'Scholarship Access & Success',
      data: [
        { group: 'All Students', current: 82, target: 90, color: 'bg-blue-500' },
        { group: 'First-Generation', current: 71, target: 85, color: 'bg-green-500' },
        { group: 'Underrepresented Minorities', current: 68, target: 82, color: 'bg-purple-500' },
        { group: 'Low-Income Students', current: 75, target: 88, color: 'bg-orange-500' },
        { group: 'English Language Learners', current: 61, target: 78, color: 'bg-pink-500' }
      ]
    }
  };

  const interventionTracking = [
    {
      student: 'Maria Rodriguez',
      intervention: 'FAFSA Completion Support',
      status: 'In Progress',
      progress: 70,
      priority: 'High',
      deadline: '2024-03-15'
    },
    {
      student: 'James Wilson',
      intervention: 'College Application Mentoring',
      status: 'Completed',
      progress: 100,
      priority: 'Medium',
      deadline: '2024-02-28'
    },
    {
      student: 'Aisha Patel',
      intervention: 'Scholarship Essay Workshop',
      status: 'In Progress',
      progress: 45,
      priority: 'High',
      deadline: '2024-03-20'
    }
  ];

  const outcomeProjections = [
    {
      metric: 'College Enrollment Rate',
      current: '68%',
      projected: '75%',
      improvement: '+7%',
      confidence: 'High'
    },
    {
      metric: 'Scholarship Awards',
      current: '$2.1M',
      projected: '$2.8M',
      improvement: '+33%',
      confidence: 'Medium'
    },
    {
      metric: 'FAFSA Completion',
      current: '72%',
      projected: '89%',
      improvement: '+17%',
      confidence: 'High'
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Equity Command Center</h1>
          <p className="text-lg text-gray-600">Track equity outcomes and manage intervention strategies</p>
        </motion.div>

        {/* Metric Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex flex-wrap gap-4">
            {Object.entries(equityMetrics).map(([key, metric]) => (
              <button
                key={key}
                onClick={() => setSelectedMetric(key)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedMetric === key
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {metric.title}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gap Analysis Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {equityMetrics[selectedMetric].title}
              </h2>
              <div className="space-y-6">
                {equityMetrics[selectedMetric].data.map((group, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{group.group}</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-600">{group.current}%</span>
                        <span className="text-xs text-gray-500">/ {group.target}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div className="relative w-full h-4">
                        <div 
                          className={`h-4 rounded-full ${group.color} transition-all duration-300`}
                          style={{ width: `${(group.current / group.target) * 100}%` }}
                        ></div>
                        <div 
                          className="absolute top-0 h-4 w-1 bg-gray-800 rounded-full"
                          style={{ left: `${(group.target / 100) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Gap: {group.target - group.current}%</span>
                      <span>Target: {group.target}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Intervention Tracking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Active Interventions</h2>
              <div className="space-y-4">
                {interventionTracking.map((intervention, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-gray-900">{intervention.student}</h3>
                        <p className="text-sm text-gray-600">{intervention.intervention}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          intervention.priority === 'High' ? 'bg-red-100 text-red-800' :
                          intervention.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {intervention.priority}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          intervention.status === 'Completed' ? 'bg-green-100 text-green-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {intervention.status}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{intervention.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${intervention.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Due: {intervention.deadline}</span>
                        <button className="text-primary-600 hover:text-primary-700 font-medium">
                          Update Progress
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Outcome Projections */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiTrendingUp} className="mr-2 text-green-500" />
                Outcome Projections
              </h3>
              <div className="space-y-4">
                {outcomeProjections.map((projection, index) => (
                  <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-gray-900">{projection.metric}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        projection.confidence === 'High' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {projection.confidence}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{projection.current}</span>
                      <SafeIcon icon={FiTrendingUp} className="text-green-500 w-3 h-3" />
                      <span className="text-sm font-semibold text-gray-900">{projection.projected}</span>
                      <span className="text-xs text-green-600 font-medium">
                        {projection.improvement}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Alert Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-200"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <SafeIcon icon={FiAlertTriangle} className="mr-2 text-orange-500" />
                Priority Alerts
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 border border-orange-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <SafeIcon icon={FiAlertTriangle} className="text-red-500 w-4 h-4" />
                    <span className="text-sm font-medium text-gray-900">Gap Widening</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    First-generation college readiness gap increased by 3% this quarter
                  </p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <SafeIcon icon={FiCheckCircle} className="text-green-500 w-4 h-4" />
                    <span className="text-sm font-medium text-gray-900">Target Met</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Low-income scholarship access exceeded target by 5%
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
                  Generate Report
                </button>
                <button className="w-full border-2 border-primary-500 text-primary-600 py-3 rounded-lg font-medium hover:bg-primary-50 transition-colors">
                  Create Intervention
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors">
                  Export Data
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquityCenter;