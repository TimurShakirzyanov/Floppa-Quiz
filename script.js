// console.log(12);
// console.log("гыы");
// console.log("My name is ГЫЫ");
// console.log("animal");
// let animal="caracal";
// console.log(animal);
// console.log("Alena has "+animal);
// let hp=100;
// console.log("alena to lost "+hp+"hp")
// let Russia="17.075.200"н
// console.log("S Russia = "+Russia+"km2")
// let USA="9 525 067"
// console.log("S USA = "+USA+"km2")
// let China="9 598 962"
// console.log("S China = "+China+"km2");
// let Canada="9 984 670"
// console.log("S Canada = "+Canada+"km2");
// let Brazil="8 515 766"
// console.log("S Brazil = "+Brazil+"km2");
let hp = 3;
console.log(hp)
console.log("Шлёпа любит пельмени")
let secret = Math.floor(Math.random() * 11);
console.log(secret)
let playerInput = document.getElementById("playerInput")
console.log(playerInput)
let lives = document.getElementById("lives")
let okButton = document.getElementById("okButton")
let hint = document.getElementById("hint")
let title = document.getElementById("title")
let again = document.getElementById('again')
let clicker = 0
okButton.onclick = function (event) {
    // чтобы не обновлялась страница
    event.preventDefault();
    console.log(playerInput.value);
    if (playerInput.value == secret) {
        console.log("ПОБЕДА,ВЫ ОСВОБОДИЛИ ШЛЁПУ")
        document.body.style.backgroundImage = "url('spaceFloppaWin.jpg')"
        title.innerHTML = 'ПОБЕДА'
    }
    else {
        console.log("шаснсов на освобождение шлёпы стало меньше");
        hp = hp - 1
        if (  playerInput.value == "шлёпа"){
            hp = hp + 2
            }
        if (secret > playerInput.value) {
            hint.innerHTML = "секретное число больше"
        }
        else {
            hint.innerHTML = "секретное число меньше"
        }
        console.log(hp);
        lives.innerHTML = "ЖИЗНИ: " + hp
        if (hp < 1) {
            okButton.disabled = true
            document.body.style.backgroundImage = "url('spaceFloppaFail.jpg')"
            title.innerHTML = 'ВЫ НЕ СМОГЛИ СПАСТИ ШЛЁПУ'
            document.body.style.backgroundPosition = "center"
            hint.innerHTML = "СЕКРЕТНОЕ ЧИСЛО БЫЛО: " + secret
        }
        playerInput.select();
    }
}
again.onclick = function () {
    document.body.style.backgroundImage = "url('spaceFloppa.jpg')"
    title.innerHTML = 'УГАДАЙ ЧИСЛО'
    hp = 3
    lives.innerHTML = 'ЖИЗНИ: 3'
    okButton.disabled = false
    hint.innerHTML = 'Сразись с ИИ чтобы спасти шлёпу из инопланетного плена!!!'
    secret = Math.floor(Math.random() * 11);
    title.style.color = "white"
    clicker = 0
}
title.onclick = function () {
  clicker = clicker + 1
  console.log(clicker);
    if (clicker == 5) {
    title.style.color = "aqua"
    }     
}