

// Essa função faz com que ele separe cada letra do texto
function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split(''); //Divide o texto do elemento em um array de caracteres
    elemento.innerHTML = ''; // Limpa o conteúdo do elemento HTML

    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra; // Adiciona cada letra ao elemento com atraso
        }, 75 * i); // O atraso aumenta progressivamente para criar um efeito de digitação
    });
}


const titulo = document.querySelector(".digitando");

ativaLetra(titulo)

function menuShow() {
    const menuMobile = document.querySelector('.mobile_menu');
    const icon = document.querySelector('.fa-solid','.fa-bars');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        icon.classList.remove('fa-solid','fa-xmark')
        icon.classList.add('fa-solid','fa-bars');
    } else {
        menuMobile.classList.add('open');
        icon.classList.add('fa-solid','fa-xmark');
    }
}


function sobreMim() {
    // Selecionar elementos DOM uma única vez
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul li');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul li');

    divExperiencia[0].classList.add('ativo');
    liExperiencia[0].classList.add('ativo');
    divEducation[0].classList.add('ativo');
    liEducation[0].classList.add('ativo');

    // Função genérica para alternar classes ativas em um conjunto de elementos
    function toggleActiveClass(elements, index) {
        elements.forEach((element) => {
            element.classList.remove('ativo');
        });
        elements[index].classList.add('ativo');
    }

    // Função para lidar com a experiência
    function slideShowExperience(index) {
        toggleActiveClass(divExperiencia, index);
        toggleActiveClass(liExperiencia, index);
    }

    // Função para lidar com a educação
    function slideShowEducation(index) {
        toggleActiveClass(divEducation, index);
        toggleActiveClass(liEducation, index);
    }

    // Adicionar ouvintes de evento aos itens da experiência
    liExperiencia.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowExperience(index);
        });
    });

    // Adicionar ouvintes de evento aos itens de educação
    liEducation.forEach((event, index) => {
        event.addEventListener('click', () => {
            slideShowEducation(index);
        });
    });
}

sobreMim();