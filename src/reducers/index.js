import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
        return Object.assign({}, state.items, {
            items: [...state.items, {
                id: action.item.id,
                name: action.item.name
            }]
        });
    }
    else if (action.type === UPDATE_ITEM) {
        state.items.map((list, index) => {
            if(parseInt(list.id,2) === parseInt(action.item.id,2)) {
                return Object.assign({}, state, {
                    items: state.items.map((item,index) => {
                        item.id === action.item.id ? action.item : item
                    })
                });
            }
        });
    }
    else if (action.type === DELETE_ITEM) {
        
        return Object.assign({}, state, {items: state.items.filter(item => item.id !== action.item.id)})

    }
    return state;
};
