export let state;


export function managePets(state = { pets: [] }, action) {
  switch (action.type) {

    case 'ADD_PET':
      return {...state, pets: [...state.pets, {name: action.pet.name, species: action.pet.species, id: action.pet.id }]}

    case 'REMOVE_PET':
      const petIndex = state.pets.findIndex((pet) => pet.id === action.id)
      const newPets = [...state.pets]
      newPets.splice(petIndex, 1)
      return {...state, pets: newPets}



    default:
      return state;
  }
}


export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  // const PetsRender = state.pets.map((pet) => `<li>${pet.name}</li>`).join("\n")
  const PetsRender = state.pets.map((pet) => `<li>${pet.name}</li>`).join(' ')
  const Container = document.querySelector("#container")
  // Container.innerHTML =`
  //   <ul>
  //     ${PetsRender}
  //   </ul>`
  Container.innerHTML =`<ul>${PetsRender}</ul>`

}
