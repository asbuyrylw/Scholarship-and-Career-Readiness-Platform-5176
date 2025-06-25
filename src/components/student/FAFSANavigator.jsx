import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiFileText, FiUpload, FiCheckCircle, FiAlertCircle, FiHelpCircle, FiDollarSign, FiUser } = FiIcons;

const FAFSANavigator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedDocs, setUploadedDocs] = useState({
    w2: false,
    tax1040: false,
    bankStatements: false,
    socialSecurity: false
  });

  const steps = [
    { id: 1, title: 'Document Collection', description: 'Gather required financial documents' },
    { id: 2, title: 'Information Entry', description: 'Input your financial information' },
    { id: 3, title: 'IRS Verification', description: 'Verify with IRS Data Retrieval' },
    { id: 4, title: 'Review & Submit', description: 'Final review and submission' }
  ];

  const documents = [
    {
      name: 'W-2 Forms',
      key: 'w2',
      description: 'Your (and parents\') W-2 forms from employers',
      required: true,
      icon: FiFileText
    },
    {
      name: 'Tax Return (1040)',
      key: 'tax1040',
      description: 'Completed tax returns for the base year',
      required: true,
      icon: FiFileText
    },
    {
      name: 'Bank Statements',
      key: 'bankStatements',
      description: 'Current bank and investment account statements',
      required: true,
      icon: FiDollarSign
    },
    {
      name: 'Social Security Card',
      key: 'socialSecurity',
      description: 'Social Security card for verification',
      required: true,
      icon: FiUser
    }
  ];

  const fafsaTips = [
    {
      title: 'File Early',
      description: 'Submit your FAFSA as soon as possible after October 1st for maximum aid eligibility.',
      icon: FiCheckCircle
    },
    {
      title: 'Use IRS Data Retrieval',
      description: 'Link directly to IRS to reduce errors and speed up processing.',
      icon: FiCheckCircle
    },
    {
      title: 'Double-Check Information',
      description: 'Errors can delay processing by weeks. Our AI checks for common mistakes.',
      icon: FiAlertCircle
    }
  ];

  const handleDocumentUpload = (docKey) => {
    setUploadedDocs(prev => ({
      ...prev,
      [docKey]: true
    }));
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
          <h1 className="text-4xl font-bold text-gray-900 mb-2">FAFSA Navigator</h1>
          <p className="text-lg text-gray-600">AI-powered guidance for error-free FAFSA completion</p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8"
        >
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  currentStep >= step.id ? 'bg-primary-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.id ? (
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-4 ${
                    currentStep > step.id ? 'bg-primary-500' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-900">{steps[currentStep - 1].title}</h3>
            <p className="text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Document Upload Section */}
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                <div className="space-y-4">
                  {documents.map((doc, index) => (
                    <div key={doc.key} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <SafeIcon icon={doc.icon} className="text-primary-600 text-xl" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                            <p className="text-sm text-gray-600">{doc.description}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          {uploadedDocs[doc.key] ? (
                            <div className="flex items-center space-x-2 text-green-600">
                              <SafeIcon icon={FiCheckCircle} />
                              <span className="text-sm font-medium">Uploaded</span>
                            </div>
                          ) : (
                            <button
                              onClick={() => handleDocumentUpload(doc.key)}
                              className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center space-x-2"
                            >
                              <SafeIcon icon={FiUpload} />
                              <span>Upload</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiHelpCircle} className="text-blue-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-blue-900">OCR Document Scanning</h4>
                      <p className="text-sm text-blue-700">
                        Our AI will automatically extract information from your uploaded documents, 
                        reducing data entry errors and saving you time.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* AI Error Detection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <SafeIcon icon={FiCheckCircle} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">AI Error Detection</h3>
                  <p className="text-gray-600">GPT-4 powered validation and optimization</p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Automatic Checks</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Income consistency validation</li>
                    <li>• Tax information verification</li>
                    <li>• Asset reporting accuracy</li>
                    <li>• Dependency status confirmation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">EFC Optimization</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Strategic asset positioning</li>
                    <li>• Income timing recommendations</li>
                    <li>• Dependency optimization</li>
                    <li>• State aid maximization</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-between"
            >
              <button
                disabled={currentStep === 1}
                className="px-6 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                Previous Step
              </button>
              <button
                onClick={() => setCurrentStep(prev => Math.min(prev + 1, 4))}
                disabled={currentStep === 4}
                className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-50"
              >
                Next Step
              </button>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* FAFSA Tips */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Pro Tips</h3>
              <div className="space-y-4">
                {fafsaTips.map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={tip.icon} className="text-primary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">{tip.title}</h4>
                      <p className="text-xs text-gray-600">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Support Chat */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 border border-primary-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our AI chatbot can answer FAFSA questions 24/7 and connect you with financial aid experts.
              </p>
              <button className="w-full bg-primary-500 text-white py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors">
                Start Chat Support
              </button>
            </motion.div>

            {/* Progress Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">Your Progress</h3>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Documents Uploaded</span>
                  <span>{Object.values(uploadedDocs).filter(Boolean).length}/4</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(Object.values(uploadedDocs).filter(Boolean).length / 4) * 100}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500">
                  Complete all steps to submit your FAFSA
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAFSANavigator;