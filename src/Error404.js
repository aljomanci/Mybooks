import React from 'react'
import './Error404.css'
const Error404 = () => {
  return (
    <body className='cuerpo-error'>
    <div className='container-error'>
      <h1 className='titulo-error'> Ooops!</h1>
      <h2 className='contenido-error'>Error 404 </h2>
      <p className='parrafo-error'>We cant find the page you're looking for.</p>
    </div>
    </body>
  )
}

export default Error404

