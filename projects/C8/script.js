async function obtenerLibros() {
    try {
        const response = await fetch('libros.json');
        if (!response.ok) {
            throw new Error('Error al obtener los datos del archivo JSON.');
        }
        const data = await response.json();
        // Procesar los datos obtenidos del archivo JSON
        const resultadosContainer = document.getElementById('resultados-section');

        data.libros.forEach((libro) => {
            const card = document.createElement('div');
            card.classList.add('mdl-cell', 'mdl-cell--4-col', 'mdl-card', 'mdl-shadow--2dp');

            const media = document.createElement('div');
            media.classList.add('mdl-card__media');
            const image = document.createElement('img');
            image.src = libro.imagen;
            image.alt = 'Portada del libro';
            media.appendChild(image);

            const title = document.createElement('div');
            title.classList.add('mdl-card__title');
            const titleText = document.createElement('h2');
            titleText.classList.add('mdl-card__title-text');
            titleText.textContent = libro.titulo;
            title.appendChild(titleText);

            const supportingText = document.createElement('div');
            supportingText.classList.add('mdl-card__supporting-text');
            supportingText.innerHTML = `Autor: ${libro.autor}<br>
                                   Año: ${libro.año}<br>
                                   Tipo de documento: ${libro.tipo_documento}<br>
                                   Disponibilidad: ${libro.disponibilidad}`;


            card.appendChild(media);
            card.appendChild(title);
            card.appendChild(supportingText);


            resultadosContainer.appendChild(card);
        });

    } catch (error) {
        console.error(error);
    }
}

obtenerLibros();

