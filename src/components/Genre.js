import React from 'react'

function Genre() {
    const genres=['Romantic','Cool','Rap','Silent','Mood']
  return (
    <div className='text-white px-4 overflow-hidden'>
        <h3 className='text-3xl mb-4 font-Barlow'>Genres</h3>
        <div className='flex justify-between'>
        {
            genres && genres.map((i)=>{
               return <div className='text-white text-xl mb-8 w-36 text-center py-4 rounded-xl bg-[#2a2a2a] border-gray-600 border-2'>
                    {i}
                </div>
            })
        }
        </div>
    </div>
  )
}

export default Genre