import { useState } from "react"

export const Formulario = ({ tareas, setTareas }) => {
  const [proyecto, setProyecto] = useState('')
  const [tipoTarea, setTipoTarea] = useState('')
  const [personaAsignada, setPersonaAsignada] = useState('')
  const [storyPoints, setStoryPoints] = useState('')
  const [prioridad, setPrioridad] = useState('')
  const [fechaCreacion, setFechaCreacion] = useState('')
  const [resumen, setResumen] = useState('')
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()


    if ([proyecto, tipoTarea, personaAsignada, storyPoints, prioridad, fechaCreacion, resumen].includes('')) {
      setError(true)
      return
    }

    setError(false)

    const nuevaTarea = {
      id: Date.now(),
      proyecto,
      tipoTarea,
      personaAsignada,
      storyPoints,
      prioridad,
      fechaCreacion,
      resumen
    }

    setTareas([...tareas, nuevaTarea])

    setProyecto('')
    setTipoTarea('')
    setPersonaAsignada('')
    setStoryPoints('')
    setPrioridad('')
    setFechaCreacion('')
    setResumen('')
  }

  return (
    <div className="w-1/2">
      <h2 className="text-3xl text-center">Tarea de Requerimientos</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error ? (
          <p className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5">
            Todos los campos son obligatorios
          </p>
        ) : null}

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="proyecto">Proyecto</label>
          <input
            id="proyecto"
            type="text"
            placeholder="Nombre del proyecto"
            value={proyecto}
            onChange={(e) => setProyecto(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="tipoTarea">Tipo de Tarea</label>
          <input
            id="tipoTarea"
            type="text"
            placeholder="Tipo de tarea"
            value={tipoTarea}
            onChange={(e) => setTipoTarea(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="personaAsignada">Persona Asignada</label>
          <input
            id="personaAsignada"
            type="text"
            placeholder="Persona asignada"
            value={personaAsignada}
            onChange={(e) => setPersonaAsignada(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="storyPoints">Story Points</label>
          <input
            id="storyPoints"
            type="number"
            placeholder="Story points"
            value={storyPoints}
            onChange={(e) => setStoryPoints(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prioridad">Prioridad</label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="prioridad"
            value={prioridad}
            onChange={(e) => setPrioridad(e.target.value)}
          >
            <option value="">Selecciona una prioridad</option>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fechaCreacion">Fecha de Creación</label>
          <input
            id="fechaCreacion"
            type="date"
            value={fechaCreacion}
            onChange={(e) => setFechaCreacion(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resumen">Resumen</label>
          <textarea
            id="resumen"
            placeholder="Resumen de la tarea"
            value={resumen}
            onChange={(e) => setResumen(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>

        <button
          className="bg-indigo-600 hover:bg-indigo-700 w-full mt-5 p-2 text-white uppercase font-bold rounded"
          type="submit"
        >
          Agregar Requerimientos
        </button>
      </form>
    </div>
  )
}
