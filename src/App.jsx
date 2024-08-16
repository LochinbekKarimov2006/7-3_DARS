import React from 'react'

function App() {
  return (
    <div className='max-w-[900px] mx-auto bg-[#e9ecec] p-5 rounded-[10px]'>

    <div className='flex flex-col '>
      <div className='flex h-[40px] gap-1 div-1'>
      <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-warning  h-[40px] " />
     <input
  type="text"
        placeholder="Type here"
             className="input input-bordered input-warning  h-[40px] " />
     <textarea className="border-[1px] rounded-[7px] border-[] textarea-warning py-[7px] pl-[10px] h-[40px] " placeholder="Bio"></textarea>
       <button className='bg-[#1900ff] w-[90px] rounded-[7px] text-[#fff]  h-[40px]'>Add More</button>
       <button className='bg-[#f00] w-[90px] rounded-[7px] text-[#ffffff]  h-[40px]'>Remove</button>
      </div>
      <button className='bg-[#0d00ff] w-[90px] rounded-[7px] text-[#fff]  h-[40px] mt-1'>Submit</button>
    </div>
    </div>
  )
}

export default App