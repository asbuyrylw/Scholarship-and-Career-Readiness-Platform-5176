import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiTarget, FiTrendingUp, FiAward } = FiIcons;

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Future
                <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered scholarship matching, career readiness tools, and comprehensive 
                college preparation—all in one intelligent platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/student">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <span>Get Started</span>
                  <SafeIcon icon={FiArrowRight} className="text-lg" />
                </motion.button>
              </Link>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all duration-200"
                >
                  View Pricing
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {[
                { icon: FiTarget, value: '$1.05M+', label: 'Scholarships Matched' },
                { icon: FiTrendingUp, value: '3.5x', label: 'More Awards Won' },
                { icon: FiAward, value: '90%', label: 'Career Clarity Rate' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <SafeIcon icon={stat.icon} className="text-primary-600 text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Scholarship Matches</h3>
                  <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                    12 Perfect Matches
                  </span>
                </div>
                
                {[
                  { name: 'Merit Excellence Scholarship', amount: '$15,000', match: '98%' },
                  { name: 'STEM Leadership Award', amount: '$8,500', match: '95%' },
                  { name: 'Community Impact Grant', amount: '$5,000', match: '92%' }
                ].map((scholarship, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{scholarship.name}</div>
                      <div className="text-primary-600 font-semibold">{scholarship.amount}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Match Score</div>
                      <div className="font-bold text-green-600">{scholarship.match}</div>
                    </div>
                  </motion.div>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-3 rounded-lg font-medium"
                >
                  View All Matches
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;