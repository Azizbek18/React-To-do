import React from 'react'
import { useState } from 'react'
function Home() {

const [oyna, setoyna]= useState("");
const [ruyxat, setruyxat] = useState([]);
const [editIndex, seteditIndex]= useState(null)
const [modal,setmodal]=useState(false);
const [deleteIndex,setdeleteIndex]= useState(null)

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
const yangiList= ruyxat.filter((_,i)=>i!==deleteIndex);
setruyxat(yangiList);
setmodal(false);
setdeleteIndex(index)
}

const editIndexTodo = (index)=>{
setoyna(ruyxat[index]);
seteditIndex(index);
}

const Modal = (index)=>{
setmodal(true);
setdeleteIndex(index)
}
return (
<div className='flex justify-center items-center h-[100vh] w-full bg-center bg-cover p-[10px]'
  style={{backgroundImage:"url('./Tun.png')"}}>
  <div
    className='bg-[#c9c9c97e]  w-[600px] h-[auto] px-[10px] py-[10px] flex justify-center items-center flex-col rounded-[10px] p-[0px]'>
    <form className='flex gap-[10px] w-[100%]  py-[15px] '>
      <input value={oyna} maxLength={20} onChange={(e)=>setoyna(e.target.value)} className='w-[75%] h-[40px] pl-[20px]
      rounded-[10px] outline-none focus:outline-none bg-linear-to-r font-[650] from-[#aaa9a9] to-[#b5b4b4]
      text-[#0000009a] ' type="text" placeholder="Ma'lumot kiriting"/>
      <button type='submit' onClick={Qushish}
        className='w-[25%] text-[12px] px-[10px] sm:text-[15px] md:text-[18px] h-[40px] bg-[#2d1d1d] bg-gradient-to-r from-[#9c4701] to-[#91650f] text-[#ffffff] rounded-[10px] hover:from-[white] hover:text-[#0e0d09b3] font-[700]'>{editIndex
        !==null?"Saqlash":"Qo'shish"}</button>
    </form>
    {
    ruyxat.length > 0 && (
    <ul className='bg-[#d4d0d0a1] w-[100%] p-[10px] rounded-[10px] flex flex-col gap-[10px]'>
      {
      ruyxat.map((ruyhat,index)=>(
      <li
        className='bg-[#4f4e4e3f] w-[100%]  pl-[15px] pb-[5px] pt-[5px] pr-[10px] rounded-[10px] flex justify-between font-[Philosopher] font-bold'
        key={index}>
        {ruyhat}
        <div className="flex gap-[10px]">
          <button onClick={()=>editIndexTodo(index)} type='submit' className='bg-[#1716129b] text-[#ffffff] text-[15px]
            px-[10px] py-[4px] rounded-[10px] hover:bg-[white] hover:text-[black] font-[Philosopher] '>Edit</button>
          <button onClick={()=>Modal(index)} className='bg-[#1716129b] text-[#ffffff] text-[15px] py-[4px]
            px-[10px] rounded-[10px] hover:bg-[white] hover:text-[black] font-[Philosopher]'>Delete</button>
        </div>
      </li>
      ))
      }
    </ul>
    )
    }
  </div>
  {modal && (
  <div className="fixed inset-0 flex justify-center items-center bg-[#94919117] bg-opacity-50 z-10">
    <div className="bg-white p-6 rounded-xl text-center shadow-xl w-[300px]">
      <p className="mb-4 text-lg font-semibold">Ishonchingiz komilmi?</p>
      <div className="flex justify-center gap-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={DeleteTodo}>
          Ha
        </button>
        <button className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400" onClick={()=>
          setmodal(false)}
          >
          Yo'q
        </button>
      </div>
    </div>
  </div>
  )}
</div>
)
}

export default Home