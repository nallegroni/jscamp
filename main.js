import "./itjobs-avatar-element.js";

// Importa las FUNCIONES específicas de cada módulo
import { loadAndCreateJobs } from './fetch-data.js';
import { initializeFilters } from './filters.js';
import { initializeApplyButtons } from './apply-button.js'; // Suponiendo que tienes un archivo similar

// Creamos una función 'async' para poder usar 'await'
async function initializeApp() {
  // 1. Carga los empleos y ESPERA a que termine. Guarda las tarjetas creadas.
  const { jobs, jobCards } = await loadAndCreateJobs();
  
  // 2. Ahora que las tarjetas existen, inicializa los filtros pasándoles las tarjetas.
  initializeFilters(jobs, jobCards);
  
  // 3. Haz lo mismo para cualquier otra funcionalidad, como los botones.
  initializeApplyButtons();
}

// Llama a la función principal para que todo comience
initializeApp();


