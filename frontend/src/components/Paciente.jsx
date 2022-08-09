import usePacientes from "../hooks/usePacientes";

const Paciente = ({paciente}) => {

  const { setEdicion, eliminarPaciente } = usePacientes()

  const { fecha, email, nombre, propietario, sintomas, _id } = paciente

  const formatearFecha = (fecha) => {
    const nuevaFecha = new Date(fecha)
      return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha)
  }

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"> 
        <p className="font-bold uppercase text-indigo-700 my-2">Nombre: {''}<span className="font-normal normal-case text-black">{nombre}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-2">Propietario: {''}<span className="font-normal normal-case text-black">{propietario}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-2">Email del contacto: {''}<span className="font-normal normal-case text-black">{email}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-2">fecha: {''}<span className="font-normal normal-case text-black">{formatearFecha(fecha)}</span>
        </p>
        <p className="font-bold uppercase text-indigo-700 my-2">sintomas: {''}<span className="font-normal normal-case text-black">{sintomas}</span>
        </p>

        <div className="flex justify-between my-5">
          <button
            type="button"
            className="uppercase font-bold text-white bg-indigo-700 rounded-lg py-2 px-10 hover:bg-indigo-800 cursor-pointer"
            onClick={() => setEdicion(paciente)} 
          >Editar</button>

          <button
            type="button"
            className="uppercase font-bold text-white bg-red-700 rounded-lg py-2 px-10 hover:bg-red-800 cursor-pointer"
            onClick={() => eliminarPaciente(_id)}
          >Eliminar</button>
        </div>

    </div>
  );
};

export default Paciente