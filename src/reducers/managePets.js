export let state;


export function managePets(state = {pets: []}, action){
  console.log("state:", state);
  switch (action.type) {
    case "ADD_PET":
      return state.pets = {pets: [...state.pets, {name: action.pet.name, species: action.pet.species, id: action.pet.id}]}
    case "REMOVE_PET":
      const removalIndex = state.pets.findIndex(pet => pet.id === action.id)
      return Object.assign({}, state, {
       pets: [
         ...state.pets.slice(0, removalIndex),
         ...state.pets.slice(removalIndex + 1)
       ]
      });
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export const render = () => {
  let container = document.getElementById('container');
  let petsList = state.pets.map((pet) => {
    return `<li>${pet.name}</li>`;
  }).join(' ');
  container.innerHTML = `<ul>${petsList}</ul>`;
}


////////////////////////////USE THIS IN THE REMOVE ////////////////////////////

// case "REMOVE_PET":
//   const petIndex = state.pets.findIndex(pet => pet.id === action.id);
//   return {
//     ...state,
//     pets: [
//       ...state.pets.slice(0, petIndex),
//       ...state.pets.slice(petIndex + 1)
//     ]
//   };
