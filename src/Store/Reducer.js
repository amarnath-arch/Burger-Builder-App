// import * as actionTypes from './actions';

const initialState={
    ingredients: {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    TotalPrice: 4
};


const IngPrice = {
    salad: 0.5,
    cheese: 0.9,
    bacon: 1.1,
    meat: 2.3
};

const reducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case 'ADD_INGREDIENT':
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]+1
                },
                TotalPrice:state.TotalPrice+IngPrice[action.ingredientName]
            };
        case 'REMOVE_INGREDIENT':
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]:state.ingredients[action.ingredientName]-1
                },
                TotalPrice:state.TotalPrice-IngPrice[action.ingredientName]
                };
    }
    return state;
}


export default reducer;