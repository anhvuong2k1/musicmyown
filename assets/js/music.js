// 
// 
// 
// ------------------------js list music-------------------------
// 
// 
// 


const titleSong = $('.container_mid-title');
const imgSong = $('.container_mid-img');
const audio = $('#audio');

const PLAYER_STORAGE_KEY = 'V_Player';

const btnplay = $('.size');
const progress = $('#progress');

const nextbtn = $('#nextsong');
const backbtn = $('#backsong');
const Randombtn = $('#Random');
const repeatbtn = $('#repeat');
const playlist = $('#mymusic');


const app = {
    currentIndex: 0,
    isPlaying: false,
    isRamdom: false,
    isRepeat: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},             //
    setConfig: function(key, value) {                                               //  lưu lại giá trị của các
        this.config[key] = value;                                                   //  nút lặp lại / ramdom bài hát
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));      //
    },
    
    // song list ----------------------------
    songs: [
        {
            name: 'Trên trời có triệu vì sao',
            singer: 'Anh Vương',
            days: '30/11/2019',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song0-2019.mp4'
        },
        {
            name: 'Có thể bây giờ anh không thể',
            singer: 'Anh Vương',
            days: '09/07/2019',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song1-2019.mp4'
        },
        {
            name: 'Yêu đương',
            singer: 'Anh Vương',
            days: '08/11/2019',
            image: './img/imgmusic/img1.jpg',
            path: './assets/MyMusic/song2-2019.mp4'
        },
        {
            name: 'HàNội n U',
            singer: 'Anh Vương',
            days: '30/11/2019',
            image: './img/imgmusic/img1.jpg',
            path: './assets/MyMusic/song3-2019.mp4'
        },
        {
            name: '25',
            singer: 'Anh Vương',
            days: '30/11/2019',
            image: './img/imgmusic/img1.jpg',
            path: './assets/MyMusic/song6-2019.mp4'
        },
        {
            name: 'Ai yêu nhiều hơn cũng được',
            singer: 'Anh Vương',
            days: '11/01/2020',
            image: './img/imgmusic/anh3.jpeg',
            path: './assets/MyMusic/song16-2020.mp4'
        },
        {
            name: 'Bông hoa chẳng thuộc về ta',
            singer: 'Anh Vương',
            days: '25/01/2020',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song9-2020.mp4'
        },
        {
            name: 'Sau đêm nay',
            singer: 'Anh Vương',
            days: '28/02/2020',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song10-2020.mp4'
        },
        {
            name: '100 years',
            singer: 'Anh Vương',
            days: '14/03/2020',
            image: './img/imgmusic/anh4.jpeg',
            path: './assets/MyMusic/song11-2020.mp4'
        },
        {
            name: 'Sợ rằng em biết anh còn yêu em',
            singer: 'Anh Vương',
            days: '28/03/2020',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song12-2020.mp4'
        },
        {
            name: 'Cánh hồng phai',
            singer: 'Anh Vương',
            days: '03/10/2020',
            image: './img/imgmusic/anh3.jpeg',
            path: './assets/MyMusic/song14-2020.mp4'
        },
        {
            name: 'Bài ca không tựa đề',
            singer: 'Anh Vương',
            days: '06/11/2020',
            image: './img/imgmusic/img1.jpg',
            path: './assets/MyMusic/song15-2020.mp4'
        },
        {
            name: 'Xích Thêm Chút',
            singer: 'Anh Vương',
            days: '07/05/2020',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song17-2021.mp4'
        },
        {
            name: 'Chiếc bụng đói',
            singer: 'Anh Vương',
            days: '25/03/2020',
            image: './img/imgmusic/anh2.jpeg',
            path: './assets/MyMusic/song18-2021.mp4'
        }
    ],
    // render song list
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index === this.currentIndex ? 'ative' : ''}" data-index="${index}">
                <img src="${song.image}" alt="" class="song_img">
                <div class="song_body">
                    <h3 class="song_body-title"><b>${song.name}</b></h3>
                    <p class="song_body-name">${song.singer}</p>
                    <p class="day">${song.days}</p>
                </div>
            </div>`
        });
        playlist.innerHTML = htmls.join('');
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    
    // load songs vào html
    loadcurentSong: function() {
        titleSong.textContent = this.currentSong.name  // ten 
        imgSong.src = this.currentSong.image           // ảnh
        audio.src = this.currentSong.path              // bài hát
    },

    // hàm xử lý event / all hành động trên trang
    handleEvent: function() {
        const _this = this;

        // click play cua mymusic
        btnplay.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            }else {
                audio.play();
            }
        };

        // khi song dc player (mymusic)
        audio.onplay = function() {
            btnplay.classList.add('playing');
            _this.isPlaying = true;
            imgAnimatoin.play();
        };

        // khi song bị pause (mymusic)
        audio.onpause = function() {
            btnplay.classList.remove('playing');
            _this.isPlaying = false;
            imgAnimatoin.pause();
        };

        // khi play song, chạy thanh tiến độ (mymusic)
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progressPercen = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercen;
            }
        };

        // Xử lý tua nhạc (mymusic)
        progress.onchange = function (e) {
            timeSeek = audio.duration / 100 * e.target.value;
            audio.currentTime = timeSeek;
        };

        // xử lý img quay - dừng (mymusic)
        const imgAnimatoin = imgSong.animate([
                                { transform: 'rotate(360deg)'}
                            ], { 
                                duration: 10000, // 10s
                                iterations: Infinity,
                            });
        imgAnimatoin.pause();

        // khi next song (my music)
        nextbtn.onclick = function() {
            if (_this.isRamdom) {
                _this.PlayRandomSongs();
            } else {
                _this.NextSong(); 
            };
            audio.play();
            _this.render();
        };

        // khi back song (mymusic)
        backbtn.onclick = function() {
            if (_this.isRamdom) {
                _this.PlayRandomSongs();
            } else {
                _this.BackSong(); 
            };
            audio.play();
            _this.render();
        };

        // random songs (mymusic)
        Randombtn.onclick = function(e) {
            _this.isRamdom = !_this.isRamdom;
            _this.setConfig('isRamdom', _this.isRamdom);    // lưu lại những giá trị f5 cũng không thay đổi
            Randombtn.classList.toggle('active',  _this.isRamdom);
        };

        // xử lý khi audio end (mymusic)
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                nextbtn.click(); // tự động nẽt sang bài mới
            };
        };

        // click repeat - lặp lại 1 bài hát (mymusic)
        repeatbtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRepeat);
            repeatbtn.classList.toggle('active',  _this.isRepeat);
        };

        // xử lý click đổi bài hát vao playlist ( list nhạc) (mymusic)
        playlist.onclick = function(e) {
            const elmSong = e.target.closest('.song:not(.ative)');

            if (elmSong || e.target.closest('.fa-ellipsis-h')) {
                 // click zo song
                if (elmSong) {
                    _this.currentIndex = Number(elmSong.dataset.index);
                    _this.loadcurentSong();
                    audio.play();
                    _this.render();
                }; 
            };
            
        };
    },

    // next nhac (mymusic)
    NextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadcurentSong();
    },

    // back nhac (mymusic)
    BackSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadcurentSong();
    },

    // load config
    LoadConfig: function() {
        this.isRamdom = this.config.isRamdom;
        this.isRepeat = this.config.isRepeat;
        this.isRamdom2 = this.config.isRamdom2;
        this.isRepeat2 = this.config.isRepeat2;
    },

    PlayRandomSongs: function() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        } while (newIndex === this.currentIndex);

        this.currentIndex = newIndex;
        this.loadcurentSong();
    },

    // hàm tổng để chạy app
    start: function() {
        // gắn cấu hình từ config vào ứng dụng
        this.LoadConfig();

        // định nghĩa các thuộc tính cho obj
        this.defineProperties();

        // tải in4 đầu tiên vào UI
        this.loadcurentSong();

        // xử lý sự kiện
        this.handleEvent();

        // render bài hát
        this.render();

        // hiển thị trạng thái ban đầu của btn repeat va random
        repeatbtn.classList.toggle('active',  this.isRepeat);
        Randombtn.classList.toggle('active',  this.isRamdom);
    }
};

app.start(); // gọi hàm tổng