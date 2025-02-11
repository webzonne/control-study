import React from 'react'

export default function Login({handleSubmit, handleChange}) {
  return (
    <>
     <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
          <div className="mb-4">
          <div className="text-right">
          <select onChange={handleChange} className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="select">
            <option defaultValue='' selected>Tipo de Usuario</option>
            <option defaultValue="docente">DOCENTE</option>
            <option defaultValue="estudiante" >ESTUDIANTE</option>
          </select>
          </div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**********"
            />
          </div>
          <p className='text-blue-900 mb-6 mt-2 cursor-pointer transition duration-300 ease-in-out hover:underline'>No te has registrado?</p>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
      </div> 
    </>
  )
}
