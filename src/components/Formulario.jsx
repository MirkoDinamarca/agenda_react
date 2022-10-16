import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
  const [nombre, setNombre] = useState('');
  const [documento, setDocumento] = useState('');
  const [email, setEmail] = useState('');
  const [fechaIngreso, setFechaIngreso] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Almacenar los errores (campos vacios)
  const [error, setError] = useState(false);

  // Generar un ID único para cada paciente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return fecha + random;
  }

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setDocumento(paciente.documento);
      setEmail(paciente.email);
      setFechaIngreso(paciente.fechaIngreso);
      setDescripcion(paciente.descripcion);

    }
  }, [paciente])



  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de formulario
    if ([nombre, documento, email, fechaIngreso, descripcion].includes('')) {
      setError(true);
      return;
    }

    setError(false);

    // Objeto de paciente
    const objetoPaciente = {
      nombre, 
      documento, 
      email, 
      fechaIngreso, 
      descripcion,
    }

    if (paciente.id) {
      // Editando el registro
      objetoPaciente.id = paciente.id;

      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id == paciente.id ? objetoPaciente : pacienteState);

      setPacientes(pacientesActualizados);
      setPaciente({});

    } else {
      // Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }


    // Reiniciar el formulario
    setNombre('');
    setDocumento('');
    setEmail('');
    setFechaIngreso('');
    setDescripcion('');


  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

      <p className='text-lg mt-5 mb-5 text-center'>Añade Pacientes y {' '}
        <span className='text-indigo-600 font-bold'>Adminístralos</span>
      </p>

      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg p-10 px-5 mb-5'>

        {error && <Error>Todos los campos son obligatorios</Error>}

        <div className='mb-5'>
          <label htmlFor='paciente' className='block mb-F text-gray-700 font-bold'>Nombre</label>
          <input
            type="text"
            id='paciente'
            placeholder='Nombre del paciente'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5'>
          <label htmlFor='documento' className='block mb-2 text-gray-700 font-bold'>N°DNI</label>
          <input
            type="text"
            id='documento'
            placeholder='Ingrese el DNI'
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block mb-2 text-gray-700 font-bold'>E-Mail</label>
          <input
            type="email"
            id='email'
            placeholder='Ingrese el e-mail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5'>
          <label htmlFor='fechaIngreso' className='block mb-2 text-gray-700 font-bold'>Fecha de Ingreso</label>
          <input
            type="date"
            id='fechaIngreso'
            value={fechaIngreso}
            onChange={(e) => setFechaIngreso(e.target.value)}
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div>
        <div className='mb-5'>
          <label htmlFor='descripcion' className='block mb-2 text-gray-700 font-bold'>Descripción</label>
          <textarea
            id='descripcion'
            placeholder='Ingrese los datos del paciente'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className='border-2 w-full p-2 placeholder-gray-400 rounded-md' />
        </div>

        <input type="submit" className="bg-indigo-600 p-2 rounded-md w-full text-white font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } />
      </form>
    </div>
  )
}

export default Formulario