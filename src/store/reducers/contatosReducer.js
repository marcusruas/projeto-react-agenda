const estadoInicial = {dados: []}

export default function(state = estadoInicial, action){
    switch(action.type){
        case 'OBTER_CONTATOS':
            return{ ...state, dados: action.payload }
        case 'REMOVER_CONTATO':
            console.log(action.payload)
            return{ ...state, dados: action.payload }
        default: 
            return state
    }
}