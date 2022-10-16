const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

const {nombre, documento, email, fechaIngreso, descripcion, id} = paciente;

const handleEliminar = () => {
  const respuesta = confirm('¿Deseas eliminar este paciente?');
  if (respuesta) {
    eliminarPaciente(id);
  }
}

  return (
    <div className="mx-5 mb-3 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
          <span className="font-normal normal-case">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">N°DNI: {' '}
          <span className="font-normal normal-case">{documento}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">E-Mail: {' '}
          <span className="font-normal normal-case">{email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Ingreso: {' '}
          <span className="font-normal normal-case">{fechaIngreso}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Datos del Paciente: {' '}
          <span className="font-normal normal-case">{descripcion}</span>
        </p>

        <div className="flex justify-between mt-5">
          <button type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 cursor-pointer rounded-lg text-white font-bold" onClick={() => setPaciente(paciente)}>Editar</button>
          <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 cursor-pointer rounded-lg text-white font-bold" onClick={handleEliminar}>Eliminar</button>
        </div>

      </div>
  )
}

export default Paciente