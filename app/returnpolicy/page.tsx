'use client'
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Building, Globe, RotateCcw } from 'lucide-react';

interface ExpandedSections {
  [key: string]: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const ReturnPolicy: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (sectionId: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections: Section[] = [
    {
      id: 'policy',
      title: 'Return Policy',
      icon: <RotateCcw className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                We offer refund / exchange within first 7 days from the date of your purchase. If 7 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                In order to become eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale, then the item may not be eligible for a return / exchange.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm">
                Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the item of purchase.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further. If the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies.
              </p>
            </div>
          </div>
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Return Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about our return and exchange procedures for products purchased through our platform.
            </p>
            <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                Last updated:  29/08/2025
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;