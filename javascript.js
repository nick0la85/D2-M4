
const eminem = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=eminem")
        .then((response) => response.json())
        .then((jsoneminem) => {
            let section = document.getElementById("eminemSection")
            let id=document.getElementById("eminem")
            id.classList.remove("d-none")
            let song = jsoneminem.data.slice(0, 4)
            song.forEach(element => {
                const music = element;
                section.innerHTML += `<div class='col col-3-xl col-6 mb-1'> <img class='w-100' src='${music.album.cover_xl}'/> </div>`
            });
        })
        .catch((err) => console.log("Error detected: ", err))

}
eminem()


const queen = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
        .then((response) => response.json())
        .then((jsoneminem) => {
            let section = document.getElementById("queenSection")
            let id=document.getElementById("queen")
            id.classList.remove("d-none")
            let song = jsoneminem.data.slice(0, 4)
            song.forEach(element => {
                const music = element;
                section.innerHTML += `<div class='col col-3-xl col-6 mb-1'> <img class='w-100' src='${music.album.cover_xl}'/> </div>`
            });
        })
        .catch((err) => console.log("Error detected: ", err))

}
queen()


const metallica= () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=metallica")
        .then((response) => response.json())
        .then((jsoneminem) => {
            let section = document.getElementById("metallicaSection")
            let id=document.getElementById("metallica")
            id.classList.remove("d-none")
            let song = jsoneminem.data.slice(0, 4)
            song.forEach(element => {
                const music = element;
                section.innerHTML += `<div class='col col-3-xl col-6 mb-1'> <img class='w-100' src='${music.album.cover_xl}'/> </div>`
            });
        })
        .catch((err) => console.log("Error detected: ", err))

}
metallica()
