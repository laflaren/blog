// select all elements 
const form = document.querySelector('#new-item-form')

const list = document.querySelector('#list')

const input = document.querySelector('#item-input')



// when I submit form, add a new element 
form.addEventListener('submit', e => {
    e.preventDefault()

    console.log(input.value)



// create new item 

const item = document.createElement('div')
item.innerText = input.value
item.classList.add('list-item')

// add item to list 
list.appendChild(item)


// clear input
input.value = ""

// setup event listened to delete item when clicked.
item.addEventListener('click', () => {
    item.remove()
})

})