import React from 'react';
import Image from 'next/image';

// Assets
import logo from "../../../public/Logo.png";
import google from "../../../public/google.svg";
import app from "../../../public/app.svg";

const Footer = () => {
  return (
    <footer className="bg-white shadow-md w-full">
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src={logo} 
                alt="HilalMart Logo" 
                className="w-auto h-10"
                priority
              />
            </div>
            <p className="font-bold text-lg">HilalMart © 2021</p>
            <p className="text-gray-600">Barcha huquqlar kafolatlangan</p>
            
            {/* App Buttons */}
            <div className="flex space-x-3 pt-2">
              <div className="transition-transform hover:-translate-y-0.5 active:scale-95">
                <Image
                  src={google}
                  alt="Google Play"
                  className="cursor-pointer h-10 w-auto"
                />
              </div>
              <div className="transition-transform hover:-translate-y-0.5 active:scale-95">
                <Image
                  src={app}
                  alt="App Store"
                  className="cursor-pointer h-10 w-auto"
                />
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-900">
              Foydali havolalar
            </h3>
            <ul className="space-y-2">
              {['Bosh sahifa', 'Yordam kerakmi?', 'Foydalanish shartlari', 'Maxfiylik siyosati'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 inline-block transition-all hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-900">Biz haqimizda</h3>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong className="text-gray-800">Manzil:</strong> #214, G-dong, Lotte castle, 347 Jongno,
                Jongno-gu, Seoul, 03113, Crescent Trade ltd
              </p>
              <p>
                <strong className="text-gray-800">Korxona nomi:</strong> Crescent trade llc
              </p>
              <p>
                <strong className="text-gray-800">Korxona rahbari:</strong> DADAJONOV RAKHIMJON
              </p>
              <p>
                <strong className="text-gray-800">Registratsiya raqami:</strong> 433-62-00377
              </p>
              <p>
                <strong className="text-gray-800">Telefon raqam:</strong> 1833-2178 | 02-3670-6808
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;