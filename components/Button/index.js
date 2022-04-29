import React from "react"

export default function Button({ onClick, children }) {
  return ( 
    <button onClick={onClick} className="bg-gradient-to-r from-indigo-600 to-indigo-800 dark:from-indigo-400 dark:to-indigo-500  px-3 py-1 rounded translate-y-1 font-semibold ">
    {children}
    </button>
  )
}
