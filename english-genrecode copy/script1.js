let previous=document.querySelector('#pre');
let play=document.querySelector('#play');
let next=document.querySelector('#next');
let title=document.querySelector('#title');
let recent_volume=document.querySelector('#recent_volume');
let volume_show=document.querySelector('volume_show');
let slider=document.querySelector('#slider');
let show_duration=document.querySelector('#show_duration');
let track_image=document.querySelector('#track_image');
let auto_play=document.querySelector('#auto_play');
let present=document.querySelector('#present');
let total=document.querySelector('#total');
let artist=document.querySelector('#artist');
let newindex_no=document.getElementById('#newindex_no');


let timer;
let autoplay=0;
var index_no=0;

index_no=sessionStorage.getItem('index_no123');
let playing_song=false;

//creating audio element
let track=document.createElement('audio');
//All songs list
let ALL_SONG=[
    {
        name:"STAY",
        path:"english-genre/stay.mp3",
        img:"images/stay.jpg",
        singer:"The Kid LAROI - STAY (ft. Justin Bieber)"
    },
    {
        name:"	INDUSTRY BABY",
        path:"english-genre/industry.mp3",
        img:"images/INDUSTRYBABY.png",
        singer:"	Lil Nas X - INDUSTRY BABY"
    },
    
];
//loading the tracks
function load_track(index_no){
    track.src=ALL_SONG[index_no].path;
    title.innerHTML=ALL_SONG[index_no].name;
    track_image.src=ALL_SONG[index_no].img;
    artist.innerHTML=ALL_SONG[index_no].singer;

}

load_track(index_no);
function justplay(){
    if(playing_song==false){
        playsong();
    }
    else{
        pausesong();
    }
}
//play song
function playsong(){
    track.play();
    playing_song=true;
    play.innerHTML='<i class="fa fa-pause"></i>';
}
//pause song
function pausesong(){
    track.pause();
    playing_song=false;
    play.innerHTML='<i class="fa fa-play"></i>';
}
//next song
function next_song(){
    if(index_no<ALL_SONG.length-1){
        index_no+=1;
        load_track(index_no);
        playsong();
    }else{
        index_no=0;
        load_track(index_no);
        playsong();
    }
}
function previous_song(){
    if(index_no>0){
        index_no-=1;
        load_track(index_no);
        playsong();
    }else{
        index_no=ALL_SONG.length;
        load_track(index_no);
        playsong();
    }
}