
console.log('DOGE');
let doge = 'weakdoge.png';
let dogeImage = document.getElementById('dogeImage');
// dogeImage.style.transition = '2s';


let storedAlphaModeActivated = localStorage.getItem('alpha');

let sw = document.getElementById('switchform');
sw.onclick = alphaform;
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
    // dogeImage.style.transform = '1s';

    let b = document.querySelector('body');
    b.classList.toggle('alphaform');

    let f = document.querySelectorAll('.formcolumn, .withdata');
    f.forEach((ff) => {
        ff.classList.toggle('form-alphaform');
    });
    

 

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
    });

    let feed = document.getElementById('feedback');
    
    feed.classList.toggle('alpha-feedback');

    let doc = document.getElementById('file');
    doc.classList.toggle('alpha-upload');

    let sub = document.getElementById('submit');
    sub.classList.toggle('alpha-submit');

    let hrbot = document.querySelector('.bothr');
    hrbot.classList.toggle('alpha-hr');

    let reset = document.querySelector('.resbutton');
    reset.classList.toggle('alpha-res');
       
    // let alphaModeActivated = document.body.classList.contains('alphaform, form-alphaform, input-alpha, rad-alpha, alpha-option, alpha-feedback, alpha-upload, alpha-submit, alpha-hr, alpha-res');
    let alphaModeActivated = document.body.classList.contains('alphaform');
    localStorage.setItem('alpha', alphaModeActivated);
    sw.checked = alphaModeActivated;

}

// let reset = document.querySelector('.resbutton');
// reset.onclick = alphaform();

if (storedAlphaModeActivated === 'true') {
    alphaform();
    sw.checked = true;
}


let submit = document.getElementById('submit');
submit.onclick = ()=> {
    console.log('wow, such form, much info');
    let form = document.querySelector('form');
    console.dir(form[9]);
}


