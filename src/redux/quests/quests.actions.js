import {QuestsActionTypes} from './quests.types'

export const addQuant = (quant) => ({
    type: QuestsActionTypes.ADD_QUANT,
    payload: quant
})

export const addQuests = (quests) => ({
    type: QuestsActionTypes.ADD_QUESTS,
    payload: quests
})

export const removeQuests = (quests) => ({
    type: QuestsActionTypes.REMOVE_QUESTS,
    payload: quests
})

export const updateQuest = (quests) => ({
    type: QuestsActionTypes.SET_QUEST,
    payload: quests
})