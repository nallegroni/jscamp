// Filtrar empleos por ubicación
/*const filterUbicacion = document.querySelector('#filter-ubicación')

filterUbicacion.addEventListener('change', function () {
    const jobCards = document.querySelectorAll('.job-card')
    const selectedLocation = filterUbicacion.value

    jobCards.forEach(card => {
        const modalidad = card.dataset.modalidad
        const isShown = selectedLocation === modalidad || selectedLocation === ''

        card.classList.toggle('ishidden', !isShown)
    })
})

const filterTecnologia = document.querySelector('#filter-tecnologia')

filterTecnologia.addEventListener('change', function () {
    const jobCards = document.querySelectorAll('.job-card')
    const selectedTecnologia = filterTecnologia.value

    jobCards.forEach(card => {
        const tecnologia = card.dataset.tecnologia
        const isShown = selectedTecnologia === tecnologia || selectedTecnologia === ''

        card.classList.toggle('ishidden', !isShown)
    })
})*/


// Función que crea y añade una <option> a un <select>
function createOption(value, text) {
  const option = document.createElement('option');
  option.value = value.toLowerCase();
  option.textContent = text;
  return option;
}

function capitalize(s) {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// Función que lee los datos de los empleos y rellena los <select>
function populateFilters(jobs) {
  // 1. Obtenemos los elementos <select>
  const techSelect = document.querySelector('#filter-tecnologia');
  const locationSelect = document.querySelector('#filter-ubicacion');

  // 2. Usamos Sets para almacenar solo valores ÚNICOS
  const tecnologias = new Set();
  const ubicacionesMap = new Map();

  // 3. Recorremos los datos de los empleos
  jobs.forEach(job => {
    // Añadimos la modalidad (los Sets evitan duplicados)
    const ubicacionValue = job.data.modalidad;
    const ubicacionText = job.ubicacion;
    
    ubicacionesMap.set(ubicacionValue, ubicacionText);

    // Manejamos el caso de 'tecnologia', que puede ser un string o un array
    if (Array.isArray(job.data.tecnologia)) {
      job.data.tecnologia.forEach(tec => tecnologias.add(tec));
    } else {
      tecnologias.add(job.data.tecnologia);
    }
  });

  // 4. Creamos y añadimos las <option> a cada <select>
  tecnologias.forEach(tec => techSelect.appendChild(createOption(tec, capitalize(tec))));
  ubicacionesMap.forEach((text, value) => locationSelect.appendChild(createOption(value, text)));
}



// Esta función se activará DESPUÉS de que las tarjetas existan
export function initializeFilters(jobs, jobCards) {
    populateFilters(jobs);

    const allFilters = document.querySelectorAll('.job-filter');

    function applyFilters() {
    // Obtiene los valores de los filtros en el momento del cambio
        const selectedTecnologia = document.querySelector('#filter-tecnologia').value;
        const selectedUbicacion = document.querySelector('#filter-ubicacion').value;
        const selectedNivel = document.querySelector('#filter-nivel-experiencia').value;

        jobCards.forEach(card => {
            const tecnologia = card.dataset.tecnologia;
            const modalidad = card.dataset.modalidad;
            const nivel = card.dataset.nivel;

            const tecnologiaMatch = (selectedTecnologia === '' || tecnologia.includes(selectedTecnologia));
            const ubicacionMatch = (selectedUbicacion === '' || selectedUbicacion === modalidad);
            const nivelMatch = (selectedNivel === '' || selectedNivel === nivel);

            const shouldBeShown = tecnologiaMatch && ubicacionMatch && nivelMatch;

            card.classList.toggle('ishidden', !shouldBeShown);
        });
    }

    allFilters.forEach(filter => {
        filter.addEventListener('change', applyFilters);
    });
}



// const allFilters = document.querySelectorAll('.job-filter')

// const filterUbicacion = document.querySelector('#filter-ubicación')
// const filterTecnologia = document.querySelector('#filter-tecnología')

// function applyFilters() {
//     const jobCards = document.querySelectorAll('.job-card')
//     const selectedTecnologia = filterTecnologia.value
//     const selectedLocation = filterUbicacion.value

//     jobCards.forEach(card => {
//         const tecnologia = card.dataset.tecnologia
//         const modalidad = card.dataset.modalidad
        
//         const tecnologiaMatch = (selectedTecnologia === tecnologia || selectedTecnologia === '')
//         const locationMatch = (selectedLocation === modalidad || selectedLocation === '')

//         const shouldBeShown = tecnologiaMatch && locationMatch

//         card.classList.toggle('ishidden', !shouldBeShown)
//     })
// }

// allFilters.forEach(filter => {
//     filter.addEventListener('change', applyFilters)
// })