export let state;

export function managePets(state = { pets: [] }, action){
  console.log(state)
  if(action.type === 'ADD_PET'){
    return {
      pets: [...state.pets, action.pet],
    }
  }else if(action.type === 'REMOVE_PET'){
    return {
      pets: state.pets.filter(p => p.id !== action.id)
    }
  }
  return state
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const result = state.pets.map(p => `<li>${p.name}</li>`)
  document.getElementById('container').innerHTML = `<ul>${result.join(" ")}</ul>`
}
