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
    
    btn.addEventListener('click', function() { //event listener for button being clicked
         param1 = document.getElementById(id)
         param1.parentElement.remove() //deletes menu entirely
         startGame() //invokes the super function startGame that has all the games properties held within it
         
    })
    

}
function startGame () {
    let x = 45
    let y = 40
    let dx = 0
    let dy = 0
    let hitbox;
    function insertPlayer(){ 
        hitbox = document.createElement('div') // assigns variable hitbox to create a div element
        document.getElementById('character').appendChild(hitbox) //adds hitbox to character section in document.
        hitbox.style.width = 2.5 +'vw'
        hitbox.style.height = 8 +'vh'
        hitbox.style.border = '0.15vw solid black'
        hitbox.style.position = 'absolute'
        hitbox.style.left = y +'vw'
        hitbox.style.top = x +'vh'
        hitbox.className = 'hitbox'      //adjust properties of hitbox
        
        let img = document.createElement('img') //inserts the image for character
        img.src = './assets/green-character/static.gif';
        document.getElementById('character').appendChild(img)
        img.style.position = 'absolute'
        img.className = 'player'
        
        hitbox.append(img) //appends img to hitbox
        

        

        

        
        function playerMovement(){
           let playerMoves = document.addEventListener ('keydown', keyPressed,false)
             //event listener for keydown
            

            function keyPressed (e){
                 
                if (e.key === 'w' && movement === true){ 
                    hitbox.style.top = dx-- + x + 'vh'
                } else if (e.key === 's' ) {
                    hitbox.style.top = dx++ + x + 'vh'
                } else if (e.key === 'a'){
                    hitbox.style.left = dy-- + y + 'vw'
                } else if (e.key === 'd') {
                    hitbox.style.left = dy++ + y + 'vw'
                }
                
                collisionDetect()

            }
            
        }
        playerMovement()

        // return hitbox
    }

    let movement = true




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
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 60+'vw'
        npcHitbox.style.top = 45+'vh'
        npcHitbox.className = 'npcHitbox'
        

        
    }
    insertPlayer()
    insertNPC1()


   

    

    function collisionDetect (){ //
        let playerHitbox = document.querySelector('.hitbox')
        let style = getComputedStyle(playerHitbox)
        let x1 = parseInt(style.top)
        let y1 = parseInt(style.left)
        let width = parseInt(style.width)
        let height = parseInt(style.height)
        console.log(x1, y1,width,height)

        let collisionBorder = document.querySelector('#collision')
        // console.log(collisionBorder)
        let borderStyle1 = getComputedStyle(collisionBorder)
        let borderX = parseInt(borderStyle1.top)
        console.log(borderX)

        if (x1 <= borderX ){
            console.log('collided')
            movement = false
            hitbox.style.top = 0
            playerMoves = false
 
        }


    }
    // collisionDetect()
}


