
console.log('DOGE');
let doge = 'weakdoge.png';
let dogeImage = document.getElementById('dogeImage');
// dogeImage.style.transition = '2s';
let sw = document.querySelector('.switch').onclick = alphaform;
function alphaform(action) {


    console.log(action);

    let a = 'ALPHA FORM';
    let s = 'Simplɘ form';
    
    let h1 = document.querySelector('h1');
        if (h1.textContent === a) {
            h1.textContent = s;

    } else {
            h1.textContent = a;
    }
  
    
    
    doge = (doge === 'weakdoge.png') ? 'strongdoge.png' : 'weakdoge.png';
    // dogeImage.style.transition = 'none';
    dogeImage.src = './img/' + doge;
    // dogeImage.offsetWidth;
    dogeImage.style.transform = '1s';

    let b = document.querySelector('body');
    b.classList.toggle('alphaform');

    let f = document.querySelector('form');
    f.classList.toggle('form-alphaform');

    let i = document.querySelectorAll('input');
    i.forEach( (ii) => {
        ii.classList.toggle('input-alpha');
    });
    
    let rb = document.querySelectorAll('.rad, .subscribe');
    rb.forEach( (rborange) => {
        rborange.classList.toggle('rad-alpha');
    });

    let opt = document.querySelectorAll('.sp-option');
    opt.forEach((optopt) => {
        optopt.classList.toggle('alpha-option');
    })
        // ПОЛЕ ФИДБЕКА ФОН И ШРИФТ
    // let su = getElementById('submit')

}


