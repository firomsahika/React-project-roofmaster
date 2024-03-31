import React, { useEffect } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import AOS from 'aos';

const VisitUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  });

  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div
        data-aos="zoom-out-up"
        className="flex flex-col gap-6 sm:flex-row sm:gap-10 md:gap-16"
      >
        <div className="flex flex-col lg:flex-row shadow-2xl border px-8 py-4 items-center justify-center gap-4">
          <div className="p-6  flex  items-center justify-center rounded-full border-2 border-dotted border-black">
            <FaLocationDot size={30} />
          </div>
          <div>
            <p className="text-2xl font-semibold py-2">Visit Us Anytime</p>
            <p>342/A, Milson Avenue,</p>
            <p>Brook Lane, San Francisco, USA</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  shadow-2xl border px-8 py-4 items-center justify-center gap-4">
          <div className="p-6 flex items-center justify-center rounded-full border-2 border-dotted border-black">
            <FaLocationDot size={30} />
          </div>
          <div>
            <p className="text-2xl font-semibold py-2">Send An Email</p>
            <p>contact@example.com</p>
            <p>support@example.com</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row shadow-2xl border px-14 py-4 items-center justify-center gap-4">
          <div className="p-6 flex items-center justify-center rounded-full border-2 border-dotted border-black">
            <FaLocationDot size={30} />
          </div>
          <div>
            <p className="text-2xl font-semibold py-2">Call Center</p>
            <p>+123 233 233</p>
            <p>+234 234 234</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitUs;