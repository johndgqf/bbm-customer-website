"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

const AccessibilityPage = () => {
    return ( <div className="bg-white">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-4 gap-y-16 px-4 py-24 sm:px-6 sm:py-12 lg:max-w-7xl lg:grid-cols-1 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Accessibility
        </h2>
        <div className="mt-4 text-gray-900 text-lg">
        <section className="container justify-content-center">
              <p><a href="/" className="font-bold underline">Bigbreakmarina.com</a> is committed to providing a website that is accessible to the widest possible audience, regardless of circumstance and ability. We aim to adhere as closely as possible to the <span className="font-bold"> Web Content Accessibility Guidelines (WCAG 2.0, Level AA)</span>, published by the <span className="font-bold"> World Wide Web Consortium (W3C)</span>. These guidelines explain how to make Web content more accessible for people with disabilities. Conformance with these guidelines will help make the web more user friendly to everyone. Whilst <a href="/" className="font-bold underline"> bigbreakmarina.com </a> strive to adhere to the guidelines and standards for accessibility, it is not always possible to do so in all areas of the website and we are currently working to achieve this. Be aware that due to the dynamic nature of the website, minor issues may occasionally occur as it is updated regularly. We are continually seeking out solutions that will bring all areas of the site up to the same level of overall web accessibility.</p>
              <p>If you have any comments and or suggestions relating to improving the accessibility of our site, please do not hesitate to contact our accessibility team by phone <a className="font-bold underline" href="tel:+19256790900">(925)679-0900</a> or email <a className="font-bold underline" href="mailto:info@bigbreakmarina.com">info@bigbreakmarina.com</a>. Your feedback will help us make improvements.</p>
            </section>
        </div>
      </div>
    </div>
  </div> );
}
 
export default AccessibilityPage;