function Formulario () {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>
        Seguimiento de pacientes
      </h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Agrega pacientes y <span className='text-indigo-600 font-bold'>administralos</span>
      </p>

      <form className='bg-white shadow-md rounded-lg py-10 px-5'>
        <fieldset className='mb-5'>
          <label
            htmlFor='mascota'
            className='block text-gray-700 font-bold'
          >
            Nombre de la mascota:
          </label>
          <input
            type='text'
            id='mascota'
            name='mascota'
            placeholder='¿Como se llama la mascota?'
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </fieldset>

        <fieldset className='mb-5'>
          <label
            htmlFor='propietario'
            className='block text-gray-700 font-bold'
          >
            Nombre del dueño o dueña:
          </label>
          <input
            type='text'
            id='propietario'
            name='propietario'
            placeholder='¿Como se llama el dueño o la dueña?'
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </fieldset>

        <fieldset className='mb-5'>
          <label
            htmlFor='email'
            className='block text-gray-700 font-bold'
          >
            Correo electronico:
          </label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='¿Como es el email del dueño o dueña?'
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </fieldset>

        <fieldset className='mb-5'>
          <label
            htmlFor='alta'
            className='block text-gray-700 font-bold'
          >
            Fecha de alta:
          </label>
          <input
            type='date'
            id='alta'
            name='alta'
            className='border-2 w-full p-2 mt-2 rounded-md'
          />
        </fieldset>

        <fieldset className='mb-5'>
          <label
            htmlFor='sintomas'
            className='block text-gray-700 font-bold'
          >
            Sintomas:
          </label>
          <textarea
            name='sintomas'
            id='sintomas'
            className='border-2 w-full p-2 mt-2 rounded-md'
            placeholder='¿Cuales son sus sintomas?'
          />
        </fieldset>

        <input
          type='submit'
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value='Agregar paciente'
        />
      </form>

    </div>
  )
}

export default Formulario
