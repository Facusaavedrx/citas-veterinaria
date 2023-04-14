import Paciente from './Paciente'

function ListadoPacientes () {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-3xl text-center'>Pacientes</h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Administrar <span className='text-indigo-600 font-bold'> pacientes</span> y <span className='text-indigo-600 font-bold'>citas </span>
      </p>

      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
      <Paciente />
    </div>
  )
}

export default ListadoPacientes
