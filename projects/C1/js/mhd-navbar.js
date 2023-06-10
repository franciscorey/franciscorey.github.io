    // JS HIGHLIGHT NAVBAR

    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.c-navbar ul li');

    window.addEventListener('scroll', ()=> {
        let current = '';

        sections.forEach(section =>{
            const sectionTop = section.offsetTop-700;
            const sectionHeight = section.clientHeight-700;
            
            if(scrollY > sectionTop){
                current = section.getAttribute('id');
            }
        })

        navLi.forEach(li => {
            li.classList.remove('is-active');
            if(li.classList.contains(current)){
                li.classList.add('is-active');
            }
        })
    })