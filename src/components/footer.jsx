import React from 'react'
import rasm from "../assets/Limsaf.png"

function footer() {
  return (
    <div className='flex justify-between bg-gray-900 pb-5'>
        <img className='w-[200px] h-[45px] pl-15' src={rasm} alt="Лимса" />
        
        <p className='text-white pr-15'> © Limsa, 2024. Все права защищены.</p>

    </div>
  )
}

export default footer