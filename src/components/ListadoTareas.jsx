import { Tarea } from "./Tarea"

export const ListadoTareas = ({ tareas, setTareas }) => {
  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
    setTareas(tareasActualizadas)
  }

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-scroll">
      <h2 className="font-black text-3xl text-center">Listado del Proyecto</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold">Proyectos</span> aquí
      </p>

      {tareas.length === 0 ? (
        <p className="text-center">No hay Proyectos aún</p>
      ) : (
        tareas.map(tarea => (
          <Tarea 
            key={tarea.id}
            tarea={tarea}
            eliminarTarea={eliminarTarea}
          />
        ))
      )}
    </div>
  )
}
