import React from 'react';
import { useParams } from 'react-router-dom';

const TrackOrder = () => {
    const { orderNumber } = useParams();

    return (
        <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
            <h2 className="text-2xl font-bold mb-6 text-center">Tracking Order #{orderNumber}</h2>

            {/* Google Map of Surat */}
            <div className="w-full h-96 mb-6">
                <iframe
                    title="Surat Delivery Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14737.476642770044!2d72.83105900918167!3d21.170240293378464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e5941d4f661%3A0xcea0291f6206e878!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1719490000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-lg shadow-lg"
                ></iframe>
            </div>

            {/* Delivery Status */}
            <div className="text-center text-xl font-semibold text-yellow-800 bg-yellow-100 py-4 rounded-md shadow">
                🚚 Your order is <span className="font-bold">Out for Delivery</span>
            </div>
        </div>
    );
};

export default TrackOrder;
