const music = new Audio('Everytime.mp3');
// music.play();

const songs = [
    {
        id:'1',
        songName: `On My way<br>
        <div class="subtitle">Alan walker</div>`,
        poster:"./assets/imgae on my way.jpg"
    },
    {
        id:'2',
        songName: `Điêu Toa<br>
        <div class="subtitle">Masew</div>`,
        poster:"./assets/masew.jpg"
    },
    {
        id:'3',
        songName: `Way back home<br>
        <div class="subtitle">Shaun</div>`,
        poster:"./assets/way back home shaun.jpg"
    },
    {
        id:'4',
        songName: `Cartoon<br>
        <div class="subtitle">On&On</div>`,
        poster:"./assets/cartoon onon.jpg"
    },
    {
        id:'5',
        songName: `I love you 3000<br>
        <div class="subtitle">Stephanie Poetri</div>`,
        poster:"./assets/i love you 3000 Stephanie Poetri.jpg"
    },
    {
        id:'6',
        songName: `Warriyo <br>
        <div class="subtitle">Mortals/div>`,
        poster:"./assets/warriyo mortals.jpg"
    },
    {
        id:'7',
        songName: `On My way<br>
        <div class="subtitle">Alan walker</div>`,
        poster:"./assets/imgae on my way.jpg"
    },
    {
        id:'8',
        songName: `Điêu Toa<br>
        <div class="subtitle">Masew</div>`,
        poster:"./assets/masew.jpg"
    },
    {
        id:'9',
        songName: `Way back home<br>
        <div class="subtitle">Shaun</div>`,
        poster:"./assets/way back home shaun.jpg"
    },
    {
        id:'10',
        songName: `Cartoon<br>
        <div class="subtitle">On&On</div>`,
        poster:"./assets/cartoon onon.jpg"
    },
    {
        id:'11',
        songName: `I love you 3000<br>
        <div class="subtitle">Stephanie Poetri</div>`,
        poster:"./assets/i love you 3000 Stephanie Poetri.jpg"
    },
    {
        id:'12',
        songName: `Warriyo <br>
        <div class="subtitle">Mortals/div>`,
        poster:"./assets/warriyo mortals.jpg"
    },
    {
        id:'13',
        songName: `On My way<br>
        <div class="subtitle">Alan walker</div>`,
        poster:"./assets/imgae on my way.jpg"
    },
    {
        id:'14',
        songName: `Điêu Toa<br>
        <div class="subtitle">Masew</div>`,
        poster:"./assets/masew.jpg"
    },
    {
        id:'15',
        songName: `Way back home<br>
        <div class="subtitle">Shaun</div>`,
        poster:"./assets/way back home shaun.jpg"
    },
    {
        id:'16',
        songName: `Cartoon<br>
        <div class="subtitle">On&On</div>`,
        poster:"./assets/cartoon onon.jpg"
    },
    {
        id:'17',
        songName: `I love you 3000<br>
        <div class="subtitle">Stephanie Poetri</div>`,
        poster:"./assets/i love you 3000 Stephanie Poetri.jpg"
    },
    {
        id:'18',
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Masew</div>`,
        poster:"./assets/masew.jpg"
    },
    {
        id:'19',
        songName: `On My way<br>
        <div class="subtitle">Alan walker</div>`,
        poster:"./assets/imgae on my way.jpg"
    },
    {
        id:'20',
        songName: `Alan Walker-Fade <br>
        <div class="subtitle">Alan Masew</div>`,
        poster:"./assets/masew.jpg"
    },  
]

Array.from(document.getElementsByClassName('songItem')).forEach((element , i) =>{
     element.getElementsByTagName('img')[0].src = songs[i].poster;
     console.log(element.getElementsByTagName('img')[0]);
    //  console.log(element.getElementsByTagName('img')[0].src);
     element.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})


let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];


masterPlay.addEventListener('click', () => {
    if(music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else{
        music.pause();
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
        wave.classList.remove('active2');

    }
})

const makeAllPLays =() => {
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
            element.classList.add('bi-play-circle-fill');
            element.classList.remove('bi-pause-circle-fill');
    } )
}
const makeAllBackgrounds =() => {
    Array.from(document.getElementsByClassName('songItem')).forEach((element) => {
            element.style.background = "rgba(105,105,170,0)";
    } )
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((element) => {
    element.addEventListener('click' , (e) =>{
        index = e.target.id;
        makeAllPLays();
        e.target.classList.remove('bi-play-circle-fill');
        e.target.classList.add('bi-pause-circle-fill');
        // music.src = `audio/${index}.mp3;`
        poster_master_play.src = `${songs[index-1].poster}`;
        music.currentTime = 0;
        music.play();
        let song_tittle = songs.filter((ele) => {
            return ele.id == index;
        })
        
        song_tittle.forEach(ele => {
            let {songName} = ele;
            title.innerHTML = songName;
        })
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended', () =>{
            masterPlay.classList.remove('bi-pause-fill');
            masterPlay.classList.add('bi-play-fill');
            wave.classList.remove('active2');
            makeAllPLays();
        } )
        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105,105,170,.1)";
    })
} )

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () =>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);

    if (sec<10){
        sec = `0${sec}`;
    }
    currentEnd.innerText = `${min}:${sec}`;
    
    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);

    if (sec1<10){
        sec1 = `0${sec1}`;
    }
    
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    dot.style.left = `${seekbar}%`;
    bar2.style.width = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})
music.addEventListener('ended', ()=> {
    masterPlay.classList.remove('bi-pause-fill');
    masterPlay.classList.add('bi-play-fill');
    wave.classList.remove('active2');
})

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0){
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50){
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    // music.src = `audio/${index}.mp3;`
    poster_master_play.src = `${songs[index-1].poster}`;
    music.currentTime = 0;
    music.play();
    let song_tittle = songs.filter((ele) => {
        return ele.id == index;
    })
    
    song_tittle.forEach(ele => {
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPLays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105,105,170,.1)";

})


next.addEventListener('click', ()=>{
    // index -= 0;
    index +=1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    // music.src = `audio/${index}.mp3;`
    poster_master_play.src = `${songs[index-1].poster}`;
    music.currentTime = 0;
    music.play();
    let song_tittle = songs.filter((ele) => {
        return ele.id == index;
    })
    
    song_tittle.forEach(ele => {
        let {songName} = ele;
        title.innerHTML = songName;
    })
    makeAllPLays();
    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105,105,170,.1)";

})

let left_scroll = document.getElementById('left_scroll');
let right_scroll = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop_song')[0];

left_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft -=330;
})
right_scroll.addEventListener('click', ()=>{
    pop_song.scrollLeft +=330;
})


let left_scrolls = document.getElementById('left_scrolls');
let right_scrolls = document.getElementById('right_scrolls');
let item = document.getElementsByClassName('item')[0];

left_scrolls.addEventListener('click', ()=>{
    item.scrollLeft -=330;
})
right_scrolls.addEventListener('click', ()=>{
    item.scrollLeft +=330;
})