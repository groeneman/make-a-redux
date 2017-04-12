function randomId() {
  return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}

export default (action, state) => {
  if(action.type === 'STORE_INIT') {
    return { state: [] }
  }

  if(action.type === 'ADD_TODO') {
    return [ ...state, { name: action.payload, id: randomId() } ]
  }

  if(action.type === 'REMOVE_TODO') {
    return state.filter(todo => action.payload != todo.id)
  }

  return state
}
