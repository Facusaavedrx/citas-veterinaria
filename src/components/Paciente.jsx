import { useState, useEffect } from 'react'

function Paciente ({ pacientes }) {
  const { mascota, propietario, email, fecha, sintomas } = pacientes
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700'>
        Mascota: <span className='font-normal normal-case'> {mascota} </span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Dueño / Dueña: <span className='font-normal normal-case'> {propietario} </span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Correo electronico: <span className='font-normal normal-case'> {email} </span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Fecha de alta: <span className='font-normal normal-case'> {fecha} </span>
      </p>

      <p className='font-bold mb-3 text-gray-700'>
        Sintomas: <span className='font-normal normal-case'> {sintomas} </span>
      </p>

      <div
        className='flex justify-between'
      >
        <button
          type='button'
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg'
        >
          Editar
        </button>

        <button
          type='button'
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}

export default Paciente
