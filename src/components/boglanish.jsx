import React from "react";
import { useTranslation } from "react-i18next";

const boglanish = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-6 md:p-12 bg-gray-900">
      {/* Chap taraf (Matn) */}
      <div className="md:w-1/2 text-left space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
         {t('Закажите сайт для своего бизнеса сейчас и получите от нас небольшой подарок со скидкой 10%!')}
        </h1>
        <p className="text-blue-900 font-semibold">
          {t("Удовлетворение каждого клиента — наша высшая цель — LIMSA")}
        </p>
        <p className="text-lg text-white">
        {t("Страницы")}
        </p>
        <nav className="space-y-2">
          <a href="#" className="block text-blue-500 hover:underline">{t("Главная")}
          </a>
          <a href="#" className="block text-blue-500 hover:underline">{t("Наши услуги")}</a>
        </nav>
      </div>

      {/* O'ng taraf (Forma) */}
      <div className="md:w-1/2 bg-gray-900 shadow-lg rounded-lg p-6 md:p-8 mt-8 md:mt-0">
        <h2 className="text-2xl font-semibold text-white mb-4">{t("Оставьте свои данные")}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium"></label>
            <input type="text" className="w-full px-4 py-2 border rounded-lg text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder={t("Иваше имя")} />
          </div>
          <div>
            <label className="block text-gray-70  font-medium"></label>
            <div className="flex items-center border  rounded-lg ">
              <span className="text-gray-200 px-3 py-2 ">+998</span>
              <input type="tel" className="w-full px-4 py-2 border rounded-lg  text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"   placeholder="901234567" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 font-medium"></label>
            <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none text-gray-400 bg-gray-900 focus:ring-2 focus:ring-blue-400" rows="4" placeholder={t("Ваше сообщение")}></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition">{t("Отправить")}</button>
        </form>
      </div>
    </div>
  );
};
export default boglanish