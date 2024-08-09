import React, { useState } from 'react';
import Layout from '@/components/Layout-teacher';

const FormularioMaterias = () => {
  const [materiaSeleccionada, setMateriaSeleccionada] = useState('');
  const [notas, setNotas] = useState({
    historia: [
      { nombre: 'Ana Gómez', nota: 8.5 },
      { nombre: 'Carlos Ruiz', nota: 7.0 },
      { nombre: 'Luisa Martínez', nota: 9.2 },
    ],
    matematica: [
      { nombre: 'Pedro Sánchez', nota: 6.5 },
      { nombre: 'María López', nota: 8.8 },
      { nombre: 'Jorge Ramírez', nota: 7.4 },
    ],
    programacion: [
      { nombre: 'Luis Pérez', nota: 9.0 },
      { nombre: 'Andrea Torres', nota: 8.7 },
      { nombre: 'Sofía Reyes', nota: 9.4 },
    ],
    biologia: [
      { nombre: 'Clara Fernández', nota: 7.9 },
      { nombre: 'Julio Ortega', nota: 8.3 },
      { nombre: 'Lucía Mendoza', nota: 6.7 },
    ],
    fisica: [
      { nombre: 'Rafael Díaz', nota: 7.5 },
      { nombre: 'Elena Castillo', nota: 8.9 },
      { nombre: 'Miguel Silva', nota: 6.3 },
    ],
    quimica: [
      { nombre: 'Nadia Rivera', nota: 7.8 },
      { nombre: 'Oscar Jiménez', nota: 8.2 },
      { nombre: 'Paula Torres', nota: 9.1 },
    ],
  });

  const handleMateriaChange = (event) => {
    setMateriaSeleccionada(event.target.value);
  };

  const handleNotaChange = (event, index) => {
    const nuevaNota = parseFloat(event.target.value);
    setNotas((prevNotas) => {
      const notasActualizadas = { ...prevNotas };
      notasActualizadas[materiaSeleccionada][index].nota = isNaN(nuevaNota) ? '' : nuevaNota;
      return notasActualizadas;
    });
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mb-6">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="materias">
              Materias
            </label>
            <select
              id="materias"
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              value={materiaSeleccionada}
              onChange={handleMateriaChange}
            >
              <option value="">Selecciona una materia</option>
              <option value="historia">Historia</option>
              <option value="matematica">Matemática</option>
              <option value="programacion">Programación</option>
              <option value="biologia">Biología</option>
              <option value="fisica">Física</option>
              <option value="quimica">Química</option>
            </select>
          </div>
        </form>

        {materiaSeleccionada && (
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-gray-700 text-xl font-bold mb-4 capitalize">
              {materiaSeleccionada}
            </h2>
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-gray-600">Estudiante</th>
                  <th className="px-4 py-2 text-gray-600">Nota</th>
                </tr>
              </thead>
              <tbody>
                {notas[materiaSeleccionada].map((estudiante, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-4 py-2">{estudiante.nombre}</td>
                    <td className="px-4 py-2">
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="10"
                        value={estudiante.nota}
                        onChange={(e) => handleNotaChange(e, index)}
                        className="w-full bg-transparent border-b border-gray-300 text-gray-700 focus:outline-none focus:border-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default FormularioMaterias;
