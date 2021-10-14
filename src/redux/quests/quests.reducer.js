import {QuestsActionTypes} from './quests.types'
import {addQuestsUtils} from './quests.utils'

const INITIAL_STATE ={
    questsList: [],

    quant : 0
}

    /*
    Na lista deve ter varios objetos que serão cada pergunta
    Dessa forma :
    {
        Categoria, Dificuldade, Tipo, Questão,
        Lista de respostas,
        Resposta escolhida,
        Status
    }
    */

const questsReducer = (state =  INITIAL_STATE, action) => {

    switch (action.type){

        // adicionar quantidade
        case QuestsActionTypes.ADD_QUANT:
            return {
                ...state,
                quant : action.payload
            }

        // adicionar questões (objetos)
        case QuestsActionTypes.ADD_QUESTS:
            return {
                ...state,
                questsList: addQuestsUtils([] ,action.payload)
            }

        // remover questões (objetos)
        case QuestsActionTypes.REMOVE_QUESTS:
            return {
                ...state,
                quant: 0,
                questsList: []
            }

        // quando a quest for respondida, deve alterar o objeto
        case QuestsActionTypes.SET_QUEST:
            return {
                ...state,
                questsList: action.payload
            }

        //retorno padrão
        default:
            return state
    }
}

export default questsReducer