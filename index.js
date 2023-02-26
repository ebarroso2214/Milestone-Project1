window.onload = function createMenu(){ //This function will create a menu on page startup.
    let menu = document.getElementById("menuMessage")
    menu.textContent = "Your job as a player is to help win the World Cup in the 90th minute! But how do you do it? Easy, all you have to do is make it to the other end of the map to score the goal using WASD to move! But be sure to avoid the other players and the outer zone! Are you ready?"

    let menuHeader =  document.getElementById('menuHeader')
    menuHeader.textContent = "The Last Minute Winner"

    let button = document.getElementById("button")
    button.textContent = "Let's do this!"
     

    removeMenu(button, mainMenu, 'menuMessage')
    
    return
}



let mainMenu;
let tryAgain;
let loserMenu;
function winnerMessage(){
    let button = document.createElement('button')
    button.className = 'button'
    winnerMenu = document.getElementsByClassName('winnerMenu')
    winnerMenu[0].appendChild(button)
    button.style.position = 'absolute'
    button.style.width = '15vw'
    button.style.height = '10vh' 
    button.style.top = '10vh'
    button.style.left = '42.5vw'
    button.textContent = "You did it! You scored! Try Again? Click here"
    button.style.fontSize = "20px"
    button.style.fontWeight = "bold"
    button.style.border = '4px solid black'
    button.style.borderRadius = '15px 15px 15px 15px'
    button.style.backgroundColor = "rgb(83, 83, 83)"

    button.addEventListener('click', function (){
        document.getElementsByClassName
        button.remove()
        startGame()
    })
}

function loserMessage(){
    let button = document.createElement('button')
    button.className = 'button'
    loserMenu = document.getElementsByClassName('loserMenu')
    loserMenu[0].appendChild(button)
    button.style.position = 'absolute'
    button.style.width = '15vw'
    button.style.height = '10vh' 
    button.style.top = '10vh'
    button.style.left = '42.5vw'
    button.textContent = "You lost the ball! Try Again? Click here"
    button.style.fontSize = "20px"
    button.style.fontWeight = "bold"
    button.style.border = '4px solid black'
    button.style.borderRadius = '15px 15px 15px 15px'
    button.style.backgroundColor = "rgb(83, 83, 83)"
    

    button.addEventListener('click', function (){
        document.getElementsByClassName
        button.remove()
        startGame()
    })
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
        hitbox.style.width = 2.6 +'vw'
        hitbox.style.height = 8 +'vh'
        // hitbox.style.border = '0.15vw solid black'
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
             //event listener for keydown for specific keys
            

            function keyPressed (e){
                 
                if (e.key === 'w'){ 
                    hitbox.style.top = dx-- + x + 'vh'
                    img.src = './assets/green-character/north.gif'
                } else if (e.key === 's' ) {
                    hitbox.style.top = dx++ + x + 'vh'
                    img.src = './assets/green-character/south.gif'
                } else if (e.key === 'a'){
                    hitbox.style.left = dy-- + y + 'vw'
                    img.src = './assets/green-character/west.gif'
                } else if (e.key === 'd') {
                    hitbox.style.left = dy++ + y + 'vw'
                    img.src = './assets/green-character/east.gif'
                } 
                
                collisionDetect()

            }
            
        }
        playerMovement()

        
    }

    


// These are just repetitve functions to insert the img of the npc and the hitboxes. 

    function insertNPC1(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 57+'vw'
        npcHitbox.style.top = 60+'vh'
        npcHitbox.className = 'npcHitbox1'
        document.querySelector('.npcHitbox1').appendChild(img)

        
    }

    function insertNPC2(){
 
        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 65+'vw'
        npcHitbox.style.top = 49+'vh'
        npcHitbox.className = 'npcHitbox2'
        
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'
 
        document.querySelector('.npcHitbox2').appendChild(img)

        
    }

    function insertNPC3(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 57+'vw'
        npcHitbox.style.top = 80+'vh'
        npcHitbox.className = 'npcHitbox3'
        document.querySelector('.npcHitbox3').appendChild(img)

        
    }

    function insertNPC4(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 58+'vw'
        npcHitbox.style.top = 10+'vh'
        npcHitbox.className = 'npcHitbox4'
        document.querySelector('.npcHitbox4').appendChild(img)

        
    }

    function insertNPC5(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        // console.log(img)
        // console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 70+'vw'
        npcHitbox.style.top = 24+'vh'
        npcHitbox.className = 'npcHitbox5'
        document.querySelector('.npcHitbox5').appendChild(img)

        
    }

    function insertNPC6(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        // console.log(img)
        // console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 78+'vw'
        npcHitbox.style.top = 40+'vh'
        npcHitbox.className = 'npcHitbox6'
        document.querySelector('.npcHitbox6').appendChild(img)

        
    }

    function insertNPC7(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 78+'vw'
        npcHitbox.style.top = 60+'vh'
        npcHitbox.className = 'npcHitbox7'
        document.querySelector('.npcHitbox7').appendChild(img)

        
    }

    function insertNPC8(){
        let img = document.createElement('img')
        img.src = './assets/red-character/static.gif';
        document.getElementById('character').appendChild(img)
        console.log(img)
        console.log(img.parentElement)
        img.style.position = 'absolute'


        let npcHitbox = document.createElement('div')
        document.getElementById('character').appendChild(npcHitbox)
        npcHitbox.style.width = 2.5 +'vw'
        npcHitbox.style.height = 7 +'vh'
        // npcHitbox.style.border = '0.15vw solid black'
        npcHitbox.style.position = 'absolute'
        npcHitbox.style.left = 50+'vw'
        npcHitbox.style.top = 40+'vh'
        npcHitbox.className = 'npcHitbox8'
        document.querySelector('.npcHitbox8').appendChild(img)

        
    }
    

    insertPlayer()
    insertNPC1()
    insertNPC2()
    insertNPC3()
    insertNPC4()
    insertNPC5()
    insertNPC6()
    insertNPC7()
    insertNPC8()

    

    function collisionDetect (){ //hard coded all the properties due to lack of time and some complications
        let playerHitbox = document.querySelector('.hitbox') //looks for classes pertaining to respective hitboxes
        let style = getComputedStyle(playerHitbox) //turns css properties into a string
        let x1 = parseInt(style.top) //make the properties for top left width and height into integers for all respective hitboxes
        let y1 = parseInt(style.left)
        let width = parseInt(style.width)
        let height = parseInt(style.height)
        console.log(x1, y1,width,height)

        let npcHitbox1 = document.querySelector('.npcHitbox1') 
        let npc1Style = getComputedStyle(npcHitbox1)
        let npcX1 = parseInt(npc1Style.top)
        let npcY1 = parseInt(npc1Style.left)
        let npc1Width = parseInt(npc1Style.width)
        let npc1Height = parseInt(npc1Style.height)

        let npcHitbox2 = document.querySelector('.npcHitbox2')
        let npc2Style = getComputedStyle(npcHitbox2)
        let npcX2 = parseInt(npc2Style.top)
        let npcY2 = parseInt(npc2Style.left)
        let npc2Width = parseInt(npc2Style.width)
        let npc2Height = parseInt(npc2Style.height)

        let npcHitbox3 = document.querySelector('.npcHitbox3')
        let npc3Style = getComputedStyle(npcHitbox3)
        let npcX3 = parseInt(npc3Style.top)
        let npcY3 = parseInt(npc3Style.left)
        let npc3Width = parseInt(npc3Style.width)
        let npc3Height = parseInt(npc3Style.height)

        let npcHitbox4 = document.querySelector('.npcHitbox4')
        let npc4Style = getComputedStyle(npcHitbox4)
        let npcX4 = parseInt(npc4Style.top)
        let npcY4 = parseInt(npc4Style.left)
        let npc4Width = parseInt(npc4Style.width)
        let npc4Height = parseInt(npc4Style.height)

        let npcHitbox5 = document.querySelector('.npcHitbox5')
        let npc5Style = getComputedStyle(npcHitbox5)
        let npcX5 = parseInt(npc5Style.top)
        let npcY5 = parseInt(npc5Style.left)
        let npc5Width = parseInt(npc5Style.width)
        let npc5Height = parseInt(npc5Style.height)

        let npcHitbox6 = document.querySelector('.npcHitbox6')
        let npc6Style = getComputedStyle(npcHitbox6)
        let npcX6 = parseInt(npc6Style.top)
        let npcY6 = parseInt(npc6Style.left)
        let npc6Width = parseInt(npc6Style.width)
        let npc6Height = parseInt(npc6Style.height)

        let npcHitbox7 = document.querySelector('.npcHitbox7')
        let npc7Style = getComputedStyle(npcHitbox7)
        let npcX7 = parseInt(npc7Style.top)
        let npcY7 = parseInt(npc7Style.left)
        let npc7Width = parseInt(npc7Style.width)
        let npc7Height = parseInt(npc7Style.height)

        let npcHitbox8 = document.querySelector('.npcHitbox8')
        let npc8Style = getComputedStyle(npcHitbox8)
        let npcX8 = parseInt(npc8Style.top)
        let npcY8 = parseInt(npc8Style.left)
        let npc8Width = parseInt(npc8Style.width)
        let npc8Height = parseInt(npc8Style.height)

        let collisionBorder1 = document.querySelector('#collision')
        let borderStyle1 = getComputedStyle(collisionBorder1)
        let border1X = parseInt(borderStyle1.top)
        console.log(border1X)

        let collisionBorder2 = document.querySelector('#collision2')
        let borderStyle2 = getComputedStyle(collisionBorder2)
        let border2X = parseInt(borderStyle2.top)
        // let border2width = parseInt(borderStyle2.width)
        
        let collisionBorder3 = document.querySelector('#collision3')
        let borderStyle3 = getComputedStyle(collisionBorder3)
        let border3Y = parseInt(borderStyle3.left)

        let collisionBorder4 = document.querySelector('#collision4')
        let borderStyle4 = getComputedStyle(collisionBorder4)
        let border4Y = parseInt(borderStyle4.left)

        let goalBorder = document.querySelector('#goal')
        let goalStyle = getComputedStyle(goalBorder)
        let goalX = parseInt(goalStyle.top)
        let goalY = parseInt(goalStyle.left)
        let goalWidth = parseInt (goalStyle.width)
        let goalHeight = parseInt(goalStyle.height)
        // this is collision for the border of the map, the map is also buggy but still works
        if (x1 <= border1X || x1 >= border2X  || y1 <= border3Y || y1 >= border4Y){
            console.log('collided')
            
            playerHitbox.remove()
            
            loserMessage()

            
        // these are the properties for the collision on the npcs and the goal, it's still buggy and the detection isn't 100% correct, this just looks at the x coordinates, y coordinates, width, and lengths and compares them to see if they are crossing within one another
        } else if (x1 + width >= goalX && x1 <= goalX + goalWidth && y1 + height >= goalY && y1 <= goalY + goalHeight){
            playerHitbox.remove()
            console.log('colliding')
            winnerMessage()
        } else if (x1 + width >= npcX1 && x1 <= npcX1 + npc1Width && y1 + height >= npcY1 && y1 <= npcY1 + npc1Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX2 && x1 <= npcX2 + npc2Width && y1 + height >= npcY2 && y1 <= npcY2 + npc2Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX3 && x1 <= npcX3 + npc3Width && y1 + height >= npcY3 && y1 <= npcY3 + npc3Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX4 && x1 <= npcX4 + npc4Width && y1 + height >= npcY4 && y1 <= npcY4 + npc4Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX5 && x1 <= npcX5 + npc5Width && y1 + height >= npcY5 && y1 <= npcY5 + npc5Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX6 && x1 <= npcX6 + npc6Width && y1 + height >= npcY6 && y1 <= npcY6 + npc6Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX7 && x1 <= npcX7 + npc7Width && y1 + height >= npcY7 && y1 <= npcY7 + npc7Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }else if (x1 + width >= npcX8 && x1 <= npcX8 + npc8Width && y1 + height >= npcY8 && y1 <= npcY8 + npc8Height){
            console.log('colliding')
            playerHitbox.remove()
            
            loserMessage()
        }

    }
    // collisionDetect()
}


