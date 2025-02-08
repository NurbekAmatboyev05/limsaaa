import React, { useState, useEffect } from 'react';
import logo from '../assets/HeaderLogotype-DfCIcAIz.png';
import { Menu } from "lucide-react";
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Header() {
  const { t } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'uz');
  const [activeLink, setActiveLink] = useState('Главная');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = [
    { code: 'uz', label: "O'z" },
    { code: 'ru', label: 'Рус' },

  ];

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-[1] top-0 pl-20 pr-20 pt-5 pb-5 w-full flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-gray-950' : 'bg-[#2c2e3b]'} border-b-1 border-amber-300`}>
      <div className='flex items-center gap-4'>
        <img className='w-30 h-7.5' src={logo} alt='' />
      </div>
      
      <div className={`md:flex md:items-center md:gap-4 absolute md:static top-16 left-0 w-full md:w-auto text-gray-400 p-5 md:p-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        {['Главная', 'Наши услуги', 'Наша работа', 'Цены'].map((link) => (
          <a
            key={link}
            href='#'
            onClick={() => { setActiveLink(link); setIsMenuOpen(false); }}
            className={`block md:inline pb-1 ${activeLink === link ? 'border-b-2 border-blue-500 rounded-2xl' : ''}`}
          >
            {t(link)}
          </a>
        ))}
        <div className='relative mt-3 md:mt-0'>
          <select
            className='bg-[#313444] text-gray-50 border-0'
            value={currentLang}
            onChange={(e) => changeLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className='md:hidden text-white' onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <Menu size={24} />
      </button>
      <div className='hidden md:block'>
        <button className='bg-[#6C2DBA] text-white p-2 rounded-2xl hover:bg-[#1A1D2E] hover:border hover:border-[#6C2DBA]'>+998 (33) 258 73 58</button>
      </div>
    </div>
  );
}

export default Header;
