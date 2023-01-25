import React from 'react'
import {Link} from 'react-router-dom'
function navbar() {
  return (
    <div className='h-14 w-full bg-cyan-600 flex items-center justify-between'>
  <div className="flex items-center mx-8">
    <h1 className="text-white text-xl font-medium">Assignment</h1>
  </div>
  <div className="flex">
    <Link to="/" className="mx-4 text-white text-sm font-medium">Home</Link>
    <Link to="/about" className="mx-4 text-white text-sm font-medium">About</Link>
    <Link to="/contact" className="mx-4 text-white text-sm font-medium">Contact</Link>
  </div>
</div>
    )
}

export default navbar