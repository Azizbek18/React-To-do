import React from 'react'
import { useState } from 'react'
function Home() {

  const [oyna, setoyna]= useState("");
  const [ruyxat, setruyxat] = useState([]);
  const [editIndex, seteditIndex]= useState(null)

  const Qushish = (e)=>{
    e.preventDefault()
    if(oyna.trim()==="")
    {
      return;
    }
    if (editIndex !== null) {
      const updated = [...ruyxat];
      updated[editIndex] = oyna;
      setruyxat(updated);
      seteditIndex(null);
    } else {
      setruyxat([...ruyxat, oyna]);
    }
    setoyna("");
  };

  const DeleteTodo = (index)=>{
    const yangiList= ruyxat.filter((_,i)=>i!==index);
    setruyxat(yangiList);
  }

  const editIndexTodo = (index)=>{
    setoyna(ruyxat[index]);
    seteditIndex(index);
  }
  return (
    <div className='flex justify-center items-center h-[100vh] w-full bg-center bg-cover p-[20px]' style={{backgroundImage:"url('./Tun.png')"}}>
      <div className='bg-[#c9c9c97e] w-[600px] h-[auto] flex justify-center items-center flex-col rounded-[10px] p-[20px]'  >
        <form className='flex gap-[10px] w-[100%] p-[20px] '  >
          <input value={oyna} maxLength={20} onChange={(e)=>setoyna(e.target.value)} className='w-[80%] h-[40px] pl-[20px] rounded-[10px] outline-none focus:outline-none bg-linear-to-r from-[#aaa9a9] to-[#b5b4b4] text-[#0000009a] ' type="text" placeholder="Ma'lumot kiriting"/>
          <button type='submit' onClick={Qushish}  className='w-[20%] xs:text-[10px] sm:text-[13px] md:text-[15px] h-[40px] bg-[#2d1d1d] bg-gradient-to-r from-[#9c4701] to-[#91650f] text-[#ffffff] rounded-[10px] hover:from-[white] hover:text-[#0e0d09b3] font-[700]'>{editIndex !==null?"Saqlash":"Qo'shish"}</button> 
        </form>
        {
          ruyxat.length > 0 && (
            <ul className='bg-[#d4d0d0a1] w-[100%] p-[10px] rounded-[10px] flex flex-col gap-[10px]'>
                {
                  ruyxat.map((ruyhat,index)=>(
                      <li className='bg-[#4f4e4e3f] w-[100%]  pl-[15px] pb-[5px] pt-[5px] pr-[10px] rounded-[10px] flex justify-between' key={index}>
                          {ruyhat}
                          <div className="flex gap-[10px]">
                            <button onClick={()=>editIndexTodo(index)} type='submit'  className='bg-[#1716129b] text-[#ffffff] text-[15px] px-[10px] py-[4px] rounded-[10px] hover:bg-[white] hover:text-[black] font-[Philosopher] '>Edit</button>
                            <button onClick={()=>DeleteTodo(index)} className='bg-[#1716129b] text-[#ffffff] text-[15px] py-[4px] px-[10px] rounded-[10px] hover:bg-[white] hover:text-[black] font-[Philosopher]'>Delete</button>
                          </div>
                      </li>
                  ))
                }
            </ul>
          )
        }
      </div>
    </div>
  )
}

export default Home