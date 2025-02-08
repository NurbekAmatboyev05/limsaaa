import React from 'react';
import { useTranslation } from 'react-i18next';
import rasm1 from '../assets/abbuild.png';
import rasm2 from '../assets/avtozoom.png';
import rasm3 from '../assets/ittime.png';
import rasm4 from '../assets/homekit.png';
import rasm5 from '../assets/zamon.png';
import rasm6 from '../assets/loyal.png';
import rasm7 from '../assets/noits.png';
import rasm8 from '../assets/propartnyor.png';

const Loyihalarimiz = () => {
  const { t } = useTranslation();

  const projects = [
    { image: rasm1, description: t('Ataev Bahadir Build - качественные строительные и ремонтные услуги! Выбирайте нас, создайте дом своей мечты.') },
    { image: rasm2, description: t('AutoZoomRental - удобный и надежный прокат автомобилей! Сделайте свое путешествие приятнее с нашими автомобилями.') },
    { image: rasm3, description: t('IT Time Academy — место современных ИТ-знаний! Возьмите с собой профессии будущего.') },
    { image: rasm4, description: t('HomeKit – современные и удобные решения для умного дома! Обеспечьте безопасность и комфорт вашего дома вместе с нами.') },
    { image: rasm5, description: t('ZamonTour – наслаждайтесь счастливым туристическим опытом вместе с нами! Ваша поездка с нами гарантированно станет приятнее.') },
    { image: rasm6, description: t('UzLoyal – надежная и удобная система лояльности! Самый эффективный способ мотивации ваших клиентов.') },
    { image: rasm7, description: t('Наманганская ИТС — центр современных ИТ-знаний и навыков! Получайте новые возможности на каждом этапе.') },
    { image: rasm8, description: t('ПроПартнёр — адрес надёжного и эффективного сотрудничества! Мы будем работать вместе для успеха вашего бизнеса.') },
  ];

  return (
    <div className="p-10 bg-gray-900 text-white pt-30">
      <h2 className="text-center text-3xl font-bold mb-10">{t('Наши недавние проекты')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="relative group overflow-hidden">
            <img 
              src={project.image} 
              alt="project" 
              className="w-full h-auto transform transition-transform duration-500 group-hover:scale-110" 
            />
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-600 rounded-2xl"></div>
            <p className="text-center mt-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loyihalarimiz;
