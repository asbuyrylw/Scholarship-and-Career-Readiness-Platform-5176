import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiBuilding, FiStar, FiDollarSign } = FiIcons;

const Services = () => {
  const services = [
    {
      category: 'Student Services',
      icon: FiUsers,
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          name: 'AI Scholarship Matchmaker',
          description: '25+ criteria matching with verified GPA',
          features: ['Perfect Match Algorithm', 'Deadline Tracker', 'Auto-Application']
        },
        {
          name: 'FAFSA Navigator',
          description: 'Document OCR and error detection',
          features: ['IRS Verification', 'GPT-4 Guidance', 'Audit-Ready Submission']
        },
        {
          name: 'Resume Architect',
          description: 'Professional resume building with ATS optimization',
          features: ['Experience Framing', 'Skills Extraction', 'LinkedIn Sync']
        }
      ]
    },
    {
      category: 'Premium Add-ons',
      icon: FiStar,
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          name: 'Career DNA',
          price: '$7.99/month',
          description: 'Personality and skills assessment',
          features: ['Big 5 + NACE Competencies', '16 Career Clusters', 'Mentor Consultations']
        },
        {
          name: 'Job Launch Kit',
          price: '$14.99 one-time',
          description: 'Interview prep and career tools',
          features: ['AI Interview Simulations', 'LinkedIn Strategy', 'Salary Negotiation']
        }
      ]
    },
    {
      category: 'Institutional Solutions',
      icon: FiBuilding,
      color: 'from-green-500 to-emerald-500',
      services: [
        {
          name: 'Employer Connect',
          price: '$2,500/school',
          description: 'Virtual career fair platform',
          features: ['AI Matchmaking', 'Company Analytics', 'Internship Tracking']
        },
        {
          name: 'Readiness Certification',
          price: '$1,500/year',
          description: '4 Keys framework validation',
          features: ['Cognitive Assessment', 'Content Mastery', 'Digital Credentials']
        },
        {
          name: 'Military Bridge',
          price: '$995/year',
          description: 'Military career preparation',
          features: ['ASVAB Mastery', 'MOS Matcher', 'Veteran Benefits']
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Service Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From core student services to premium institutional solutions, 
            we provide everything needed for comprehensive college and career readiness.
          </p>
        </motion.div>

        <div className="space-y-12">
          {services.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100"
            >
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <SafeIcon icon={category.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    whileHover={{ y: -5 }}
                    className="bg-gradient-to-br from-gray-50 to-primary-50 p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">{service.name}</h4>
                      {service.price && (
                        <span className="bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                          {service.price}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of students and counselors already using ScholarPath to unlock opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;