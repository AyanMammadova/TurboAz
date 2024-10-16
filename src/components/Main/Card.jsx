import React from 'react'

function Card(props) {
    const {id,img,price,marka,model,year,date}=props.item
  return (
    <div className='card flex flex-col w-[96% ] rounded-xl shadow-lg shadow-gray-400 my-[10px] ssm:w-[200px]'>
        <div className='cardtop relative'>
            <img src={img} />
            <i className="fa-solid fa-heart absolute top-[10px] right-[10px] text-[1.5em] text-white cursor-pointer"></i>
        </div>
        <div className='cardbottom px-[5px]'>
            <p>{price}</p>
            <p>{marka} / {model}</p>
            <p>{year}</p>
            <p>{date}</p>
        </div>
    </div>
  )
}

export default Card
