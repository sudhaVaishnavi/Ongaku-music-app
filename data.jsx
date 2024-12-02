// src data.jsx
import song1 from  "./images/1_RUN.jpg"
import song2 from  "./images/2_favorite.jpeg"
import song3 from  "./images/3_alibi.jpg"
import song4 from  "./images/4_myohmy.jpeg"
import song5 from  "./images/5_letTheWorldBurn.jpeg"
import song6 from  "./images/6_sway.jpeg"
import song7 from  "./images/7_chericherilady.jpeg"
import song8 from  "./images/8_IwannaBe.jpeg"
import song9 from  "./images/9_escapism.jpeg"
import song10 from  "./images/10_dinero.jpeg"
import song11 from  "./images/11_friends.jpeg"
import song12 from  "./images/12_criminal.jpeg"
import song13 from  "./images/13_thriller.jpeg"
import song14 from  "./images/14_smoothCriminal.jpeg"
import song15 from  "./images/15_BillieJean.jpg"
import song16 from  "./images/16_HipsDontLie.jpg"
import song17 from  "./images/17_older.jpg"
import song18 from  "./images/18_chanakya.jpg"
import song19 from  "./images/19_sitar.jpg"
import audio1 from  "./audio/1Run.mp3"
import audio2 from  "./audio/2favorite.mp3"
import audio3 from  "./audio/3ALIBI.mp3"
import audio4 from  "./audio/4MyOhMy.mp3"
import audio5 from  "./audio/5LETTHEWORLDBURN.mp3"
import audio6 from  "./audio/6.mp3"
import audio7 from  "./audio/7.mp3"
import audio8 from  "./audio/8.mp3"
import audio9 from  "./audio/9.mp3"
import audio10 from  "./audio/10.mp3"
import audio11 from  "./audio/11.mp3"
import audio12 from  "./audio/12.mp3"
import audio13 from  "./audio/13.mp3"
import audio14 from  "./audio/14.mp3"
import audio15 from  "./audio/15.mp3"
import audio16 from  "./audio/16.mp3"
import audio17 from  "./audio/17.mp3"
import audio18 from  "./audio/18.mp3"
import audio19 from  "./audio/19.mp3"
//Make array of objects
//* we are recreating Data that we get from a backend engineer
const songs = [
    {
        title:"RUNRUNRUN",
        singer:"Dutch Melrose",
        img: song1,
        id:1,
        url: audio1,
    },
    {
        title:"Chanakya",
        singer:"Rishab Rikikhiram Sharma",
        img: song18,
        id: 18,
        url: audio18,
    }, 
    {
        title:"Favorite",
        singer:"Isabel Larosa",
        img: song2,
        id:2,
        url: audio2,
    }, 
    {
        title:"Alibi",
        singer:"Ella Henderson",
        img: song3,
        id:3,
        url: audio3,
    },
    {
        title:"My Oh My",
        singer:"Camila Cabello",
        img: song4,
        id:4,
        url: audio4,
    },
    {
        title:"Let the world burn",
        singer:"Chris Grey",
        img: song5,
        id:5,
        url: audio5,
    },
    {
        title:"Sitar Cover",
        singer:"Rishab Rikikhiram Sharma",
        img: song19,
        id: 19,
        url: audio19,
    },
    {
        title:"Sway",
        singer:"Michael Buble",
        img: song6,
        id:6,
        url: audio6,
    },
    {
        title:"Cheri Cheri Lady",
        singer:"Thomas Anderson",
        img: song7,
        id:7,
        url: audio7,
    },
    {
        title:"I wanna be your slave",
        singer:"Maneskin",
        img: song8,
        id:8,
        url: audio8,
    },
    {
        title:"Escapism",
        singer:"Raye",
        img: song9,
        id:9,
        url: audio9,
    },
    {
        title:"Dinero",
        singer:"Trinidad Cardona",
        img: song10,
        id:10,
        url: audio10,
    },
    {
        title:"FRIENDS",
        singer:"Anne-Marie and Marshmello",
        img: song11,
        id:11,
        url: audio11,
    },
    {
        title:"Criminal",
        singer:"Britney Spears",
        img: song12,
        id:12,
        url: audio12,
    },
    {
        title:"Thriller",
        singer:"Micheal Jackson",
        img: song13,
        id:13,
        url: audio13,
    },
    {
        title:"Smooth Criminal",
        singer:"Micheal Jackson",
        img: song14,
        id:14,
        url: audio14,
    },
    {
        title:"Billie Jean",
        singer:"Micheal Jackson",
        img: song15,
        id:15,
        url: audio15,
    },
    {
        title:"Hips Don't lie",
        singer:"Shakira",
        img: song16,
        id:16,
        url: audio16,
    },
    {
        title:"Older",
        singer:"Isabel LaRosa",
        img: song17,
        id:17,
        url: audio17,
    },
    


] 
    export default songs;