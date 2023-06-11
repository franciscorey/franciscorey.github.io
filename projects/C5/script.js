document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    const steps = form.getElementsByClassName('step');
    const nextButtons = form.getElementsByClassName('next-button');
    const previousButtons = form.getElementsByClassName('previous-button');
    const submitButton = form.getElementsByClassName('submit-button')[0];

    let currentStep = 0;

    function showStep(stepIndex) {
        const currentStepElement = steps[currentStep];
        const nextStepElement = steps[stepIndex];

        currentStepElement.classList.remove('active');
        currentStepElement.classList.add('fade-out');

        setTimeout(function () {
            currentStepElement.style.display = 'none';
            nextStepElement.style.display = 'block';
            nextStepElement.classList.add('fade-in');
            nextStepElement.classList.add('active');
        }, 300);

        currentStep = stepIndex;
    }

    function handleNext() {
        if (currentStep < steps.length - 1) {
            showStep(currentStep + 1);
        } else {
            // Último paso, mostrar mensaje de "Registro Satisfactorio"
            const successStep = document.createElement('div');
            successStep.classList.add('step');
            successStep.classList.add('active');
            successStep.innerHTML = '<h3>Registro Satisfactorio</h3>';
            form.appendChild(successStep);

            // Ocultar botones de Siguiente y Anterior
            for (let i = 0; i < nextButtons.length; i++) {
                nextButtons[i].style.display = 'none';
            }
            for (let i = 0; i < previousButtons.length; i++) {
                previousButtons[i].style.display = 'none';
            }
            // Ocultar botón de Enviar
            submitButton.style.display = 'none';
        }
    }

    function handlePrevious() {
        if (currentStep > 0) {
            showStep(currentStep - 1);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        handleNext(); // Simular avance al siguiente paso al enviar el formulario
    });

    for (let i = 0; i < nextButtons.length; i++) {
        nextButtons[i].addEventListener('click', handleNext);
    }

    for (let i = 0; i < previousButtons.length; i++) {
        previousButtons[i].addEventListener('click', handlePrevious);
    }

    showStep(0);
});
