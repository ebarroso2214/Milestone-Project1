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
         startGame()
         
    })
    

}
function startGame () {
    function insertPlayer(){
        let x = 45
        let y = 40
        let dx = 0
        let dy = 0
        
        
        
        
        let hitbox = document.createElement('div')
        document.getElementById('character').appendChild(hitbox)
        hitbox.style.width = '50px'
        hitbox.style.height = '71px'
        hitbox.style.border = '2px solid black'
        hitbox.style.position = 'absolute'
        hitbox.style.left = y +'vw'
        hitbox.style.top = x +'vh'
        hitbox.className = 'hitbox'
            
        // hitbox.style.backgroundColor = 'black'
        // console.log(hitbox)
            
    
        let img = document.createElement('img')
        img.src = './assets/green-character/static.gif';
        document.getElementById('character').appendChild(img)
        // console.log(img)
        // console.log(img.parentElement)
        img.style.position = 'absolute'
        // img.style.left;
        // img.style.top;
        img.className = 'player'
        
        hitbox.append(img)

        function playerMovement(){

            
            
            document.addEventListener ('keydown', keyPressed)
            
            function keyPressed (e){
                if (e.key === 'w'){
                    hitbox.style.top = dx-- + x + 'vh'
                } else if (e.key === 's') {
                    hitbox.style.top = dx++ + x + 'vh'
                } else if (e.key === 'a'){
                    hitbox.style.left = dy-- + y + 'vw'
                } else if (e.key === 'd') {
                    hitbox.style.left = dy++ + y + 'vw'
                }
            }
        }
        playerMovement()
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

        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = '50px'
        npcHitbox.style.height = '71px'
        npcHitbox.style.border = '2px solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = '60vw'
        npcHitbox.style.top = '45vh'
        npcHitbox.className = 'hitbox'


        
    }
    insertPlayer()
    insertNPC1()
}
// insertPlayer()

