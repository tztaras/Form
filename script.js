
console.log('DOGE');
let doge = 'weakdoge.png';
let dogeImage = document.getElementById('dogeImage');
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
  
    
    
    doge = (doge === 'weakdoge.png') ? 'strongdoge.jpg' : 'weakdoge.png';
    dogeImage.src = './img/' + doge;
    
    // changeDoge('./img/strongdoge.jpg');

    
    
 

   
    let b = document.querySelector('body');
    b.classList.toggle('alphaform');

    let f = document.querySelector('form');
    f.classList.toggle('form-alphaform');

    let i = document.querySelectorAll('input');
    i.forEach( (ii) => {
        ii.classList.toggle('input-alpha');
    });
    
    let rb = document.querySelectorAll('.rad');
    rb.forEach( (rborange) => {
        rborange.classList.toggle('rad-alpha')
    });

}


// function changeDoge(img) {
//         document.querySelector('#dogeImage').setAttribute('src', img);
        
//     }
    


// document.querySelector('#switchform').addEventListener('click', function () {
//     dogeToggle();
// });

// function dogeToggle() {
//     let dogetype = document.querySelector('#dogeImage');
//      console.log('Current Image Source:', dogetype.src);
//     if (dogetype.src.endsWith('./img/strongdoge.jpg')) {
//         changeDoge('./img/weakdoge.png');
//     } else {
//         changeDoge('./img/strongdoge.jpg');
//     }
//     console.log('New Image Source:', dogetype.src);
// }