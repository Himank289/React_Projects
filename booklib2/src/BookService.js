
import {reducer} from 'react';

//reducer function
const bookdao = (state,action)=>{

    switch(action.type)
    {
        case 'ADD':
            console.log('Add book action called..');
            return [ ...state,action.newbook]

        case 'GETALL':

        case 'DELETE':

        default:
            return state;

    }


}

export default bookdao;


