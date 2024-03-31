import React from 'react'
import "../styles/style.css"

const Contact = () => {
  return (
    <div className='min-h-screen flex'>
     <div className='flex items-center flex-col  md:flex-row justify-center m-auto py-20 gap-4 '>
        <div className='shadow-2xl px-6  md:px-14 flex items-center justify-center flex-col rounded-xl'>
        <p className='text-4xl font-semibold py-4'>Contact Us</p>
            <form action="" className='flex flex-col gap-10'>
                
                <div className='flex flex-col lg:flex-row gap-10 md:items-center justify-center'>
                <div className='flex flex-col gap-4'>
                    <label>Full Name</label>
                    <input type="text" 
                    className='myinput border-2 border-gray-100 h-10 rounded-md  focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-transparent focus:ring-offset-blue-200 w-72 px-2'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                   <label>Email Adress</label>
                    <input type="email" 
                    className='border-2 border-gray-100 h-10 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-transparent focus:ring-offset-blue-200 w-72  px-2 '
                    />
                </div>
                </div>

                <div className='flex flex-col lg:flex-row md:items-center justify-center'>
                <div className='flex flex-col gap-4 '>
                    <label>Phone number</label>
                    <input type="number" 
                    className='border-2 border-gray-100 h-10 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-transparent focus:ring-offset-blue-200 w-72 px-2'
                    />
                </div>
                <div className='flex flex-col gap-4'>
                   <label>Subject</label>
                    <input type="text" 
                    className='border-2 border-gray-100 h-10 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-transparent focus:ring-offset-blue-200 w-72 px-2'/>
                </div>
                </div>

                <div className='flex'>
                <div className='flex flex-col '>
                    <label className='py-4'>Your message</label>
                    <input type="text" 
                     className='border-2 py-4 border-gray-100 h-20 rounded-md focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-transparent focus:ring-offset-blue-200 md:w-[38rem] w-[24rem] px-2'
                    />
                </div>
                
                </div>
                
            </form>

            <div className='py-14 text-nowrap flex items-center justify-center '>
                <button className='bg-amber-500 text-2xl md:px-56 px-20 py-2 rounded-md font-semibold text-black '>
                    Send Message
                </button>
            </div>
        </div>
        <div>
        <iframe width="450" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=New%20Delhi+(New%20Delhi)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </div>
     </div>
    </div>
  )
}

export default Contact
