// javascript tab ui
// 
// 

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const listYears = $$('.years');
const listMusic = $$('.list_songs');

const yearActive = $('.years.active');
const line = $('.line');

line.style.left = yearActive.offsetLeft + 'px';
line.style.width = yearActive.offsetWidth + 'px';

listYears.forEach((years, index) => {
    const listSong = listMusic[index];
    
    years.onclick = function () {
        $('.years.active').classList.remove('active');
        $('.list_songs.active').classList.remove('active');


        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        listSong.classList.add('active');
    }
});