
const initialState = {
  botaoClicado: false
};


export default function( action, state = initialState) {
  switch(action.type) {
    case 'XX_XXX': {
        const newState = { ...state };
        newState.botaoClicado = !newState.botaoClicado;
        return newState;
      }
    default:
      return state;
  }
}
