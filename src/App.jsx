import {useState, useEffect} from 'react'; 
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')));
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  //     setPacientes(pacientesLS);
  //   }

  //   obtenerLS();
  // }, []); // Cuando se le pasa el arreglo vacío significa que se va a ejecutar una vez solamente.

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes)); // De un arreglo lo transforma a un string
  }, [pacientes]);

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  return (
    <div className="container mx-auto mt-20">
    <Header
      
    />
    <div className="mt-12 md:flex">
      <Formulario 
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente} 
        setPaciente={setPaciente} />
        
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente ={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
    </div>
    </div>
  )
}

export default App
