import React from 'react'
import ReactLoading from 'react-loading';


const Loader = () => {
  return (
    <div className='flex items-center justify-center m-auto pt-10'>
       <ReactLoading type={'cylon'} color={'#1c0a33'} height={667} width={375} className=' m-auto' />
    </div>
  )
}

export default Loader
