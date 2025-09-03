'use client'
import { useState } from 'react';
import { ChevronDown, ChevronRight, Calendar, Building, Globe, Shield, RefreshCw, RotateCcw } from 'lucide-react';

interface ExpandedSections {
  [key: string]: boolean;
}

interface Section {
  id: string;
  title: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const MergedPolicies: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({});

  const toggleSection = (sectionId: string): void => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections: Section[] = [
    {
      id: 'refund-cancellation',
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
              <h4 className="font-medium text-blue-900 mb-2">Cancellation Timeline</h4>
              <p className="text-blue-800 text-sm">
                Cancellations will only be considered if the request is made within 7 days of placing the order. However,
                cancellation requests may not be entertained if the orders have been communicated to such sellers /
                merchant(s) listed on the Platform and they have initiated the process of shipping them, or the
                product is out for delivery. In such an event, you may choose to reject the product at the doorstep.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">Perishable Items</h4>
              <p className="text-orange-800 text-sm">
                QUILLSSTROKE PRIVATE LIMITED does not accept cancellation requests for perishable
                items like flowers, eatables, etc. However, the refund / replacement can be made if the user
                establishes that the quality of the product delivered is not good.
              </p>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-medium text-red-900 mb-2">Damaged or Defective Items</h4>
              <p className="text-red-800 text-sm">
                In case of receipt of damaged or defective items, please report to our customer service team. The
                request would be entertained once the seller/ merchant listed on the Platform, has checked and
                determined the same at its own end. This should be reported within 7 days of receipt of products.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">Product Not as Expected</h4>
              <p className="text-purple-800 text-sm">
                In case you feel that the product received is not as shown on the site or as per your expectations,
                you must bring it to the notice of our customer service within 7 days of receiving the product. The
                customer service team after looking into your complaint will take an appropriate decision.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Warranty Items</h4>
              <p className="text-yellow-800 text-sm">
                In case of complaints regarding the products that come with a warranty from the manufacturers,
                please refer the issue to them.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Refund Processing</h4>
              <p className="text-green-800 text-sm">
                In case of any refunds approved by QUILLSSTROKE PRIVATE LIMITED, it will take 7 days
                for the refund to be processed to you.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'return-exchange',
      title: 'Return and Exchange Policy',
      icon: <RotateCcw className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Our return and exchange policy provides guidelines for returning or exchanging products purchased through our platform.
          </p>

          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">Return Timeline</h4>
              <p className="text-blue-800 text-sm">
                We offer refund / exchange within first 7 days from the date of your purchase. If 7 days have passed since your purchase, you will not be offered a return, exchange or refund of any kind.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-medium text-green-900 mb-2">Eligibility Criteria</h4>
              <p className="text-green-800 text-sm">
                In order to become eligible for a return or an exchange, (i) the purchased item should be unused and in the same condition as you received it, (ii) the item must have original packaging, (iii) if the item that you purchased on a sale, then the item may not be eligible for a return / exchange.
              </p>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <h4 className="font-medium text-purple-900 mb-2">Defective Items</h4>
              <p className="text-purple-800 text-sm">
                Further, only such items are replaced by us (based on an exchange request), if such items are found defective or damaged.
              </p>
            </div>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-medium text-orange-900 mb-2">Exempted Categories</h4>
              <p className="text-orange-800 text-sm">
                You agree that there may be a certain category of products / items that are exempted from returns or refunds. Such categories of the products would be identified to you at the time of purchase.
              </p>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-900 mb-2">Processing Returns</h4>
              <p className="text-yellow-800 text-sm">
                For exchange / return accepted request(s) (as applicable), once your returned product / item is received and inspected by us, we will send you an email to notify you about receipt of the returned / exchanged product. Further, if the same has been approved after the quality check at our end, your request (i.e. return / exchange) will be processed in accordance with our policies.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'key-highlights',
      title: 'Key Policy Highlights',
      icon: <Shield className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 leading-relaxed">
            Quick reference guide to our most important policy points:
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                7-Day Window
              </h4>
              <p className="text-blue-800 text-sm">
                All cancellations, returns, and refund requests must be made within 7 days of purchase or receipt.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-900 mb-2 flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Quality Assurance
              </h4>
              <p className="text-green-800 text-sm">
                All returned items undergo quality inspection before processing refunds or exchanges.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-lg p-4">
              <h4 className="font-semibold text-purple-900 mb-2 flex items-center">
                <RotateCcw className="w-4 h-4 mr-2" />
                Original Condition
              </h4>
              <p className="text-purple-800 text-sm">
                Items must be unused, undamaged, and in original packaging with all tags attached.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-900 mb-2 flex items-center">
                <RefreshCw className="w-4 h-4 mr-2" />
                Processing Time
              </h4>
              <p className="text-orange-800 text-sm">
                Approved refunds are processed within 7 business days of approval confirmation.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-6">
            <h4 className="font-semibold text-gray-900 mb-3">Important Notes:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Perishable items (flowers, eatables) are not eligible for cancellation unless quality issues are proven</li>
              <li>Sale items may have different return/exchange eligibility</li>
              <li>Warranty claims should be directed to the respective manufacturers</li>
              <li>Products shipped or out for delivery cannot be cancelled - rejection at doorstep is an option</li>
            </ul>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Refund, Cancellation & Return Policy
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive guide to our cancellation, refund, return and exchange procedures for products and services purchased through our platform.
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
          <p className="text-gray-600 mb-4 text-sm">
            If you have questions about our policies or need assistance with a return, cancellation, or refund, please don't hesitate to contact us.
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
              India Operations Only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MergedPolicies;
