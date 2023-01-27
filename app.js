
///////////////////////////////////////////////////////////////////////////////////////////////////////
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const songName = $('.song__name')
const singerName = $('.song__singer')
const cdImg = $('.cd__img')
const audio = $('#audio')
const playlist = $('.playlist__container')
const playlistList = $('.playlist__list')
const progressBar = $('.progress-bar')
const progressValue = $('.progress-bar__value')
const btnPlay = $('.btn__play')
const btnPrev = $('.btn__prev')
const btnNext = $('.btn__next')
const btnRandom = $('.btn__shuffle')
const btnRepeat = $('.btn__repeat')
const btnRepeat1 = $('.btn__repeat--1')
const btnList = $('.list-icon')
const btnClose = $('.playlist__icon-close')
const heartIcon = $('.favorite')
const songCurrentTime = $('.progress-time__current')
const songDuration = $('.progress-time__duration')
const volumeBar = $('.volume-bar')
const volumeValue = $('.volume-bar__value')
const volumeBtn = $('.volume')
const volumeHigh = $('.volume--high')
const volumeLow = $('.volume--low')
const volumeMute = $('.volume--mute')



const songPlayedList = new Set()

const app = {
    currentIndex: 0,
    currentVolume: 0.5,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    isRepeat1: false,
    isMute: false,
    isHoldProgressBar: false,
    isHoldVolumeBar: false,
    
    songs: [
        {
            name: "Somewhere",
            singer: "Groovyroom (Feat. Suran, pH-1)",
            path: "./assets/music/GroovyRoom (그루비룸) - 어디쯤에(Somewhere) (Feat. Suran, pH-1)(Color Coded Han-Rom-Eng Lyrics).mp3",
            image: "./assets/img/sddefault.jpg"
        },
        {
            name: "Out Of Time",
            singer: "The Weekend",
            path: "./assets/music/The Weekend - Out of Time.mp3",
            image: "./assets/img/outoftime.jpg"
        },
        {
            name: "Alone",
            singer: "쿠기 (Coogie) Feat. 이하이 (LeeHi)",
            path: "./assets/music/쿠기 (Coogie) - Alone (Feat. 이하이 (LeeHi)).mp3",
            image: "./assets/img/alone.jpg"
        },
        {
            name: "Lần cuối (Cover)",
            singer: "Gia Nghi",
            path: "./assets/music/Lần cuối - Gia Nghi [08-09-2020].mp3",
            image: "./assets/img/gianghi.jpg"
        },
        {
            name: "You",
            singer: "Jisoo",
            path: "./assets/music/JISOO - ' YOU ' MV.mp3",
            image: "./assets/img/jisoo.jpg"
        },
        {
            name: "Lonely Love",
            singer: "Trang Hàn, TDK, Hoàng Thống",
            path: "./assets/music/Trang Hàn x TDK x Hoàng Thống - LONELY LOVE.mp3",
            image: "./assets/img/lonelylove.jpg"
        },
        {
            name: "The Weekend (MILLI Remix)",
            singer: "BIBI - MILLI",
            path: "./assets/music/BIBI & MILLI - The Weekend (MILLI Remix).mp3",
            image: "./assets/img/bibi.jpg"
        },
        {
            name: "Sài Gòn Tôi Mưa",
            singer: "Tuyên (ft. MC Goku)",
            path: "./assets/music/TUYÊN - SÀI GÒN TÔI MƯA (ft. MC GOKU) .mp3",
            image: "./assets/img/saigontoimua.jpg"
        },
        {
            name: "[Kimi No Nawa] Nandemonaiya",
            singer: "Mone Kamshiraishi",
            path: "./assets/music/Nandemonaiya-なんでもないや - Mone Kamshiraishi.mp3",
            image: "./assets/img/Kamishiraishi_Mone.jpg"
        },
        {
            name: "Chết đi cho rồi",
            singer: "Nguyễn Hồng Giang (feat Cam & Quỳnh)",
            path: "./assets/music/Nguyễn Hồng Giang - Chết đi cho rồi ( feat Cam & Quỳnh ).mp3",
            image: "./assets/img/chetdichoroi.jpg"
        },
        {
            name: "Uchiage Hanabi (打上花火)",
            singer: "DAOKO - 米津玄師",
            path: "./assets/music/DAOKO 米津玄師『打上花火』MUSIC VIDEO.mp3",
            image: "./assets/img/daoko.jpg"
        },
        {
            name: "Không một bài hát nào có thể diễn tả cảm xúc của em lúc này",
            singer: "Hoàng Thùy Linh & Thanh Bùi",
            path: "./assets/music/Không một bài hát nào có thể diễn tả cảm xúc của em lúc này - Hoàng Thùy Linh & Thanh Bùi.mp3",
            image: "./assets/img/khongmotbaihat.jpg"
        },
        {
            name: "Lần Cuối (đi bên em xót xa người ơi)",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - LẦN CUỐI (đi bên em xót xa người ơi).mp3",
            image: "./assets/img/lancuoi.jpg"
        },
        {
            name: "Stay With Me",
            singer: "Miki Matsubara",
            path: "./assets/music/Miki Matsubara - Stay With Me HD (Club Mix).mp3",
            image: "./assets/img/staywithme.jpg"
        },
        {
            name: "Thấy Chưa",
            singer: "Ngọt",
            path: "./assets/music/Ngọt - Thấy Chưa.mp3",
            image: "./assets/img/thaychua.jpg"
        },
        {
            name: "Thanh",
            singer: "Thịnh Suy",
            path: "./assets/music/Thịnh Suy - Thanh.mp3",
            image: "./assets/img/thanh.jpg"
        },
        {
            name: "Lemon",
            singer: "Kenshi Yonezu (米津玄師)",
            path: "./assets/music/Lemon - Kenshi Yonezu (米津玄師).mp3",
            image: "./assets/img/lemon.jpg"
        },
        {
            name: "Super Rare",
            singer: "Epik High (에픽하이)",
            path: "./assets/music/Epik High (에픽하이) - Super Rare.mp3",
            image: "./assets/img/superrare.jpg"
        },
        {
            name: "Flyday Chinatown",
            singer: "Yasuha",
            path: "./assets/music/Yasuha - Flyday Chinatown.mp3",
            image: "./assets/img/flydaychinatown.jpg"
        },
        {
            name: "Bên Trái",
            singer: "Kiên",
            path: "./assets/music/KIEN - BÊN TRÁI.mp3",
            image: "./assets/img/bentrai.jpg"
        },
        {
            name: "Traveler",
            singer: "숀 (SHAUN)",
            path: "./assets/music/숀 (SHAUN) - Traveler.mp3",
            image: "./assets/img/traveler.jpg"
        },
        {
            name: "Yoru ni Kakeru「夜に駆ける」",
            singer: "YOASOBI",
            path: "./assets/music/Yoru ni Kakeru「夜に駆ける」YOASOBI.mp3",
            image: "./assets/img/intothenight.jpg"
        },
        {
            name: "Waiting For Love",
            singer: "Avicii",
            path: "./assets/music/Avicii - Waiting For Love.mp3",
            image: "./assets/img/waitingforlove.jpg"
        },
        {
            name: "Give Me Your Love (Remix)",
            singer: "DEAMN",
            path: "./assets/music/Give Me Your Love (Remix).mp3",
            image: "./assets/img/GMYL.jpg"
        },
        {
            name: "Way Back",
            singer: "Vicetone (feat. Cozi Zuehlsdorff)",
            path: "./assets/music/Vicetone - Way Back (feat. Cozi Zuehlsdorff).mp3",
            image: "./assets/img/wayback.jpg"
        },
        {
            name: "Rather Be - Without Me (Mashup)",
            singer: "Eminem ft. Clean Bandit",
            path: "./assets/music/Rather Be - Without Me [Mashup] - Eminem ft. Clean Bandit.mp3",
            image: "./assets/img/ratherbexwithoutme.jpg"
        },
        {
            name: "Yours (Live)",
            singer: "Raiden X Chanyeol (Feat. LeeHi, Changmo)",
            path: "./assets/music/Raiden X CHANYEOL - Yours (Feat. LeeHi, CHANGMO).mp3",
            image: "./assets/img/yours.jpg"
        }
    ],
    
    render() {
        const htmls = this.songs.map((song,index) => {
            return `
            <li class="playlist__item" data-index="${index}">
                <div class="playlist__item-img">
                    <img src="${song.image}" alt="">
                </div>
                <div class="playlist__item-info">
                    <h3 class="playlist__item-name">
                        ${song.name}
                    </h3>
                    <p class="playlist__item-singer">
                        ${song.singer}
                    </p>
                </div>
                <div class="music-waves">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </li>
            `
        })

        playlistList.innerHTML = htmls.join("")
    },

    activeSong() {
        const songs = $$('.playlist__item')
        const musicWaves = $$('.music-waves')
        songs.forEach((song, index) => {
            if(index === this.currentIndex) {
                song.classList.add('active')
                musicWaves[index].classList.add('active')
                    song.scrollIntoView(
                        {
                            behavior: 'smooth',
                            block: 'center',
                            inline: 'center'
                        }
                    )
            } else {
                song.classList.remove('active')
                musicWaves[index].classList.remove('active')
            }
        })
    },

    defineProperties() {
        Object.defineProperty(this, 'currentSong', {
            get: () => this.songs[this.currentIndex]
            }
        )
    },

    timeFormat(seconds) {
        const date = new Date(null)
        date.setSeconds(seconds)
        return date.toISOString().slice(14, 19)
    },

    loadCurrentSong() {
        const _this = this
        songName.textContent = this.currentSong.name
        singerName.textContent = this.currentSong.singer
        cdImg.src = this.currentSong.image
        audio.src = this.currentSong.path
        audio.volume = this.currentVolume

        audio.onloadedmetadata = function() {
            songCurrentTime.textContent = _this.timeFormat(this.currentTime.toFixed(2))
            songDuration.textContent = _this.timeFormat(this.duration.toFixed(2))
        }
    },

    nextSong() {
        this.currentIndex++
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
        this.activeSong()
    },

    prevSong() {
        this.currentIndex--
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
        this.activeSong()
    },

    randomSong() {
        let newIndex 
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (songPlayedList.has(newIndex))
        this.currentIndex = newIndex
        this.loadCurrentSong()
        songPlayedList.add(newIndex)
        if(songPlayedList.size === this.songs.length) {
            songPlayedList.clear()
            audio.play()
        }
        this.activeSong()
    },

    handleEvents() {
        const _this = this

        // Xử lý quay cd
        const cdAnimate = cdImg.animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 10000, 
            iterations: Infinity,
        })

        cdAnimate.pause()

        // Play + Pause
        btnPlay.onclick = function() {
            if(_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
            _this.activeSong()
        }

        // Lắng nghe khi nhạc được chạy
        audio.onplay = function() {
            _this.isPlaying = true
            btnPlay.classList.add('playing')
            cdAnimate.play()
        }

        // Lắng nghe khi nhạc dừng chạy
        audio.onpause = function() {
            _this.isPlaying = false
            btnPlay.classList.remove('playing')
            cdAnimate.pause()
        }

        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
                const progressPercent = audio.currentTime / audio.duration * 100
                progressValue.style.width = progressPercent + '%'
        }
        
        // Xử lý thời current time và thanh tiến trình 
        audio.ontimeupdate = function() {
            songCurrentTime.textContent = _this.timeFormat(this.currentTime)
            const progressPercent = this.currentTime / this.duration * 100
            progressValue.style.width = progressPercent + '%'
        }

        // Xử lý khi tua bài hát
        progressBar.onmousedown = function(e) {
            //   e.offsetX: là độ dài khi click tua
            //   this.offsetWidth: là độ dài của thanh bài hát
            audio.currentTime = e.offsetX / this.offsetWidth * audio.duration
            _this.isHoldProgressBar = true 
        }

        // Xử lý vừa kéo vừa giữ khi tua
        progressBar.onmousemove = function(e) {
            if(_this.isHoldProgressBar) {
                audio.currentTime = e.offsetX / this.offsetWidth * audio.duration
            }
        }

        // Xử lý Next songs 
        btnNext.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }
            audio.play()
        }

        // Xử lý Previous songs 
        btnPrev.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }
            audio.play()
        }

        // Xử lý random songs 
        btnRandom.onclick = function() {   
            _this.isRandom = !_this.isRandom
            btnRandom.classList.toggle('active', _this.isRandom)
        }

        // Xử lý repeat songs 
        btnRepeat.onclick = function() {   
            _this.isRepeat = !_this.isRepeat
            btnRepeat.classList.toggle('active', _this.isRepeat)
        }

        // Xử lý next bài hát khi audio ended
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play()
            } else {
                btnNext.click()
            }
        }

        // Xử lý bật / tắt playlist
        btnList.onclick = function() {
            playlist.classList.add('openList')
            setTimeout(() => {
                _this.activeSong()
            }, 1000)
        }
        
        btnClose.onclick = function() {
            playlist.classList.remove('openList')
        }

        // Xử lý khi click songs
        playlistList.onclick = function(e) {
            const songNode = e.target.closest('.playlist__item:not(.active)')
            if(songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.activeSong()
                audio.play()
            }
        }

        // Xử lý khi bấm favorite
        heartIcon.onclick = function() {
            this.classList.toggle('active')
        }
        
        // Xử lý nút volume 
        volumeBtn.onclick = function() {
            _this.isMute = !_this.isMute
            this.classList.toggle('active', _this.isMute)
            if(_this.isMute)
                audio.volume = 0
            else 
                audio.volume = _this.currentVolume
        }
        
        // Xử lý thanh volume
        volumeBar.onmousedown = function (e) {
            if(_this.isHoldVolumeBar) {
            //   e.offsetX: là độ dài khi click tua
            //   this.offsetWidth: là độ dài của thanh bài hát
                if(e.offsetX >= 0 && e.offsetX <= this.offsetWidth) {
                    _this.currentVolume = (e.offsetX / this.offsetWidth).toFixed(2)
                    audio.volume = _this.currentVolume
                    volumeValue.style.width = audio.volume * 100 + '%'
                }
            }
            _this.isHoldVolumeBar = true
        }

        volumeBar.onmousemove = function (e) {
            if(_this.isHoldVolumeBar) {
                if(e.offsetX >= 0 && e.offsetX <= this.offsetWidth) {
                    _this.currentVolume = (e.offsetX / this.offsetWidth).toFixed(2)
                    audio.volume = _this.currentVolume
                    volumeValue.style.width = audio.volume * 100 + '%'
                }
            }
        }

        audio.onvolumechange = function() {
            if(audio.volume === 0) {
                volumeMute.classList.add('active')
                volumeHigh.classList.remove('active')
                volumeLow.classList.remove('active')
                volumeValue.style.width = 0
            } else if(audio.volume > 0 && audio.volume < 0.3) {
                volumeLow.classList.add('active')
                volumeHigh.classList.remove('active')
                volumeMute.classList.remove('active')
                volumeValue.style.width = this.volume * 100 + '%'
            } else {
                volumeHigh.classList.add('active')
                volumeLow.classList.remove('active')
                volumeMute.classList.remove('active')
                volumeValue.style.width = this.volume * 100 + '%'
            }
        }
        
        window.onmouseup = function() {
            // Đặt biến này để có thể vừa giữ vừa kéo được khi tua
            _this.isHoldProgressBar = false
            _this.isHoldVolumeBar = false
        }
    },


    start() {
        // Định nghĩa các thuộc tính cho Object
        this.defineProperties()

        //Lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents()

        // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong()

        // Render playlist
        this.render()
    }
}

app.start();
// Bật tắt Playlist

