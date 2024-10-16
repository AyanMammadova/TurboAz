import React from 'react'
import Card from './Card'

function Main({data}) {
  
  return (
    <main className='bg-[#EBEDF3] w-full '>
        <div className=' m-[auto] flex w-[97%] lg:w-[85%]'>
          <div></div>
          <div id='cardContainer' className='justify-around my-[30px] gap-[20px] flex flex-row flex-wrap'>
            {
              data.map(item=>(
                  
                    <Card  item={item}/>
                  
                ))
            }
          </div>
        </div>
    </main>
  )
}

export default Main
