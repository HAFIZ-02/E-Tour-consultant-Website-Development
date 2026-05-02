'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { FiCheckCircle, FiMail, FiDownload } from 'react-icons/fi';

export default function CheckoutPage() {
  const searchParams = useSearchParams();

  const name = searchParams.get('name') || 'Valued Customer';
  const email = searchParams.get('email') || 'customer@example.com';
  const people = searchParams.get('people') || '1';
  const serviceId = searchParams.get('serviceId') || '';

  const receiptId = `RCP-${Date.now().toString().slice(-8)}`;

  const handleDownloadReceipt = () => {
    // Create a simple text receipt
    const receiptContent = `
TOUR CONSULTANT - BOOKING RECEIPT
=====================================

Receipt ID: ${receiptId}
Booking Date: ${new Date().toLocaleDateString('id-ID')}

CUSTOMER INFORMATION
Name: ${decodeURIComponent(name)}
Email: ${decodeURIComponent(email)}
Number of People: ${people}

SERVICE DETAILS
Service ID: ${serviceId}

Thank you for booking with Tour Consultant!
You will receive a confirmation email shortly.

For inquiries, please contact: info@tour-consultant.com
=====================================
    `;

    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(receiptContent));
    element.setAttribute('download', `receipt-${receiptId}.txt`);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Success Card */}
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white py-12 text-center">
            <FiCheckCircle size={64} className="mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-lg opacity-90">Your tour has been booked successfully</p>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Receipt ID */}
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
              <p className="text-sm text-gray-600 mb-2">Receipt ID</p>
              <p className="text-3xl font-bold text-green-700 font-mono">{receiptId}</p>
              <p className="text-sm text-gray-600 mt-2">Please keep this for your records</p>
            </div>

            {/* Booking Details */}
            <div className="space-y-4 mb-8">
              <h2 className="text-2xl font-bold mb-4">Booking Details</h2>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-600">Name</span>
                <span className="font-semibold">{decodeURIComponent(name)}</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-600">Email</span>
                <span className="font-semibold">{decodeURIComponent(email)}</span>
              </div>

              <div className="flex justify-between border-b pb-4">
                <span className="text-gray-600">Number of People</span>
                <span className="font-semibold">{people}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Booking Date</span>
                <span className="font-semibold">{new Date().toLocaleDateString('id-ID')}</span>
              </div>
            </div>

            {/* Confirmation Message */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start gap-3">
                <FiMail size={24} className="text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-1">Confirmation Email Sent</h3>
                  <p className="text-blue-800 text-sm">
                    A detailed confirmation with receipt has been sent to <strong>{decodeURIComponent(email)}</strong>. 
                    Please check your email for more information.
                  </p>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-bold text-lg mb-4">What's Next?</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1</span>
                  <span>Check your email for confirmation and receipt details</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2</span>
                  <span>Admin will contact you to confirm the booking and provide payment details</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3</span>
                  <span>Complete payment to finalize your booking</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4</span>
                  <span>Receive final confirmation 7 days before your tour date</span>
                </li>
              </ol>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={handleDownloadReceipt}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                Download Receipt
              </button>

              <Link
                href="/"
                className="block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-lg transition duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Footer Note */}
          <div className="bg-gray-50 border-t p-6 text-center text-sm text-gray-600">
            <p>If you have any questions, please contact us at <strong>info@tour-consultant.com</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
}
