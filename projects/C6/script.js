async function fetchData() {
    try {
        const response = await fetch('datos.json');
        const data = await response.json();

        if (Array.isArray(data.dinosaurios)) {
            const dinosaurContainer = document.getElementById('dinosaur-container');
            const dinosaurName = document.getElementById('dinosaur-name');
            const dinosaurImage = document.getElementById('dinosaur-image');
            const dinosaurPeriod = document.getElementById('dinosaur-period');
            const dinosaurPlace = document.getElementById('dinosaur-place');
            const dinosaurInfo = document.getElementById('dinosaur-info');
            const dinosaurDiet = document.getElementById('dinosaur-diet');
            const dinosaurHeight = document.getElementById('dinosaur-height');
            const dinosaurWeight = document.getElementById('dinosaur-weight');
            const dinosaurClass = document.getElementById('dinosaur-class');
            const dinosaurOrder = document.getElementById('dinosaur-order');
            const dinosaurFamily = document.getElementById('dinosaur-family');
            const randomDinosaurBtn = document.getElementById('random-dinosaur-btn');

            function displayDinosaur(dinosaur) {
                dinosaurName.textContent = dinosaur.nombre;
                dinosaurImage.src = dinosaur.imagen;
                dinosaurPeriod.textContent = `⏳ Período: ${dinosaur.periodo}`;
                dinosaurPlace.textContent = `📍 Lugar: ${dinosaur.lugar}`;
                dinosaurInfo.textContent = dinosaur.info;
                dinosaurDiet.textContent = dinosaur.alimentacion;
                dinosaurHeight.textContent = dinosaur.altura;
                dinosaurWeight.textContent = dinosaur.peso;
                dinosaurClass.textContent = dinosaur.clase;
                dinosaurOrder.textContent = dinosaur.orden;
                dinosaurFamily.textContent = dinosaur.familia;
            }

            function getRandomDinosaur() {
                const randomIndex = Math.floor(Math.random() * data.dinosaurios.length);
                const randomDinosaur = data.dinosaurios[randomIndex];
                displayDinosaur(randomDinosaur);
            }

            randomDinosaurBtn.addEventListener('click', getRandomDinosaur);

            getRandomDinosaur();
            dinosaurContainer.style.display = 'block';
        } else {
            console.error('Los datos no están en el formato esperado.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

fetchData();
