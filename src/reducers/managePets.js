export let state;


export function managePets(state = { pets: [] }, action) {
    switch (action.type) {
        case 'ADD_PET':
          let copy = [...state.pets]
          copy.push(action.pet)
          return { pets: copy }
        case 'REMOVE_PET':
          let cop = state.pets.filter(pet => pet.id !== action.id)
          return { pets: cop }
        default: 
          return state;
    }
}

export function dispatch(action) {
    state = managePets(state, action)
    render()
}

export function render(){
  const container = document.getElementById('container')
  const list = state.pets.map(pet => `<li>${pet.name}</li>`).join(' ')
  container.innerHTML = `<ul>${list}</ul>`
}

