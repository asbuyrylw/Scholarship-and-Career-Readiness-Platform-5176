import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiGraduationCap, FiMail, FiPhone, FiMapPin } = FiIcons;

const Footer = () => {
  const footerLinks = {
    'Platform': [
      { name: 'Student Portal', path: '/student' },
      { name: 'Counselor Hub', path: '/counselor' },
      { name: 'Scholarships', path: '/scholarships' },
      { name: 'Career DNA', path: '/career-dna' }
    ],
    'Services': [
      { name: 'FAFSA Navigator', path: '/fafsa' },
      { name: 'Resume Architect', path: '/resume' },
      { name: 'Transcript Intelligence', path: '/transcripts' },
      { name: 'Equity Center', path: '/equity' }
    ],
    'Company': [
      { name: 'About Us', path: '/about' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Contact', path: '/contact' },
      { name: 'Support', path: '/support' }
    ],
    'Legal': [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'FERPA Compliance', path: '/ferpa' },
      { name: 'Security', path: '/security' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <SafeIcon icon={FiGraduationCap} className="text-white text-xl" />
              </div>
              <span className="text-2xl font-bold">ScholarPath</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering students with AI-powered scholarship matching, career readiness tools, 
              and comprehensive college preparation solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span>support@scholarpath.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>1-800-SCHOLAR</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ScholarPath. All rights reserved. FERPA compliant and NSC verified.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Trusted by 500+ schools nationwide</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;