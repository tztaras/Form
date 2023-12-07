
console.log('DOGE');

let sw = document.querySelector('.switch').onclick = alphaform;
function alphaform(action) {
    console.log(action);
    let b = document.querySelector('body');
    b.classList.toggle('alphaform');

    let f = document.querySelector('form');
    f.classList.toggle('form-alphaform');

    let i = document.querySelectorAll('input');
    i.forEach((ii) => {
        ii.classList.toggle('input-alpha');
    });
    
    let rb = document.querySelectorAll('.rad');
    rb.forEach((rborange) => {
        rborange.classList.toggle('rad-alpha')
    });

}