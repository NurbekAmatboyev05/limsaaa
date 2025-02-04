import React from 'react';
import rasm from '../assets/komp.png';

function Hero() {
    return (
        <div className='flex flex-col-reverse md:flex-row pt-30 bg-gradient-to-r from-[#242b56] to-[#0a0b12] px-4 md:px-20 py-10'>
            <div className='text-white md:w-1/2 flex flex-col justify-center'>
                <h1 className='text-[10px] md:text-5xl font-bold leading-tight'>
                    ИДЕАЛЬНЫЕ 'IT' РЕШЕНИЯ ДЛЯ <br />РАЗВИТИЯ ВАШЕГО БИЗНЕСА!
                </h1>
                <p className='mt-4 text-lg md:text-xl'>
                    Доверьте свой проект специалистам с более чем 10-<br />
                    летним опытом и добейтесь высокого успеха за короткий <br />
                    период времени.
                </p>
                <button className='mt-6 px-1 py-3 bg-[#6C2DBA] text-white rounded-lg hover:bg-[#242b56] hover:border hover:border-[#6C2DBA]'>
                    Контакт
                </button>
            </div>
            <div className='md:w-1/2 mt-10 md:mt-0'>
                <img src={rasm} alt="rasm" className='w-full h-auto' />
            </div>
        </div>
    );
}

export default Hero;
