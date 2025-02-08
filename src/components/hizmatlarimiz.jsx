import React from "react";
import { useTranslation } from "react-i18next";
const Hizmatlarimiz = () => {
  const { t } = useTranslation();
  const advantages = [
    {
      title: t("Адаптивный"),
      description: t("Сайты, которые мы создаем, будут гибкими. То  есть у них будет планшетная и мобильная версия. За это не будет отдельной оплаты"),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z"></path></svg>
      ),
      span:"01",
    },
    {
      title: t("Администратор"),
      description: t("Ваш сайт будет иметь удобную и простую админ-панель, которая позволит вам управлять сайтом изнутри."),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-width="2" d="M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L8,23 M10,19.5 C10,20.88 11.12,22 12.5,22 C13.881,22 15,20.88 15,19.5 C15,18.119 13.881,17 12.5,17 C11.12,17 10,18.119 10,19.5 L10,19.5 Z M23,15 L20,12 L14,18 M17.5,14.5 L20.5,17.5 L17.5,14.5 Z"></path></svg>
      ),
      span:"02"
    },
    {
      title: t("Защита"),
      description: t("Наши веб-сайты защищены современными антивирусами и брандмауэрами для защиты от спам-ботов и атак."),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.5 13H8v-3h2.5V7.5h3V10H16v3h-2.5v2.5h-3V13zM12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z"></path></svg>
      ),
      span:"03"
    },
    {
      title: t("Мониторинг 24/7"),
      description: t("Ваш веб-сайт автоматически контролируется онлайн 24 часа в сутки, чтобы поддерживать его работоспособность."),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" aria-hidden="true" height="50" width="50" xmlns="http://www.w3.org/2000/svg"><path d="M1023.84 572.544c.096-21.056-3.217-100.496-5.745-123.216-29.12-260.752-240.752-450-503.184-450-273.344 0-494.815 210.624-509.84 489.904-.32 6.096-2.56 49.344-2.72 75.088l-.08 14.32C.958 584.56.158 590.672.158 596.976v214.656c0 46.88 38.128 85.008 85.008 85.008h86.288c46.88 0 85.023-38.128 85.023-85.008v-214.64c0-46.88-38.16-85.008-85.024-85.008H85.15a85.65 85.65 0 0 0-17.184 1.744c.48-10.383.912-18.576 1.025-21.056C82.159 247.888 276.127 63.328 514.91 63.328c229.28 0 414.128 165.344 439.568 393.12 1.072 9.504 2.448 33.664 3.552 57.92-6.193-1.44-12.577-2.385-19.2-2.385H853.55c-46.88 0-85.008 38.128-85.008 85.008v213.664c0 32.368 18.4 60.256 45.09 74.592l-205.44 80.656v-5.216c0-17.664-14.337-32-32-32h-96c-17.665 0-32 14.336-32 32v32c0 17.664 14.335 32 32 32h96c.272 0 .512-.08.784-.08l57.36-.224L963.89 895.007c4.32-1.792 7.984-4.464 10.992-7.664 28.848-13.616 48.991-42.736 48.991-76.688V596.99c0-5.216-.64-10.288-1.552-15.233.88-2.944 1.504-6 1.52-9.216zm-938.689 3.44h86.29c11.6 0 21.023 9.408 21.023 21.008v214.656c0 11.6-9.44 21.008-21.025 21.008H85.152c-11.6 0-21.007-9.409-21.007-21.008V596.992c.015-11.6 9.423-21.008 21.007-21.008zm747.377 21.008c0-11.6 9.41-21.008 21.009-21.008h85.28c11.6 0 21.023 9.408 21.023 21.008v213.664c0 11.6-9.44 21.008-21.024 21.008h-85.28c-11.6 0-21.008-9.408-21.008-21.008V596.992z"></path></svg>
      ),
      span:"04"
    },
    {
      title: t("Домен и хостинг"),
      description: t("Домен и хостинг бегают, забудьте о головной боли. У нас есть домен UZ и хостинг бесплатно на 6 месяцев (затем $10/мес)"),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.083 5.023 13.02.302a2.717 2.717 0 0 0-2.488 0L1.917 4.789A2.06 2.06 0 0 0 .805 6.623l.006 10.76c0 .773.426 1.476 1.112 1.834l8.59 4.479c.38.198.813.304 1.245.304v-.002c.432 0 .862-.108 1.244-.306l9.083-4.735a2.053 2.053 0 0 0 1.11-1.835V6.857a2.06 2.06 0 0 0-1.112-1.834zm.222 12.103c.003.441-.24.847-.632 1.05l-9.085 4.736a1.81 1.81 0 0 1-1.664 0l-8.59-4.48a1.184 1.184 0 0 1-.637-1.048L1.691 6.625c0-.44.246-.844.636-1.048l8.615-4.491a1.828 1.828 0 0 1 1.666 0l9.063 4.725c.39.205.634.608.634 1.048v10.267zM4.666 9.2v1.088L9.86 9.44V7.954L4.666 9.2zm4.111-.54.604-.132v.552l-.604.106V8.66zm-3.455.76 2.55-.562v.494l-2.55.46V9.42zm4.541 6.74v-1.486l-5.195-.85v1.088l5.195 1.248zm-1.986-.904-2.553-.562v-.395l2.553.46v.497zm1.506.33-.602-.132v-.526l.602.106v.552zm11.583-8.827-2.33-1.214-1.853.694V4.58L13.69 2.966a4.133 4.133 0 0 0-3.827 0l-6.83 3.561a.298.298 0 0 0-.16.26l.007 10.401c0 .11.06.21.16.26l6.805 3.547c1.2.626 2.627.626 3.827 0l3.1-1.614v-1.66l1.852.694 2.348-1.225a.298.298 0 0 0 .16-.262l-.006-9.908a.288.288 0 0 0-.16-.26zM4.398 10.871V8.75l5.541-1.494a.23.23 0 0 1 .29.22V9.83c0 .204-.152.38-.356.402l-5.475.64v-.001zm5.477 3.01a.404.404 0 0 1 .359.4v2.355a.23.23 0 0 1-.29.22l-5.542-1.494v-2.12l5.473.64zm3.137 6.962s.428-.612.48-1.74V14.62s.042-1.68-1.334-2.601c1.376-.92 1.336-2.6 1.336-2.6V5.096c0-1.272-.488-1.975-.488-1.975l3.307 1.725v5.061c0 .076.06.14.136.146l2.14.154a.15.15 0 0 0 .16-.148V6.12l1.967 1.02v9.684L18.75 17.85v-4.247a.15.15 0 0 0-.16-.148l-2.14.156a.148.148 0 0 0-.137.148v5.366l-3.3 1.72v-.002z"></path>
</svg>

      ),
      span:"05"
    },
    {
      title: t("Уникальный"),
      description: t("Дизайн каждого создаваемого нами сайта будет уникальным и выделяться среди других сайтов. Один дизайн — один сайт!"),
      icon: (
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" aria-hidden="true" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M22.083 5.023 13.02.302a2.717 2.717 0 0 0-2.488 0L1.917 4.789A2.06 2.06 0 0 0 .805 6.623l.006 10.76c0 .773.426 1.476 1.112 1.834l8.59 4.479c.38.198.813.304 1.245.304v-.002c.432 0 .862-.108 1.244-.306l9.083-4.735a2.053 2.053 0 0 0 1.11-1.835V6.857a2.06 2.06 0 0 0-1.112-1.834zm.222 12.103c.003.441-.24.847-.632 1.05l-9.085 4.736a1.81 1.81 0 0 1-1.664 0l-8.59-4.48a1.184 1.184 0 0 1-.637-1.048L1.691 6.625c0-.44.246-.844.636-1.048l8.615-4.491a1.828 1.828 0 0 1 1.666 0l9.063 4.725c.39.205.634.608.634 1.048v10.267zM4.666 9.2v1.088L9.86 9.44V7.954L4.666 9.2zm4.111-.54.604-.132v.552l-.604.106V8.66zm-3.455.76 2.55-.562v.494l-2.55.46V9.42zm4.541 6.74v-1.486l-5.195-.85v1.088l5.195 1.248zm-1.986-.904-2.553-.562v-.395l2.553.46v.497zm1.506.33-.602-.132v-.526l.602.106v.552zm11.583-8.827-2.33-1.214-1.853.694V4.58L13.69 2.966a4.133 4.133 0 0 0-3.827 0l-6.83 3.561a.298.298 0 0 0-.16.26l.007 10.401c0 .11.06.21.16.26l6.805 3.547c1.2.626 2.627.626 3.827 0l3.1-1.614v-1.66l1.852.694 2.348-1.225a.298.298 0 0 0 .16-.262l-.006-9.908a.288.288 0 0 0-.16-.26zM4.398 10.871V8.75l5.541-1.494a.23.23 0 0 1 .29.22V9.83c0 .204-.152.38-.356.402l-5.475.64v-.001zm5.477 3.01a.404.404 0 0 1 .359.4v2.355a.23.23 0 0 1-.29.22l-5.542-1.494v-2.12l5.473.64zm3.137 6.962s.428-.612.48-1.74V14.62s.042-1.68-1.334-2.601c1.376-.92 1.336-2.6 1.336-2.6V5.096c0-1.272-.488-1.975-.488-1.975l3.307 1.725v5.061c0 .076.06.14.136.146l2.14.154a.15.15 0 0 0 .16-.148V6.12l1.967 1.02v9.684L18.75 17.85v-4.247a.15.15 0 0 0-.16-.148l-2.14.156a.148.148 0 0 0-.137.148v5.366l-3.3 1.72v-.002z"></path></svg>
      ),
      span:"06"
    },
  ];

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-violet-800">{t('Наши преимущества')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <div key={index} className="  p-6  flex bg-gray-900 rounded-lg shadow-lg  flex-col items-center">
              <div className="flex p-3 gap-8">
              <div>
              <div className="mb-4  text-white">{advantage.icon}</div>
              <span className={`text-3xl font-bold text-white text-left ${index % 2 === 0? "text-right" : "text-left"}`}>{advantage.span}</span>
              </div>  
              <div>
              <h3 className="text-2xl text-white font-bold m-[-10px] pb-4">{advantage.title}</h3>
              <p className="text-gray-400 font-bold text-left">{advantage.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hizmatlarimiz;
