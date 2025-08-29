'use client'
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Building, Globe, Shield } from 'lucide-react';

interface ExpandedSections {
  [key: string]: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const TermsAndConditions: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (sectionId: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections: Section[] = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            This document is an electronic record in terms of Information Technology Act, 2000 and rules 
            thereunder as applicable and the amended provisions pertaining to electronic records in various 
            statutes as amended by the Information Technology Act, 2000. This electronic record is generated 
            by a computer system and does not require any physical or digital signatures.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This document is published in accordance with the provisions of Rule 3 (1) of the Information 
            Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, 
            privacy policy and Terms of Use for access or usage of domain name{' '}
            <a href="https://quillsstroke.com/" className="text-blue-600 hover:text-blue-800 underline">
              https://quillsstroke.com/
            </a>{' '}
            ('Website'), including the related mobile site and mobile application (hereinafter referred to as 'Platform').
          </p>
        </div>
      )
    },
    {
      id: 'company-info',
      title: 'Company Information',
      icon: <Building className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Platform Owner</h4>
            <p className="text-blue-800">
              <strong>QUILLSSTROKE PRIVATE LIMITED</strong>
            </p>
            <p className="text-blue-700 text-sm mt-1">
              A company incorporated under the Companies Act, 1956
            </p>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Registered Office</h4>
            <address className="text-gray-700 not-italic">
              H-53, CABIN-2, MY4, SECTOR-63,<br />
              GROUND FLOOR, SECTOR 63,<br />
              SQL COWORKING Noida<br />
              Noida, Gautam Buddha Nagar<br />
              India
            </address>
          </div>
          <p className="text-gray-700 text-sm">
            (Hereinafter referred to as 'Platform Owner', 'we', 'us', 'our')
          </p>
        </div>
      )
    },
    {
      id: 'agreement',
      title: 'Agreement and Acceptance',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 font-medium">
              ACCESSING, BROWSING OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT 
              TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE 
              TERMS OF USE CAREFULLY BEFORE PROCEEDING.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Your use of the Platform and services and tools are governed by the following terms 
            and conditions ("Terms of Use") as applicable to the Platform including the applicable 
            policies which are incorporated herein by way of reference. If You transact on the Platform, 
            You shall be subject to the policies that are applicable to the Platform for such transaction.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By mere use of the Platform, You shall be contracting with the Platform Owner and these 
            terms and conditions including the policies constitute Your binding obligations, with Platform Owner.
          </p>
        </div>
      )
    },
    {
      id: 'definitions',
      title: 'Definitions',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <div className="border-l-4 border-blue-500 pl-4">
            <p className="text-gray-700">
              <strong>"You", "Your" or "User"</strong> shall mean any natural or legal person 
              who has agreed to become a user/buyer on the Platform.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <p className="text-gray-700">
              <strong>"Services"</strong> collectively refers to our website, goods (as applicable) 
              or services (as applicable).
            </p>
          </div>
          <div className="border-l-4 border-purple-500 pl-4">
            <p className="text-gray-700">
              <strong>"Platform"</strong> refers to the website, mobile site, and mobile application 
              owned by Quillsstroke Private Limited.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'user-obligations',
      title: 'User Obligations',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                To access and use the Services, you agree to provide true, accurate and complete 
                information to us during and after registration, and you shall be responsible for 
                all acts done through the use of your registered account on the Platform.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                Your use of our Services and the Platform is solely and entirely at your own risk 
                and discretion for which we shall not be liable to you in any manner.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                You are required to independently assess and ensure that the Services meet your requirements.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                You agree to pay us the charges associated with availing the Services.
              </p>
            </li>
            <li className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <p className="text-gray-700">
                You agree not to use the Platform and/or Services for any purpose that is unlawful, 
                illegal or forbidden by these Terms, or Indian or local laws that might apply to you.
              </p>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800">
              <strong>Important:</strong> The contents of the Platform and the Services are proprietary 
              to us and are licensed to us. You will not have any authority to claim any intellectual 
              property rights, title, or interest in its contents.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The contents include and are not limited to the design, layout, look and graphics. 
            You acknowledge that unauthorized use of the Platform and/or the Services may lead 
            to action against you as per these Terms of Use and/or applicable laws.
          </p>
        </div>
      )
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers and Warranties',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800">
              <strong>No Warranty:</strong> Neither we nor any third parties provide any warranty 
              or guarantee as to the accuracy, timeliness, performance, completeness or suitability 
              of the information and materials offered on this website or through the Services, 
              for any specific purpose.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            You acknowledge that such information and materials may contain inaccuracies or errors 
            and we expressly exclude liability for any such inaccuracies or errors to the fullest 
            extent permitted by law.
          </p>
        </div>
      )
    },
    {
      id: 'third-party-links',
      title: 'Third Party Links',
      icon: <Globe className="w-5 h-5" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          You agree and acknowledge that the website and the Services may contain links to other 
          third party websites. On accessing these links, you will be governed by the terms of use, 
          privacy policy and such other policies of such third party websites. These links are 
          provided for your convenience to provide further information.
        </p>
      )
    },
    {
      id: 'indemnification',
      title: 'Indemnification',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          You shall indemnify and hold harmless Platform Owner, its affiliates, group companies 
          (as applicable) and their respective officers, directors, agents, and employees, from 
          any claim or demand, or actions including reasonable attorney's fees, made by any third 
          party or penalty imposed due to or arising out of Your breach of this Terms of Use, 
          Privacy Policy and other Policies, or Your violation of any law, rules or regulations 
          or the rights (including infringement of intellectual property rights) of a third party.
        </p>
      )
    },
    {
      id: 'force-majeure',
      title: 'Force Majeure',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <p className="text-gray-700 leading-relaxed">
          Notwithstanding anything contained in these Terms of Use, the parties shall not be liable 
          for any failure to perform an obligation under these Terms if performance is prevented 
          or delayed by a force majeure event.
        </p>
      )
    },
    {
      id: 'governing-law',
      title: 'Governing Law and Jurisdiction',
      icon: <Building className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800">
              <strong>Governing Law:</strong> These Terms and any dispute or claim relating to it, 
              or its enforceability, shall be governed by and construed in accordance with the laws of India.
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-green-800">
              <strong>Jurisdiction:</strong> All disputes arising out of or in connection with these 
              Terms shall be subject to the exclusive jurisdiction of the courts in Gautam Buddha Nagar 
              and Uttar Pradesh.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'modifications',
      title: 'Modifications',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
          <p className="text-orange-800">
            <strong>Updates:</strong> These Terms of Use can be modified at any time without assigning 
            any reason. It is your responsibility to periodically review these Terms of Use to stay 
            informed of updates.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our platform and services.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Last updated: 29/08/2025
              </div>
              <div className="flex items-center">
                <Building className="w-4 h-4 mr-1" />
                Quillsstroke Private Limited
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-blue-600">{section.icon}</div>
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                </div>
                <div className="text-gray-400">
                  {expandedSections[section.id] ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </div>
              </button>
              
              {expandedSections[section.id] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <p className="text-gray-700 mb-4">
            All concerns or communications relating to these Terms must be communicated to us 
            using the contact information provided on our website.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600">
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <a href="https://quillsstroke.com/" className="text-blue-600 hover:text-blue-800 underline">
                quillsstroke.com
              </a>
            </div>
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-2" />
              Noida, Gautam Buddha Nagar, India
            </div>
          </div>
        </div>

        {/* Agreement Notice */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Legal Agreement</h4>
              <p className="text-blue-800 text-sm leading-relaxed">
                By using our platform, you acknowledge that you have read, understood, and agree 
                to be bound by these Terms & Conditions. If you do not agree with any part of 
                these terms, please discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;