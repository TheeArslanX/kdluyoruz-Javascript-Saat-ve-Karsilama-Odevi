let info = document.querySelector("#myName")
let userName = prompt("Lütfen Adınızı Giriniz!")
info.innerHTML+= `${userName}`

function tarihsaat(){
    let  date = new Date().toLocaleString('tr-TR'); 
    document.getElementById('myClock').innerHTML=date
}

setInterval(tarihsaat, 1000);