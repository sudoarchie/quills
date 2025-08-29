'use client'
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Building, Globe, Shield, RefreshCw, XCircle } from 'lucide-react';

interface ExpandedSections {
  [key: string]: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const RefundCancellationPolicy: React.FC = () => {
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
      title: 'Refund and Cancellation Policy',
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            This refund and cancellation policy outlines how you can cancel or seek a refund for a product / service
            that you have purchased through the Platform. Under this policy:
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm">
                Cancellations will only be considered if the request is made 7 days of placing the order. However,
                cancellation requests may not be entertained if the orders have been communicated to such sellers /
                merchant(s) listed on the Platform and they have initiated the process of shipping them, or the
                product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <p className="text-orange-800 text-sm">
                QUILLSSTROKE PRIVATE LIMITED does not accept cancellation requests for perishable
                items like flowers, eatables, etc. However, the refund / replacement can be made if the user
                establishes that the quality of the product delivered is not good.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">
                In case of receipt of damaged or defective items, please report to our customer service team. The
                request would be entertained once the seller/ merchant listed on the Platform, has checked and
                determined the same at its own end. This should be reported within 7 days of receipt of products.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm">
                In case you feel that the product received is not as shown on the site or as per your expectations,
                you must bring it to the notice of our customer service within 7 days of receiving the product. The
                customer service team after looking into your complaint will take an appropriate decision.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-yellow-800 text-sm">
                In case of complaints regarding the products that come with a warranty from the manufacturers,
                please refer the issue to them.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-800 text-sm">
                In case of any refunds approved by QUILLSSTROKE PRIVATE LIMITED, it will take 7 days
                for the refund to be processed to you.
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund & Cancellation Policy</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn about our cancellation and refund procedures for products and services purchased through our platform.
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

export default RefundCancellationPolicy;
