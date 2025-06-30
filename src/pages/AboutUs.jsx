import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-white px-4 md:px-16 lg:px-24 py-12">
      <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-red-600 mb-6 text-center">About VASTRAA</h1>

        <p className="text-base text-gray-700 leading-relaxed mb-5">
          <strong>VASTRAA</strong> is not just an online clothing destination – it’s a celebration of culture, style, and individuality. Founded with a vision to bring high-quality, trendy, and affordable fashion to every wardrobe, VASTRAA blends tradition with modern flair. From timeless ethnic wear to bold western styles, our curated collections are designed to empower and inspire.
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-5">
          We are committed to delivering an exceptional shopping experience – from intuitive navigation and seamless checkout to fast shipping and easy returns. With fashion options for <span className="font-medium">Men, Women, and Kids</span>, VASTRAA is your all-in-one fashion partner.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">What Makes Us Unique?</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-5 space-y-2">
          <li>✔️ Wide variety of categories: Ethnic, Western, Sportswear, Loungewear, and more.</li>
          <li>✔️ Fresh designs, premium fabrics, and inclusive sizing.</li>
          <li>✔️ Affordable pricing without compromising on quality.</li>
          <li>✔️ Dedicated support team and customer-first return policy.</li>
        </ul>

        <p className="text-base text-gray-700 leading-relaxed mb-5">
          We also support local artisans and sustainable fashion practices, ensuring that your choices make a difference not just in your closet but in communities across India.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">Our Vision</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-5">
          To be India’s most loved and trusted online fashion brand by delivering joy through every outfit.
        </p>

        <h2 className="text-2xl font-semibold text-red-500 mt-6 mb-2">Join Us on the Journey</h2>
        <p className="text-base text-gray-700 leading-relaxed mb-5">
          Whether you’re dressing for a wedding, work, workout, or weekend – VASTRAA has you covered.
          We’re proud to have built a fashion destination where customers feel confident, expressive, and proud of what they wear.
        </p>

        <p className="text-base text-gray-700 leading-relaxed text-center font-medium mt-8">
          🌟 Thank you for choosing VASTRAA. Let’s walk the fashion journey together. 🌟
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
