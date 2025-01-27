// const links = document.querySelector("body > default-header > header > nav > div.links");
// const button = document.querySelector("body > default-header > header > button");


document.body.addEventListener('click',(e)=>{
    const menu = document.querySelector('.hamburger-menu');
    if(e.target.classList.contains('hamburger-icon')) {
        menu.style.right = '0';
    }
    if(e.target.classList.contains('hamburger-cross')) {
        menu.style.right = '-100%';
    }
});

