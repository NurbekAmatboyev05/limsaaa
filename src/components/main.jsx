import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import rasm1 from '../assets/faq.png';
import rasm2 from '../assets/faq1.png';
import Marquee from "react-fast-marquee";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Main() {
  const { t } = useTranslation(); // i18next tarjima funksiyasini chaqirish

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: t('Почему цены низкие?'), answer: t('Мы оптимизировали процессы и используем современные технологии, что позволяет нам предлагать доступные цены.') },
    { question: t('Смогу ли я в будущем самостоятельно редактировать сайт?'), answer: t('Да, вам будет предоставлен доступ к системе управления контентом (админка), где вы сможете вносить изменения.') },
    { question: t('Будете ли вы продолжать поддерживать сайт после его завершения?'), answer: t('Да, конечно. У вас будет доступ к админке и инструкции по работе с ней. Интерфейс удобный и не требует специальных знаний.') }
  ];

  return (
    <div>
      <div className='flex p-10 bg-[#161616] flex-col-reverse md:flex-row gap-20'>
        <div className='flex gap-6 items-start' data-aos='fade-up'>
          <img src={rasm2} alt='rasm' className='w-1/2 mb-10' />
          <img src={rasm1} alt='' className='w-1/2 mt-10' />
        </div>
        <div className='w-full md:w-1/2' data-aos='fade-left'>
          <div className='space-y-4'>
            {faqData.map((item, index) => (
              <div key={index} className='border-b border-gray-600 rounded-2xl ' data-aos='fade-right'>
                <button
                  className='w-full rounded-2xl text-left p-10 bg-[#161616] text-white font-bold flex justify-between items-center'
                  onClick={() => toggleAccordion(index)}
                >
                  {item.question} <span>{openIndex === index ? '◢' : '◥'}</span>
                </button>
                {openIndex === index && (
                  <div className='p-7 bg-[#161616] text-white rounded-2xl'>{item.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Marquee className='z-[-1] bg-[#161616] text-white text-3xl font-bold p-10 pt-10' data-aos='fade-in'>
        {t('УСЛУГА ПО СОЗДАНИЮ ВЕБ-САЙТОВ /МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ/СИСТЕМЫ АВТОМАТИЗАЦИИ/ ЦИФРОВЫЕ РЕШЕНИЯ')}
      </Marquee>
    </div>
  );
}

export default Main;
