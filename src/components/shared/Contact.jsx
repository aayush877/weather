import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <section className='py-20 px-20 bg-blue-400 text-white'>
        <h2 className='text-5xl font-bold mb-8 text-center'>Contact us for more details.</h2>
        <p className='text-lg mb-10 text-center w-2/3 mx-auto'>
            For more detailed information about our weather application, features, or any inquires you may have, please feel free to reach out to us. You can contact us via email.
        </p>
        <div className='flex justify-center'>
            <Button text="Contact Us" />
        </div>
        
    </section>
  )
}

export default Contact