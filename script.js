let musics = [
    {
        name : 'Bill-mahrdad hiden(feat. D7)',
        audio : new Audio('musics/Bill.mp3'),
        cover : 'covers/zozanaghe.jpg'
         
    },
    {
        name : '209-shahin najafi',
        audio : new Audio('musics/209.mp3'),
        cover : 'covers/209.jpg'
         
    },
    {
        name : 'jangale tarik-ho3ein & Tataloo & Pishro',
        audio : new Audio('musics/jangale tarik.mp3'),
        cover : 'covers/jangale tarik.jpg'
         
    },
    {
        name : 'Hezar-mahrdad hiden(feat. saman Wilson)',
        audio : new Audio('musics/Hezar.mp3'),
        cover : 'covers/hezar.jpg'
         
    },
    {
        name : 'nasakhe noskhe-hiphopolozhist',
        audio : new Audio('musics/nasakhe noskhe.mp3'),
        cover : 'covers/nasakhe noskhe.jpg'
         
    },
    {
        name : 'shokret-Pishro & Tataloo & Tohi',
        audio : new Audio('musics/shokret.mp3'),
        cover : 'covers/shokret.jpg'
         
    }
]

let musicName = document.querySelector('#music-name')
let musicCover = document.querySelector('#music-cover')
let musicTime = document.querySelector('#music-time')
let preBtn = document.querySelector('#pre-btn')
let playBtn = document.querySelector('#play-btn')
let nextBtn = document.querySelector('#next-btn')

let currentSong = 0;
let audio = musics[currentSong].audio
musicCover.src = musics[currentSong].cover
musicName.innerText = musics[currentSong].name


audio.addEventListener('canplay',(e)=>{
    musicTime.max = audio.duration
    
})
audio.addEventListener('timeupdate',()=>{
    musicTime.value = audio.currentTime
})
musicTime.addEventListener('input',(e)=>{
    audio.currentTime = musicTime.value
})

playBtn.addEventListener('click',(e)=>{
    if(audio.paused){
        audio.play()
        musicCover.style.animationPlayState = 'running'
        playBtn.innerText = 'Pause'
    }else{
        audio.pause()
        musicCover.style.animationPlayState = 'paused'
        playBtn.innerText = 'Play'
    }
})

nextBtn.addEventListener('click',(e)=>{
    changeMusic('next')
})

preBtn.addEventListener('click',(e)=>{
    changeMusic('pre')
})

function changeMusic(state){
    audio.pause()
    musicTime.value = 0
    playBtn.innerText = 'Play'
    musicCover.style.animationPlayState = 'paused'
    audio.currentTime = 0

    if(state == 'next'){
        if(currentSong == musics.length - 1)
            currentSong = 0
        else currentSong ++
    }else{
        if(currentSong == 0)
            currentSong = musics.length -1
        else currentSong --
    }
    
    audio = musics[currentSong].audio
    musicCover.src = musics[currentSong].cover
    musicName.innerText = musics[currentSong].name

    audio.addEventListener('timeupdate',()=>{
        musicTime.value = audio.currentTime
    })   
}
