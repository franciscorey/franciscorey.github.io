    // JS CAMBIAR CLASES DE TABLAS DESACTIVAS
    // Cambia la clase modificadora de la cabecera de tabla entre CS, 1a y 2a Instancia.
    // Usado en pestañas de tablas de instancias.

        // TAB DEFAULT OPEN
    // Get the element with id="defaultOpen" and click on it
    document.getElementById("js-def-open").click();
    

    // Función openTab con parametros evento y pestaña...
    function openTab(evt,tabName) {
        // Establece variables de indice, elementos tabcontent y elementos tablink.
        var i, tabcontent, tablink;
        // Variable tabcontent llama a elementos js-tab-content.
        tabcontent = document.getElementsByClassName("js-tab-content");
        // Ciclo que recorre los tabcontent y que los oculta.
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablink = document.getElementsByClassName("js-tab");
        for (i = 0; i < tablink.length; i++) {
            tablink[i].className = tablink[i].className.replace(" is-active", "");
        }
        // En el documento obtener id (tabName) y hacerlo aparecer cuando su evt sea de clase active
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " is-active";
    }