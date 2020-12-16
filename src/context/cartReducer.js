const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            if(!state.some(productId=>productId===action.payload)){
                alert('The product has been added to the cart')
                // console.log(`state is ${state} and action ${action.payload}`);
                return [...state,action.payload]


            }
            else{
                alert("Item already in the cart");
                return state;
            }
        case 'ReMOVE_FROM_CART':
            state=state.filter(productId=>productId!==action.payload);
            return state;
        default:
            return state
    }
}
export default cartReducer;