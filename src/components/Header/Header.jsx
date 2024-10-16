import React from 'react'

function Header() {
  return (
    <header>
      <section id='headersection1' className=' bg-[#F6F7FA] w-[100%] h-[40px] '>
        <div className='flex justify-between w-[97%] m-[auto] items-center h-[40px] lg:w-[85%]'>
          <ul className='flex gap-[30px] text-[gray] items-between '>
            <li className='font-bold ml-[20px] sm:hidden'>TURBO.AZ</li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden sm:block'>Tap.az</li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden sm:block'>Bina.az</li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden sm:block'>Boss.az</li>
          </ul>
          <ul className='flex gap-[20px] text-[gray] justify-around '>
            <li className='text-black hover:text-[#CA1016] cursor-pointer hidden lg:block'>Dəstək: (111) 111-11-11</li>
            <li className='relative hover:text-[#CA1016] cursor-pointer hidden lg:block'>Reklam <span className='bg-[#7ED321] text-[0.7em] text-white rounded-full px-[5px] absolute top-[-8px] right-[-25px] mr-[20px]'>yeni</span></li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden lg:block '>Dəstək</li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden lg:block'>Yardım</li>
            <li className='hover:text-[#CA1016] cursor-pointer hidden lg:block'>RU</li>
            <li className='hover:text-[#CA1016] cursor-pointer px-[30px] hidden sm:block lg:px-[0px]'><i className="fa-solid fa-heart"></i>Seçilmişlər</li>
            <li className='hover:text-[#CA1016] cursor-pointer px-[30px] lg:px-[0px]'><i className="fa-solid fa-user"></i>Giriş</li>
          </ul>
        </div>
      </section>
      <section id='headersection2' className='bg-[#CA1016] w-[100%] h-[80px] '>
        <div className='flex justify-between m-[auto] items-center w-[97%] lg:w-[85%] '>
          <ul className='flex text-[.9em]   text-white h-[80px]   items-center lg:justify-around lg:w-[84%]'>
            <li className='font-bold text-2xl pr-[30px] hidden sm:block'>TURBO.AZ</li>
            <li><i className="fa-solid fa-bars pl-[30px] lg:hidden"></i></li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>Bütün Elanlar</li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>Dilerlər</li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>Avtokataloq</li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>Moto</li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>Ehtiyat hissələr və aksessuarlar</li>
            <li className='hover:text-[#F5BF98] cursor-pointer hidden lg:block'>İcarə</li>
          </ul>
          <button className='p-[10px] bg-[#7ED321]  text-white rounded-lg hover:bg-[#9bb67f]'>
          <i className="fa-solid fa-plus"></i> Yeni Elan
          </button>
        </div>
      </section>
      <section id='headersection3' className=''>

      </section>
      
    </header>
  )
}

export default Header
