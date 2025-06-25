import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiStar, FiUsers, FiBuilding } = FiIcons;

const PricingPage = () => {
  const studentPlans = [
    {
      name: 'Core Platform',
      price: 'Free',
      description: 'Essential scholarship and college prep tools',
      features: [
        'AI Scholarship Matchmaker',
        'FAFSA Navigator',
        'Resume Architect',
        'Transcript Intelligence (NSC)',
        'Basic Career Assessment',
        'Email Support'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Career DNA',
      price: '$7.99',
      period: '/month',
      description: 'Advanced personality and career matching',
      features: [
        'Everything in Core Platform',
        'Big 5 + NACE Competencies Assessment',
        'Occupation Matching (16 Career Clusters)',
        'Industry Mentor Video Consultations',
        'Personalized Career Roadmaps',
        'Priority Support'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Job Launch Kit',
      price: '$14.99',
      period: 'one-time',
      description: 'Complete interview and job search preparation',
      features: [
        'AI Interview Simulations',
        'Emotion Analysis Feedback',
        'LinkedIn Headline Generator',
        'Connection Strategy Guide',
        'Salary Negotiation Playbooks',
        'Professional Portfolio Builder'
      ],
      cta: 'Purchase Now',
      popular: false
    }
  ];

  const institutionalPlans = [
    {
      name: 'Employer Connect',
      price: '$2,500',
      period: '/school/year',
      description: 'Virtual career fair and employer engagement platform',
      features: [
        'Virtual Career Fair Platform',
        'AI-Powered Student-Employer Matching',
        'Company Dashboard & Analytics',
        'Talent Pipeline Reporting',
        'Internship Progress Tracking',
        'Competency Badge System',
        'White-label Customization'
      ],
      cta: 'Request Demo'
    },
    {
      name: 'Readiness Certification',
      price: '$1,500',
      period: '/school/year',
      description: '4 Keys framework validation and digital credentials',
      features: [
        'Cognitive Skills Assessment',
        'Content Knowledge Validation',
        'Transition Navigation Tracking',
        'Social-Emotional Context Evaluation',
        'Blockchain-Verified Credentials',
        'Employer Recognition Program',
        'Progress Analytics Dashboard'
      ],
      cta: 'Request Demo'
    },
    {
      name: 'Military Bridge',
      price: '$995',
      period: '/school/year',
      description: 'Military career preparation and veteran support',
      features: [
        'ASVAB Mastery System',
        'Adaptive Testing Platform',
        'MOS (Military Occupational Specialty) Matcher',
        'Veteran Scholarship Database',
        'Benefits Optimization Tools',
        'Military Career Pathways',
        'Transition Support Resources'
      ],
      cta: 'Request Demo'
    }
  ];

  const roiMetrics = [
    {
      service: 'Core Platform',
      institutionalROI: '$1.05M potential scholarships',
      studentImpact: '3.5x more awards',
      icon: FiStar
    },
    {
      service: 'Career DNA',
      institutionalROI: '35% CTE enrollment increase',
      studentImpact: '90% career clarity',
      icon: FiUsers
    },
    {
      service: 'Employer Connect',
      institutionalROI: '22% internship placement lift',
      studentImpact: '$4.81/hr wage premium',
      icon: FiBuilding
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Path to Success
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From free core services to premium institutional solutions, 
            find the perfect plan for your college and career readiness journey.
          </p>
        </motion.div>

        {/* Student Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Services</h2>
            <p className="text-lg text-gray-600">Individual plans for students and families</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {studentPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 ${
                  plan.popular ? 'border-primary-500' : 'border-gray-100'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white hover:shadow-lg'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Institutional Plans */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Institutional Solutions</h2>
            <p className="text-lg text-gray-600">Comprehensive platforms for schools and organizations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {institutionalPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheck} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ROI Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Proven ROI Across All Services</h2>
            <p className="text-xl opacity-90">
              Our platform delivers measurable results for both institutions and students
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={metric.icon} className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-2">{metric.service}</h3>
                <div className="space-y-2">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm opacity-80">Institutional ROI</div>
                    <div className="font-semibold">{metric.institutionalROI}</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-sm opacity-80">Student Impact</div>
                    <div className="font-semibold">{metric.studentImpact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Future?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of students and hundreds of institutions already using ScholarPath 
            to unlock opportunities and achieve success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-primary-50 transition-all">
              Schedule Demo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage;