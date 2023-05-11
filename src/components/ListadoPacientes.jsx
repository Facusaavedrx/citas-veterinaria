import { v4 as uuidv4 } from 'uuid'
import Paciente from './Paciente'

function ListadoPacientes ({ pacientes }) {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length
        ? (
          <>
            <h2 className='font-black text-3xl text-center'>Pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Administrar <span className='text-indigo-600 font-bold'> pacientes</span> y <span className='text-indigo-600 font-bold'>citas </span>
            </p>

            {pacientes.map(paciente => {
              return (
                <Paciente pacientes={paciente} key={uuidv4()} />
              )
            })}
          </>
          )
        : (
          <>
            <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
            <p className='text-xl mt-5 mb-10 text-center'>
              Aun no hay <span className='text-indigo-600 font-bold'> pacientes</span> para listar
            </p>
          </>
          )}
    </div>
  )
}

export default ListadoPacientes
