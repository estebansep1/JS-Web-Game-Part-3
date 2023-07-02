function newImage(url, left, bottom){
    let image = document.createElement('img')
    image.src = url
    document.body.append(image)
    return image
}

move(newImage('assets/green-character.gif')).to(100, 250)
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)

function move(url, left, bottom) {
    image.style.position = 'fixed'
    image.style.position = left + 'px'
    image.style.bottom = bottom + 'px'
}

function move(image){
    image.style.position = 'fixed'
    
    function moveToCoordinates(left, bottom){
        image.style.left = left + 'px'
        image.style.bottom = bottom + 'px'

    }

    return {
        to: moveToCoordinates
    }
}

function newItem(url, left, bottom){
    let item = newImage(url, left, bottom)
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}

let sword = newItem('assets/sword.png')
move(sword).to(500, 555)
let shield = newItem('assets/shield.png')
move(shield).to(165, 335)
let staff = newItem('assets/staff.png')
move(staff).to(600, 250)

function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.position = 'fixed'
    inventory.style.bottom = '0px';
    inventory.style.left = '0px'
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    document.body.append(inventory)
    return inventory
}

const inventory = newInventory()