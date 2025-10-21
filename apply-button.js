// Manejar el evento de clic en los botones "Aplicar" usando delegación de eventos
export function initializeApplyButtons(jobCards) {

    const jobsListingSection = document.querySelector('.job-listing')

    jobsListingSection.addEventListener('click', function(event) {
        const element = event.target
        
        if (element.classList.contains('btn-cta')) {
            element.textContent = '¡Aplicado!'
            element.classList.add('is-applied')
            element.disabled = true
        }
    })
}

/*const buttons = document.querySelectorAll('.btn.btn-cta')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Botón clickeado')
    })
})*/
