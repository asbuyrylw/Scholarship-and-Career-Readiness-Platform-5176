import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiFileText, FiUser, FiTrendingUp, FiDollarSign, FiBriefcase, FiCalendar, FiAward } = FiIcons;

const StudentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardStats = [
    { label: 'Scholarship Matches', value: '12', icon: FiTarget, color: 'text-blue-600' },
    { label: 'Applications Submitted', value: '8', icon: FiFileText, color: 'text-green-600' },
    { label: 'Awards Won', value: '$15,500', icon: FiDollarSign, color: 'text-purple-600' },
    { label: 'Career Matches', value: '6', icon: FiBriefcase, color: 'text-orange-600' }
  ];

  const recentActivity = [
    { action: 'Scholarship match found', detail: 'Merit Excellence Award - $15,000', time: '2 hours ago', type: 'match' },
    { action: 'FAFSA submitted', detail: 'Successfully submitted with no errors', time: '1 day ago', type: 'complete' },
    { action: 'Resume updated', detail: 'Added internship experience', time: '3 days ago', type: 'update' },
    { action: 'Career assessment completed', detail: 'Engineering pathway recommended', time: '1 week ago', type: 'assessment' }
  ];

  const upcomingDeadlines = [
    { scholarship: 'STEM Leadership Award', deadline: 'March 15, 2024', amount: '$8,500', priority: 'high' },
    { scholarship: 'Community Service Grant', deadline: 'March 22, 2024', amount: '$3,000', priority: 'medium' },
    { scholarship: 'Academic Excellence Fund', deadline: 'April 1, 2024', amount: '$12,000', priority: 'high' }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Student Dashboard</h1>
          <p className="text-lg text-gray-600">Track your progress and manage your college journey</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center`}>
                  <SafeIcon icon={stat.icon} className={`text-xl ${stat.color}`} />
                </div>
                <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Find Scholarships', path: '/scholarships', icon: FiTarget, color: 'from-blue-500 to-blue-600' },
                  { name: 'FAFSA Help', path: '/fafsa', icon: FiFileText, color: 'from-green-500 to-green-600' },
                  { name: 'Build Resume', path: '/resume', icon: FiUser, color: 'from-purple-500 to-purple-600' },
                  { name: 'Career DNA', path: '/career-dna', icon: FiBriefcase, color: 'from-orange-500 to-orange-600' }
                ].map((action, index) => (
                  <Link key={index} to={action.path}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`bg-gradient-to-r ${action.color} p-4 rounded-xl text-white text-center cursor-pointer`}
                    >
                      <SafeIcon icon={action.icon} className="text-2xl mx-auto mb-2" />
                      <p className="text-sm font-medium">{action.name}</p>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      activity.type === 'match' ? 'bg-blue-500' :
                      activity.type === 'complete' ? 'bg-green-500' :
                      activity.type === 'update' ? 'bg-yellow-500' : 'bg-purple-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.detail}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Deadlines */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Upcoming Deadlines</h3>
                <SafeIcon icon={FiCalendar} className="text-gray-400" />
              </div>
              <div className="space-y-4">
                {upcomingDeadlines.map((item, index) => (
                  <div key={index} className="border-l-4 border-primary-500 pl-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{item.scholarship}</p>
                        <p className="text-primary-600 font-medium text-sm">{item.amount}</p>
                        <p className="text-xs text-gray-500">{item.deadline}</p>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.priority === 'high' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Progress Overview */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Profile Completion</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Overall Progress</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Academic Info</span>
                    <SafeIcon icon={FiTarget} className="text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Extracurriculars</span>
                    <SafeIcon icon={FiTarget} className="text-green-500" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Essay Responses</span>
                    <SafeIcon icon={FiTarget} className="text-yellow-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;