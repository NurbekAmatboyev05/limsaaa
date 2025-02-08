import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    uz: {
        translation: {
            "Главная": "Bosh sahifa",
            "Наши услуги": "Xizmatlarimiz",
            "Наша работа": "Bizning ishlar",
            "Цены": "Narxlar",
            "ИДЕАЛЬНЫЕ 'IT' РЕШЕНИЯ ДЛЯ РАЗВИТИЯ ВАШЕГО БИЗНЕСА!": "Biznesingiz rivoji uchun ideal IT yechimlar!",
            "Контакт": "Aloqa",
            "Почему цены низкие?": "Nima uchun narxlar past?",
            "Мы оптимизировали процессы и используем современные технологии, что позволяет нам предлагать доступные цены.":
                "Biz jarayonlarni optimallashtirdik va zamonaviy texnologiyalarni qo‘llaymiz, bu bizga qulay narxlarni taklif qilish imkonini beradi.",
            "Смогу ли я в будущем самостоятельно редактировать сайт?": "Kelajakda saytni o‘zim tahrirlashim mumkinmi?",
            "Да, вам будет предоставлен доступ к системе управления контентом (админка), где вы сможете вносить изменения.":
                "Ha, sizga kontent boshqaruv tizimi (admin panel) taqdim etiladi, u orqali o‘zgartirish kiritishingiz mumkin.",
            "Будете ли вы продолжать поддерживать сайт после его завершения?": "Sayt yakunlangandan keyin ham qo‘llab-quvvatlashni davom ettirasizmi?",
            "Да, конечно. У вас будет доступ к админке и инструкции по работе с ней. Интерфейс удобный и не требует специальных знаний.":
                "Ha, albatta. Sizga admin panel va undan foydalanish bo‘yicha qo‘llanma taqdim etiladi. Interfeys qulay va maxsus bilim talab qilmaydi.",
            "УСЛУГА ПО СОЗДАНИЮ ВЕБ-САЙТОВ /МОБИЛЬНЫЕ ПРИЛОЖЕНИЯ/СИСТЕМЫ АВТОМАТИЗАЦИИ/ ЦИФРОВЫЕ РЕШЕНИЯ":
                "Veb-sayt yaratish xizmati / Mobil ilovalar / Avtomatlashtirish tizimlari / Raqamli yechimlar",
            "Наши преимущества": "Bizning afzalliklarimiz",
            "Дизайн каждого создаваемого нами сайта будет уникальным и выделяться среди других сайтов. Один дизайн — один сайт!":
                "Biz yaratadigan har bir sayt dizayni noyob bo‘ladi va boshqa saytlardan ajralib turadi. Bitta dizayn — bitta sayt!",
            "Уникальный": "Noyob",
            "Домен и хостинг бегают, забудьте о головной боли. У нас есть домен UZ и хостинг бесплатно на 6 месяцев (затем $10/мес)":
                "Domen va hosting haqida qayg‘urishga hojat yo‘q. Bizda UZ domeni va 6 oy davomida bepul hosting bor (keyin $10/oy).",
            "Домен и хостинг": "Domen va hosting",
            "Наши веб-сайты защищены современными антивирусами и брандмауэрами для защиты от спам-ботов и атак.":
                "Bizning veb-saytlarimiz zamonaviy antivirus va firewall bilan himoyalangan, spam-botlar va hujumlardan himoya qiladi.",
            "Администратор": "Administrator",
            "Ваш сайт будет иметь удобную и простую админ-панель, которая позволит вам управлять сайтом изнутри.":
                "Saytingiz qulay va oddiy admin panelga ega bo‘ladi, bu orqali siz uni boshqarishingiz mumkin.",
            "Сайты, которые мы создаем, будут гибкими. То есть у них будет планшетная и мобильная версия. За это не будет отдельной оплаты":
                "Biz yaratadigan saytlar moslashuvchan bo‘ladi. Ya'ni, ularda planshet va mobil versiyalar mavjud bo‘ladi. Bu uchun qo‘shimcha to‘lov talab qilinmaydi.",
            "Адаптивный": "Moslashuvchan",
            " Ataev Bahadir Build - качественные строительные и ремонтные услуги! Выбирайте нас, создайте дом своей мечты.":
                "Ataev Bahadir Build - sifatli qurilish va ta'mirlash xizmatlari! Bizni tanlang, orzuingizdagi uyni yarating.",

            "AutoZoomRental - удобный и надежный прокат автомобилей! Сделайте свое путешествие приятнее с нашими автомобилями.":
                "AutoZoomRental - qulay va ishonchli avtomobil ijarasi! Sayohatingizni bizning mashinalarimiz bilan yanada yoqimli qiling.",

            "IT Time Academy — место современных ИТ-знаний! Возьмите с собой профессии будущего.":
                "IT Time Academy — zamonaviy IT bilimlari maskani! Kelajak kasblarini egallang.",

            "HomeKit – современные и удобные решения для умного дома! Обеспечьте безопасность и комфорт вашего дома вместе с нами.":
                "HomeKit – aqlli uy uchun zamonaviy va qulay yechimlar! Xavfsizlik va qulaylikni biz bilan ta’minlang.",

            "ZamonTour – наслаждайтесь счастливым туристическим опытом вместе с нами! Ваша поездка с нами гарантированно станет приятнее.":
                "ZamonTour – biz bilan unutilmas sayohat tajribasidan bahramand bo‘ling! Safaringiz yanada yoqimli bo‘ladi.",

            "UzLoyal – надежная и удобная система лояльности! Самый эффективный способ мотивации ваших клиентов.":
                "UzLoyal – ishonchli va qulay sodiqlik tizimi! Mijozlaringizni rag‘batlantirishning eng samarali usuli.",

            "Наманганская ИТС — центр современных ИТ-знаний и навыков! Получайте новые возможности на каждом этапе.":
                "Namangan ITS — zamonaviy IT bilimlari va ko‘nikmalari markazi! Har bosqichda yangi imkoniyatlarga ega bo‘ling.",

            "ПроПартнёр — адрес надёжного и эффективного сотрудничества! Мы будем работать вместе для успеха вашего бизнеса.":
                "ProPartnyor — ishonchli va samarali hamkorlik manzili! Biz biznesingiz muvaffaqiyati uchun birga ishlaymiz.",
            "Закажите сайт для своего бизнеса сейчас и получите от нас небольшой подарок со скидкой 10%!":
                "Biznesingiz uchun veb-sayt buyurtma qiling hozir va bizdan 10% chegirma bilan kichik sovg‘a oling!",

            "Удовлетворение каждого клиента — наша высшая цель — LIMSA":
                "Har bir mijozning qoniqishi — bizning eng yuksak maqsadimiz — LIMSA",

            "Страницы": "Sahifalar",
            "Главная": "Bosh sahifa",
            "Наши услуги": "Xizmatlarimiz",
            "Оставьте свои данные": "Ma'lumotlaringizni qoldiring",
            "Иваше имя": "Ismingiz",
            "Ваше сообщение": "Xabaringiz",
            "Отправить": "Yuborish"

        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'uz',
        fallbackLng: 'ru',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
