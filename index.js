window.onload = function createMenu(){ //This function will create a menu on page startup.
    let menu = document.getElementById("menuMessage")
    menu.textContent = "Your job as a player is to help win the World Cup in the 90th minute! But how do you do it? Easy, all you have to do is make it to the other end of the map to score the goal using WASD to move! But be sure to avoid the other players! Are you ready?"

    let menuHeader =  document.getElementById('menuHeader')
    menuHeader.textContent = "The Last Minute Winner"

    let button = document.getElementById("button")
    button.textContent = "Let's do this!"
     

    removeMenu(button, mainMenu, 'menuMessage')
    
    return
}

let mainMenu;


function winnerMessage(){

}

function loserMessage(){

}



function removeMenu(btn, param1, id){
    
    btn.addEventListener('click', function() {
         param1 = document.getElementById(id)
         console.log(param1)
         console.log(param1.parentElement)
         param1.parentElement.remove()
         insertPlayer()
         insertNPC1()
         
    })
    

}

function insertPlayer(){
    let img = document.createElement('img')
    img.src = './assets/green-character/static.gif';
    document.getElementById('character').appendChild(img)
    console.log(img)
    console.log(img.parentElement)
    img.style.position = 'absolute'
    img.style.left= '40vw';
    img.style.top= '45vh';
}

function insertNPC1(){
    let img = document.createElement('img')
    img.src = './assets/red-character/static.gif';
    document.getElementById('character').appendChild(img)
    console.log(img)
    console.log(img.parentElement)
    img.style.position = 'absolute'
    img.style.left= '60vw';
    img.style.top= '45vh';
}



// insertPlayer()

