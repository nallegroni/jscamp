
const containerJobsListing = document.querySelector('.job-listing');

const RESULTS_PER_PAGE = 3

// Usa 'export' para que esta función esté disponible para otros archivos
export async function loadAndCreateJobs() {
  const response = await fetch("./data.json");
  const jobs = await response.json();

  containerJobsListing.innerHTML = ''; // Limpia el contenedor

  jobs.forEach(job => {
    const article = document.createElement('article');
    article.className = 'job-card';
    
    // Añade los data-attributes necesarios para los filtros
    article.dataset.tecnologia = job.data.tecnologia;
    article.dataset.modalidad = job.data.modalidad;
    article.dataset.nivel = job.data.nivel;

    article.innerHTML = `
      <div class="job-details">
        <h3>${job.titulo}</h3>
        <p class="job-company-location">${job.empresa} | ${job.ubicacion}</p>
        <p class="job-description">${job.descripcion}</p>
      </div>
      <a href="#" class="btn btn-cta">Aplicar</a>`;
    
    containerJobsListing.appendChild(article);
  });
  
  const jobCards = document.querySelectorAll('.job-card');
  
  // Devuelve AMBOS: los datos crudos Y las tarjetas creadas
  return { jobs, jobCards };
}




// Cargar los empleos desde el archivo data.json
// const containerJobsListing = document.querySelector('.job-listing')

// fetch("./data.json")
//     .then(response => response.json())
//     .then(jobs => {
//         jobs.forEach(job => {
//             const article = document.createElement('article')
//             article.className = 'job-card'

//             article.dataset.modalidad = job.data.modalidad
//             article.dataset.nivel = job.data.nivel
//             article.dataset.tecnologia = job.data.tecnologia

//             article.innerHTML = 
//                 `<div class="job-details">
//                     <h3>${job.titulo}</h3>
//                     <p class="job-company-location">${job.empresa} | ${job.ubicacion}</p>
//                     <p class="job-description">${job.descripcion}</p>
//                 </div>
//                 <a href="#" class="btn btn-cta">Aplicar</a>`
            
//             containerJobsListing.appendChild(article)
//         })
//     })
