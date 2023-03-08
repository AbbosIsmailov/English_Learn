let playerBox = document.querySelector('.player-box');
let  prevBtn =document.querySelector('.controls-prev__btn');
let playBtn =document.querySelector('.controls-play__btn');
let  nextBtn =document.querySelector('.controls-next__btn');
let  musicName =document.querySelector('.music-name');
let  playerName =document.querySelector('.player-name');
let  playImg =document.querySelector('.play-img');
let  progressBox =document.querySelector('.progress');
let  beginMusic =document.querySelector('.begin-music');
let  btnBurger =document.querySelector('.btn-burger');
let  min =document.querySelector('.min');
let  second =document.querySelector('.second');
let  minMax =document.querySelector('.minMax');
let  secondMax =document.querySelector('.secondMax');
let  library =document.querySelector('.library');
let  arrowBtn =document.querySelector('.arrow-btn');
let  volmueBtn =document.querySelector('.btn-show');
let  songList =document.querySelector('.songs-list');
let  coverImg =document.querySelector('.cover-img');
// let  volme =document.querySelector('#rangeVolme');
let  shuffleBtn =document.querySelector('.shuffle-btn');
let  ReapitBtn =document.querySelector('.btn-repeat');
let shuffer=0;

let cards = []
let temp=0;
let audio = document.querySelector('audio');


music.forEach((item , i)=>{
    item.id1=i;
})
console.log(music);
let musicObj={
   res:music
}


let count = music.length;
let songIndex=0;

songMusic(musicObj.res[songIndex].song,musicObj.res[songIndex].singer, musicObj.res[songIndex].img);

function songMusic(song ,singer,imgs){
    audio.src=`music/${song}.mp3`;
    musicName.innerHTML  = singer;
    playerName.innerHTML  = song;
    console.log(imgs);
    coverImg.src=`img/${imgs}.jpeg`

}
 

   playBtn.addEventListener('click', playSong);
   nextBtn.addEventListener('click', nextMusic);
   prevBtn.addEventListener('click', prevMusic);
   audio.addEventListener('ended', nextMusic);
   audio.addEventListener('timeupdate',progress);
   progressBox.addEventListener('mousedown',progressFlips)
   btnBurger.addEventListener('click',burgerShow);
   arrowBtn.addEventListener('click',arrowShow);
//   ReapitBtn.addEventListener('click',reapitFun)


function  burgerShow(){
        library.classList.add('showlib');
}

function arrowShow(){
    library.classList.remove('showlib');
}

   function playSong(){
  
            if(!playerBox.classList.contains('active')){

                      playmusic();
              }else{
                        pauseSong()  ;
                        playBtn.classList.remove('controls-play');
                }
   }

//  play music

   function playmusic(){
      playerBox.classList.add('active');
     playImg.src="img/pause.svg";
      audio.play();
   }

//  pause music
 
   function pauseSong(){
    playerBox.classList.remove('active');
   playImg.src="img/play.svg";
    audio.pause();
 }
//  nextMusic

function nextMusic(){

    if(songIndex < count-1){
        songIndex++;
    }else{
        songIndex=0;
    }

    myfunc(musicObj.res)
    songMusic(musicObj.res[songIndex].song,musicObj.res[songIndex].singer, musicObj.res[songIndex].img)
    playmusic();

}

// prevmusic

function prevMusic(){

    if(songIndex > 0){
        songIndex--;
    }else{
        songIndex=count-1;
    }
    songMusic(musicObj.res[songIndex].song,musicObj.res[songIndex].singer, musicObj.res[songIndex].img)
    playmusic();
    myfunc(musicObj.res)

}

// progress box

function progress(e){
document.querySelector('.flip-progress').style.width=`${audio.currentTime /audio.duration * 100}%`;
  second.innerHTML=Math.floor(audio.currentTime) < 10  ? '0' +Math.floor(audio.currentTime) : Math.floor(audio.currentTime);
 
  Math.floor(audio.currentTime)  > 59 ?(second.innerHTML=Math.floor(audio.currentTime)%60 <10 ?'0' +Math.floor(audio.currentTime)%60 :Math.floor(audio.currentTime)%60, min.innerHTML =  Math.floor(audio.currentTime /60))  : min.innerHTML = 0;
  minMax.innerHTML = String(Math.floor(audio.duration / 60)) =='NaN' ? '0' :Math.floor(audio.duration / 60) ;
  
  secondMax.innerHTML=String(Math.floor(audio.duration)%60) =='NaN' ? '00' : Math.floor(audio.duration)%60 < 10 ?'0' + Math.floor(audio.duration )%60 :Math.floor(audio.duration)%60;
}

//  progress box flips

function progressFlips(e){
    audio.currentTime = e.offsetX / 391 * audio.duration ;
}
myfunc(musicObj.res);
function myfunc(music1){
    songList.innerHTML='';
    music1.forEach((item1 ,i)=>{
        let divItem  = document.createElement('div');
        divItem.classList = 'song-item';
        divItem.id=`${i}`
           divItem.innerHTML = `
                <img src="img/${item1.img}.jpeg" alt="">
                <div class="song-item-info">
                <h2 class="song-title">${item1.singer}</h2>
                <span class="song-name">${item1.song}</span>
           `
           cards.push(divItem);
            songList.appendChild(divItem);
            if(i == songIndex){
               divItem.classList.add('active-item');
           }else{
               divItem.classList.remove('active-item')
           }
         divItem.addEventListener('click',function(e){
            cards.forEach(item =>{
                if(item.id1 !=e.target.id){
                   item.classList.remove('active-item');
                }
           })
            if(e.target.id == item1.id1){
                e.target.classList.add('active-item');
                songIndex=item1.id1;
                songMusic(musicObj.res[songIndex].song,musicObj.res[songIndex].singer, musicObj.res[songIndex].img)
                playmusic();
                setTimeout(arrowShow , 1000);
              }
           
         })
        
    });
}
audio.volume=0.5;

volmueBtn.addEventListener('click',function(){
     document.querySelector('.volume').classList.toggle('none');
})
document.querySelector('#volume').addEventListener('input',function(e){
        audio.volume = e.target.value/100;
       console.log(e.target.value/100)
})

