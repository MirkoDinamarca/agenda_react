import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5">

      {pacientes && pacientes.length ?

        <>

          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Administras tus {' '}
            <span className="text-indigo-600 font-bold text-center">Pacientas y Citas</span>
          </p>

          <div className="md:h-screen overflow-y-scroll">

            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id} // Esto siempre es necesario, porque necesita un ID único
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente} />
            ))}


          </div>

        </> 
        
        :

        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes en la agenda</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes
          </p>
        </>

      }


    </div>
  )
}

export default ListadoPacientes;
