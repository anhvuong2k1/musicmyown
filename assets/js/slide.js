// 
// 
//              ---------------------------   IMG ANIMATIONS ------------------------------------
// 


const list_albumimg = [...$$('.list_albumimg')];
const imgAlbum = $('.imgAlbum');
const imgWidth = 305;

imgAlbum.style.width = `${list_albumimg.length * imgWidth}px`;

let index = 0;

function next() {
    if (index < list_albumimg.length - 1) {
        index++;
    } else {
        index = 0;
    }

    imgAlbum.style.transform = `translateX(-${imgWidth * index}px)`;
};

function prev() {
    if (index === 0 ) {
        index = list_albumimg.length - 1;
    } else {
        index--;
    }

    imgAlbum.style.transform = `translateX(-${imgWidth * index}px)`;
};

$('#nextimg').addEventListener('click', () => {
    next();
});

$('#previmg').addEventListener('click', () => {
    prev();
});

// auto 
setInterval(() => {
    next();
}, 5 * 1000);