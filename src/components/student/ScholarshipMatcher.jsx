import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useAI } from '../../hooks/useAI';

const { FiSearch, FiFilter, FiTarget, FiCalendar, FiDollarSign, FiExternalLink, FiStar, FiRefreshCw, FiInfo } = FiIcons;

const ScholarshipMatcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [scholarships, setScholarships] = useState([]);
  const [studentProfile, setStudentProfile] = useState({
    gpa: 3.75,
    major: 'Computer Science',
    extracurriculars: 'Robotics Club, Volunteer Tutoring',
    demographics: 'First-generation college student',
    financialNeed: 'High',
    leadership: 'Club President, Team Leader',
    communityService: '150+ hours'
  });

  const { matchScholarships, loading, error } = useAI();

  // Load AI-generated scholarship matches
  const loadScholarshipMatches = async () => {
    try {
      const matches = await matchScholarships(studentProfile);
      setScholarships(matches);
    } catch (err) {
      console.error('Failed to load scholarship matches:', err);
    }
  };

  useEffect(() => {
    loadScholarshipMatches();
  }, []);

  const filters = [
    'Merit-Based', 'Need-Based', 'STEM', 'Service-Based', 'Renewable', 'Non-Renewable'
  ];

  const filteredScholarships = scholarships.filter(scholarship => {
    const matchesSearch = scholarship.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         scholarship.provider?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = selectedFilters.length === 0 || 
                          selectedFilters.some(filter => 
                            scholarship.category === filter || 
                            (filter === 'Renewable' && scholarship.renewable) ||
                            (filter === 'Non-Renewable' && !scholarship.renewable)
                          );
    
    return matchesSearch && matchesFilters;
  });

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
              <h1 className="text-4xl font-bold text-gray-900 mb-2">AI Scholarship Matchmaker</h1>
              <p className="text-lg text-gray-600">Discover scholarships perfectly matched to your profile</p>
            </div>
            <button
              onClick={loadScholarshipMatches}
              disabled={loading}
              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2 disabled:opacity-50"
            >
              <SafeIcon icon={FiRefreshCw} className={loading ? 'animate-spin' : ''} />
              <span>{loading ? 'Matching...' : 'Refresh Matches'}</span>
            </button>
          </div>
        </motion.div>

        {/* Demo Mode Notice */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center space-x-2">
            <SafeIcon icon={FiInfo} className="text-blue-600" />
            <span className="text-blue-800">
              <strong>Demo Mode:</strong> Showing AI-simulated scholarship matches. 
              Connect OpenAI API for real-time matching.
            </span>
          </div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiFilter} className="text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => {
                      setSelectedFilters(prev =>
                        prev.includes(filter)
                          ? prev.filter(f => f !== filter)
                          : [...prev, filter]
                      );
                    }}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedFilters.includes(filter)
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Match Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold">{filteredScholarships.length}</div>
              <div className="text-primary-100">Perfect Matches</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">
                ${filteredScholarships.reduce((sum, s) => sum + (parseInt(s.amount?.replace(/[^0-9]/g, '')) || 0), 0).toLocaleString()}
              </div>
              <div className="text-primary-100">Total Potential</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">8</div>
              <div className="text-primary-100">Applications Started</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-primary-100">Match Accuracy</div>
            </div>
          </div>
        </motion.div>

        {/* Scholarship Cards */}
        <div className="grid gap-6">
          {filteredScholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.name}</h3>
                      <p className="text-gray-600">{scholarship.provider}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        scholarship.matchScore >= 95 ? 'bg-green-100 text-green-800' :
                        scholarship.matchScore >= 90 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {scholarship.matchScore}% Match
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <SafeIcon
                            key={i}
                            icon={FiStar}
                            className={`w-4 h-4 ${
                              i < Math.floor(scholarship.matchScore / 20)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{scholarship.description}</p>
                  
                  {/* AI Reasoning */}
                  {scholarship.reasoning && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>AI Match Reasoning:</strong> {scholarship.reasoning}
                      </p>
                    </div>
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiDollarSign} className="text-green-500" />
                      <span className="font-semibold text-gray-900">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiCalendar} className="text-blue-500" />
                      <span className="text-gray-600">{scholarship.deadline}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <SafeIcon icon={FiTarget} className="text-purple-500" />
                      <span className="text-gray-600">{scholarship.category}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {scholarship.requirements?.map((req, reqIndex) => (
                        <span
                          key={reqIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-3 lg:ml-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2 hover:shadow-lg transition-all"
                  >
                    <span>Apply Now</span>
                    <SafeIcon icon={FiExternalLink} />
                  </motion.button>
                  <button className="border-2 border-primary-500 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
                    Save for Later
                  </button>
                  {scholarship.renewable && (
                    <div className="text-center">
                      <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Renewable
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="bg-white text-primary-600 border-2 border-primary-500 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Load More Scholarships
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ScholarshipMatcher;