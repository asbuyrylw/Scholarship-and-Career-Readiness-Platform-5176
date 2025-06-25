import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiTrendingUp, FiTarget, FiBarChart, FiCalendar, FiAlertCircle } = FiIcons;

const CounselorDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const dashboardStats = [
    { label: 'Students Served', value: '247', icon: FiUsers, color: 'text-blue-600' },
    { label: 'Scholarships Applied', value: '1,234', icon: FiTarget, color: 'text-green-600' },
    { label: 'Success Rate', value: '87%', icon: FiTrendingUp, color: 'text-purple-600' },
    { label: 'Equity Score', value: '92', icon: FiBarChart, color: 'text-orange-600' }
  ];

  const studentAlerts = [
    { name: 'Maria Rodriguez', issue: 'FAFSA deadline approaching', priority: 'high', time: '2 hours ago' },
    { name: 'James Wilson', issue: 'Missing transcript submission', priority: 'medium', time: '1 day ago' },
    { name: 'Sarah Chen', issue: 'Scholarship match available', priority: 'low', time: '2 days ago' }
  ];

  const equityMetrics = [
    { category: 'First-Generation', current: 45, target: 50, color: 'bg-blue-500' },
    { category: 'Underrepresented Minorities', current: 38, target: 45, color: 'bg-green-500' },
    { category: 'Low-Income Students', current: 52, target: 55, color: 'bg-purple-500' }
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Counselor Dashboard</h1>
          <p className="text-lg text-gray-600">Manage student success and track equity outcomes</p>
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
            {/* Student Alerts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <SafeIcon icon={FiAlertCircle} className="mr-2 text-orange-500" />
                Student Alerts
              </h2>
              <div className="space-y-4">
                {studentAlerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      alert.priority === 'high' ? 'bg-red-500' :
                      alert.priority === 'medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{alert.name}</p>
                      <p className="text-sm text-gray-600">{alert.issue}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                    <button className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-600 transition-colors">
                      Review
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Equity Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h2 className="text-xl font-bold text-gray-900 mb-6">Equity Progress</h2>
              <div className="space-y-6">
                {equityMetrics.map((metric, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{metric.category}</span>
                      <span className="text-sm text-gray-600">{metric.current}% / {metric.target}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${metric.color} transition-all duration-300`}
                        style={{ width: `${(metric.current / metric.target) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all">
                  Generate Report
                </button>
                <button className="w-full border-2 border-primary-500 text-primary-600 py-3 rounded-lg font-medium hover:bg-primary-50 transition-all">
                  Schedule Meeting
                </button>
                <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-all">
                  Export Data
                </button>
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-gray-900">Upcoming Events</h3>
                <SafeIcon icon={FiCalendar} className="text-gray-400" />
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <p className="font-semibold text-gray-900 text-sm">College Fair</p>
                  <p className="text-xs text-gray-500">March 15, 2024</p>
                </div>
                <div className="border-l-4 border-secondary-500 pl-4">
                  <p className="font-semibold text-gray-900 text-sm">FAFSA Workshop</p>
                  <p className="text-xs text-gray-500">March 20, 2024</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-gray-900 text-sm">Career Day</p>
                  <p className="text-xs text-gray-500">March 25, 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounselorDashboard;