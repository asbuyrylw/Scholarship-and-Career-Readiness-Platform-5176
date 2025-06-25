import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTarget, FiFileText, FiUser, FiTrendingUp, FiShield, FiBriefcase } = FiIcons;

const Features = () => {
  const features = [
    {
      icon: FiTarget,
      title: 'AI Scholarship Matchmaker',
      description: '25+ criteria matching with NSC-verified GPA and intelligent deadline tracking',
      highlight: 'Perfect Match Algorithm'
    },
    {
      icon: FiFileText,
      title: 'FAFSA Navigator',
      description: 'Document OCR, IRS verification, and GPT-4 error detection for audit-ready submissions',
      highlight: 'Error Guarantee'
    },
    {
      icon: FiUser,
      title: 'Resume Architect',
      description: 'Transform experiences into professional achievements with ATS optimization',
      highlight: 'Industry-Tailored'
    },
    {
      icon: FiTrendingUp,
      title: 'Transcript Intelligence',
      description: 'NSC integration for auto-GPA verification and skills mapping',
      highlight: '15-Min Processing'
    },
    {
      icon: FiShield,
      title: 'Equity Command Center',
      description: 'Gap analysis, intervention tracking, and outcome projections for counselors',
      highlight: 'FERPA Compliant'
    },
    {
      icon: FiBriefcase,
      title: 'Career DNA Premium',
      description: 'Personality assessment, occupation matching, and industry mentor consultations',
      highlight: '16 Career Clusters'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Student Success Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From scholarship discovery to career readiness, our AI-powered tools 
            provide everything students and counselors need for success.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-primary-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mb-6">
                <SafeIcon icon={feature.icon} className="text-white text-2xl" />
              </div>
              
              <div className="mb-3">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <span className="inline-block bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full">
                  {feature.highlight}
                </span>
              </div>
              
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;