'use client'
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Building, Globe, Shield, Eye, Lock, Database, UserCheck, Trash2, Settings, Phone, Mail } from 'lucide-react';

interface ExpandedSections {
  [key: string]: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const PrivacyPolicy: React.FC = () => {
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
            This Privacy Policy describes how <strong>QUILLSSTROKE PRIVATE LIMITED</strong> and its affiliates 
            (collectively "QUILLSSTROKE PRIVATE LIMITED, we, our, us") collect, use, share, protect or 
            otherwise process your information/personal data through our website{' '}
            <a href="https://quillsstroke.com/" className="text-blue-600 hover:text-blue-800 underline">
              https://quillsstroke.com/
            </a>{' '}
            (hereinafter referred to as Platform).
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Important Notes</h4>
            <ul className="space-y-2 text-blue-800">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>You may browse certain sections of the Platform without registering with us</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>We do not offer any product/service under this Platform outside India</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span>Your personal data will primarily be stored and processed in India</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800">
              <strong>By visiting this Platform, providing your information or availing any product/service 
              offered on the Platform, you expressly agree to be bound by the terms and conditions of this 
              Privacy Policy, the Terms of Use and the applicable service/product terms and conditions.</strong>
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'collection',
      title: 'Collection of Information',
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We collect your personal data when you use our Platform, services or otherwise interact with us 
            during the course of our relationship and related information provided from time to time.
          </p>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-900 mb-2">Personal Information We Collect</h4>
              <ul className="space-y-1 text-green-800 text-sm">
                <li>• Name and date of birth</li>
                <li>• Address and contact details</li>
                <li>• Telephone/mobile number</li>
                <li>• Email ID</li>
                <li>• Proof of identity or address documents</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h4 className="font-semibold text-purple-900 mb-2">Sensitive Personal Data (with your consent)</h4>
              <ul className="space-y-1 text-purple-800 text-sm">
                <li>• Bank account information</li>
                <li>• Credit/debit card or payment instrument details</li>
                <li>• Biometric information (facial features, physiological information)</li>
                <li>• Transaction-related information</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-orange-500 pl-4">
              <h4 className="font-semibold text-orange-900 mb-2">Behavioral Data</h4>
              <p className="text-orange-800 text-sm">
                We may track your behavior, preferences, and other information that you choose to provide 
                on our Platform. This information is compiled and analyzed on an aggregated basis.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-900 mb-2">⚠️ Security Warning</h4>
            <p className="text-red-800 text-sm">
              If you receive an email or call from someone claiming to be QUILLSSTROKE PRIVATE LIMITED 
              seeking personal data like debit/credit card PIN, net-banking or mobile banking password, 
              <strong> never provide such information</strong>. If you have already revealed such information, 
              report it immediately to appropriate law enforcement agencies.
            </p>
          </div>
          
          <p className="text-gray-600 text-sm italic">
            You always have the option to not provide information by choosing not to use a particular 
            service or feature on the Platform.
          </p>
        </div>
      )
    },
    {
      id: 'usage',
      title: 'Usage of Information',
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            We use personal data to provide the services you request. To the extent we use your personal data 
            to market to you, we will provide you the ability to opt-out of such uses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">Service Enhancement</h4>
              <ul className="space-y-2 text-blue-800 text-sm">
                <li>• Assist sellers and business partners in handling orders</li>
                <li>• Enhance customer experience</li>
                <li>• Resolve disputes and troubleshoot problems</li>
                <li>• Customize your experience</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-3">Communication & Marketing</h4>
              <ul className="space-y-2 text-green-800 text-sm">
                <li>• Inform about online and offline offers</li>
                <li>• Product and service updates</li>
                <li>• Conduct marketing research and surveys</li>
                <li>• Marketing and advertising activities</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-3">Security & Compliance</h4>
              <ul className="space-y-2 text-purple-800 text-sm">
                <li>• Detect and protect against error and fraud</li>
                <li>• Prevent criminal activity</li>
                <li>• Enforce terms and conditions</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-3">Analytics</h4>
              <ul className="space-y-2 text-orange-800 text-sm">
                <li>• Conduct analysis and surveys</li>
                <li>• Investigate fraudulent activities</li>
                <li>• Improve platform performance</li>
                <li>• Business intelligence</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Note:</strong> Your access to these products/services may be affected in the event 
              permission is not provided to us.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'sharing',
      title: 'Sharing of Information',
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h4 className="font-semibold text-blue-900 mb-2">Internal Sharing</h4>
              <p className="text-blue-800 text-sm">
                We may share your personal data internally within our group entities, other corporate entities, 
                and affiliates to provide you access to services and products. These entities may market to you 
                unless you explicitly opt-out.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-semibold text-green-900 mb-2">Third-Party Sharing</h4>
              <p className="text-green-800 text-sm mb-2">
                We may disclose personal data to third parties including:
              </p>
              <ul className="space-y-1 text-green-700 text-sm">
                <li>• Sellers and business partners</li>
                <li>• Logistics partners</li>
                <li>• Payment instrument issuers</li>
                <li>• Third-party reward programs</li>
                <li>• Other payment service providers</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-red-500 pl-4">
              <h4 className="font-semibold text-red-900 mb-2">Legal Disclosures</h4>
              <p className="text-red-800 text-sm">
                We may disclose personal and sensitive personal data to government agencies or authorized 
                law enforcement agencies if required by law or in good faith belief that such disclosure is 
                reasonably necessary to:
              </p>
              <ul className="space-y-1 text-red-700 text-sm mt-2">
                <li>• Respond to subpoenas, court orders, or legal process</li>
                <li>• Enforce our Terms of Use or Privacy Policy</li>
                <li>• Respond to claims of rights violations</li>
                <li>• Protect rights, property, or personal safety</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">Purposes of Disclosure</h4>
            <p className="text-orange-800 text-sm">
              These disclosures may be required to provide access to our services, comply with legal obligations, 
              enforce user agreements, facilitate marketing activities, and prevent or investigate fraudulent 
              or illegal activities.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'security',
      title: 'Security Precautions',
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Our Security Measures</h4>
            <p className="text-green-800 text-sm">
              To protect your personal data from unauthorized access or disclosure, loss or misuse, we adopt 
              reasonable security practices and procedures. Once your information is in our possession or whenever 
              you access your account information, we adhere to our security guidelines and offer the use of a secure server.
            </p>
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-900 mb-2">Transmission Limitations</h4>
            <p className="text-yellow-800 text-sm">
              However, the transmission of information is not completely secure for reasons beyond our control. 
              By using the Platform, users accept the security implications of data transmission over the internet 
              and the World Wide Web which cannot always be guaranteed as completely secure.
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Your Responsibility</h4>
            <p className="text-blue-800 text-sm">
              <strong>Users are responsible for ensuring the protection of login and password records for their account.</strong> 
              There would always remain certain inherent risks regarding use of the Platform.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'retention',
      title: 'Data Deletion and Retention',
      icon: <Trash2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Account Deletion</h4>
            <p className="text-blue-800 text-sm">
              You have an option to delete your account by visiting your profile and settings on our Platform. 
              This action would result in you losing all information related to your account. You may also write 
              to us at the contact information provided below to assist you with these requests.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">Deletion Restrictions</h4>
            <p className="text-orange-800 text-sm">
              We may refuse or delay deletion of the account in event of any pending grievances, claims, 
              pending shipments, or any other services. Once the account is deleted, you will lose access to the account.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Retention Period</h4>
            <p className="text-green-800 text-sm">
              We retain your personal data for a period no longer than required for the purpose for which it was collected 
              or as required under applicable law. However, we may retain data if we believe it may be necessary to prevent 
              fraud, future abuse, or for other legitimate purposes. We may continue to retain your data in anonymized 
              form for analytical and research purposes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'rights',
      title: 'Your Rights',
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-2">Access and Control</h4>
          <p className="text-purple-800">
            You may access, rectify, and update your personal data directly through the functionalities 
            provided on the Platform. You have control over your personal information and can manage 
            your preferences through your account settings.
          </p>
        </div>
      )
    },
    {
      id: 'consent',
      title: 'Consent',
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h4 className="font-semibold text-blue-900 mb-2">Your Consent</h4>
            <p className="text-blue-800 text-sm">
              By visiting our Platform or providing your information, you consent to the collection, use, storage, 
              disclosure and processing of your information in accordance with this Privacy Policy. If you disclose 
              personal data of other people, you represent that you have authority to do so.
            </p>
          </div>
          
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-900 mb-2">Communication Consent</h4>
            <p className="text-green-800 text-sm">
              You consent to us (including our affiliates, partners, and third parties) contacting you through 
              SMS, instant messaging apps, calls, and/or email for the purposes specified in this Privacy Policy.
            </p>
          </div>
          
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <h4 className="font-semibold text-orange-900 mb-2">Withdrawal of Consent</h4>
            <p className="text-orange-800 text-sm">
              You can withdraw your consent by writing to the Grievance Officer with "Withdrawal of consent for 
              processing personal data" in the subject line. Please note that withdrawal will not be retrospective 
              and we may restrict or deny services for which we consider such information necessary.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'changes',
      title: 'Changes to Privacy Policy',
      icon: <Calendar className="w-5 h-5" />,
      content: (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800">
            <strong>Please check our Privacy Policy periodically for changes.</strong> We may update this Privacy Policy 
            to reflect changes to our information practices. We may alert/notify you about significant changes to the 
            Privacy Policy, as may be required under applicable laws.
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how we collect, use, and protect your personal information when you use our platform and services.
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
          {sections.map((section: Section) => (
            <div key={section.id} className="bg-white rounded-lg shadow-sm border">
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                type="button"
                aria-expanded={expandedSections[section.id] || false}
                aria-controls={`section-${section.id}`}
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
                <div 
                  id={`section-${section.id}`}
                  className="px-6 pb-6 border-t border-gray-100"
                >
                  <div className="pt-4">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Grievance Officer Section */}
        <div className="mt-12 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2 text-blue-600" />
            Grievance Officer
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Name:</strong> [Insert Name of the Officer]</p>
                  <p><strong>Designation:</strong> [Insert Designation]</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-2">Office Hours</h4>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Monday - Friday (9:00 AM - 6:00 PM)</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Company Address:</strong> [Insert Name and Address of the Company]
            </p>
            <p className="text-blue-700 text-sm mt-2">
              For any privacy-related concerns or to exercise your rights, please contact our Grievance Officer 
              using the above information.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-8 bg-white rounded-lg shadow-sm border p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600">
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              <a href="https://quillsstroke.com/" className="text-blue-600 hover:text-blue-800 underline">
                quillsstroke.com
              </a>
            </div>
            <div className="flex items-center">
              <Building className="w-4 h-4 mr-2" />
              India Operations Only
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              For privacy inquiries
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-8 bg-green-50 border border-green-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Shield className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-green-900 mb-2">Your Privacy Matters</h4>
              <p className="text-green-800 text-sm leading-relaxed">
                We are committed to protecting your privacy and personal data. By using our platform, you acknowledge 
                that you have read, understood, and agree to the collection, use, and disclosure of your information 
                as described in this Privacy Policy. If you do not agree, please discontinue use of our services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;