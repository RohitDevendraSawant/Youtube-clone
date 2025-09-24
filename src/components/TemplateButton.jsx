import React from 'react'

const TemplateButton = ({ btnText }) => {
  return (
    <div>
        <button className='bg-gray-200 px-4 py-2 text-center rounded-2xl'>
            {btnText}
        </button>
    </div>
  )
}

export default TemplateButton