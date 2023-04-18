

export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[TODO] Add todo': 
        return [ ...initialState, action.payload ]
        
        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload ); //me va a regresar los todo que no sea el id que yo le mande

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                // si el id y es igual al id del accion, esparzo todo el todo, regreso el nuevo todo, y cambio el id de la accion y cambio el done si estab en false pasa a true y visceversa
                if ( todo.id === action.payload ) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });

        default: 
            return initialState;
    }


}