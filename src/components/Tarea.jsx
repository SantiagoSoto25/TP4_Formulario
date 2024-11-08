export const Tarea = ({ tarea, eliminarTarea }) => {
  const { id, proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen } = tarea

  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">Proyecto: {''}
        <span className="font-normal normal-case">{proyecto}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Tipo de Tarea: {''}
        <span className="font-normal normal-case">{tipoTarea}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Persona Asignada: {''}
        <span className="font-normal normal-case">{personaAsignada}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Story Points: {''}
        <span className="font-normal normal-case">{storyPoints}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Prioridad: {''}
        <span className="font-normal normal-case">{prioridad}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Creación: {''}
        <span className="font-normal normal-case">{fechaCreacion}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">Resumen: {''}
        <span className="font-normal normal-case">{resumen}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => eliminarTarea(id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  )
}
