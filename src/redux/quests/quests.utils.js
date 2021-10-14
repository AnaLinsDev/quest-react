
export const addQuestsUtils = (list, listToAdd) => {

    for ( var i = 0 ; i < listToAdd.length ; i++ ){
      
        //pegará o objeto n posiçao
        const originalObject = listToAdd[i]

        // objeto generico mudando o id apenas
        const plusObject = {
          id: i,
          choosenAnswer: null,
          status: "ABERTO"
        }

        // junção dos 2 objetos em um
        const finalObject = Object.assign(originalObject, plusObject)

        // adiciona objeto final na lista
        list.push(finalObject)
  
      }
      return list
}
