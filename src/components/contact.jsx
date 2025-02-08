import React from "react";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { FaTelegram, FaInstagram, FaFacebook } from "react-icons/fa";

const contact = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-6 md:p-12 bg-gray-900">
      
      <div className="w-full md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-white">Контакты</h2>
        
        <div className="flex items-center space-x-4">
          <FaMapMarkerAlt className="text-gray-500 text-xl" />
          <p className="text-gray-500">город Ташкент, Юнусабадский район</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <FaPhoneAlt className="text-gray-500 text-xl" />
          <p className="text-gray-500">+998 (33) 258 73 58</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <FaClock className="text-gray-500 text-xl" />
          <p className="text-gray-500">9:00 - 18:00 Понедельник-Суббота</p>
        </div>
        
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-500 text-2xl hover:text-blue-700">
            <FaTelegram />
          </a>
          <a href="#" className="text-gray-500 text-2xl hover:text-pink-700">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 text-2xl hover:text-blue-900">
            <FaFacebook />
          </a>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 mt-6 md:mt-0">
        <iframe
          className="w-full h-64 md:h-96 rounded-lg shadow-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.169575805603!2d69.2856905!3d41.3381006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b5f1f5cfd49%3A0x110bc2a5ed9856b7!2sLIMSA!5e0!3m2!1sru!2s!4v1707234567890"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};


export default contact