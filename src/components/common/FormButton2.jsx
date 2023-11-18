import React from 'react'

const FormButton = ({ onClick, text, loading }) => {
  return (
    <button 
      onClick={onClick} 
      className={`w-full h-fit text-sm py-3 px-3 text-purple-500 border-2 border-purple-500 rounded-lg hover:bg-purple-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:animate-pulse`}
      disabled={loading}
      >
        {loading ? 'Processing' :text}
    </button>
  )
}

export default FormButton