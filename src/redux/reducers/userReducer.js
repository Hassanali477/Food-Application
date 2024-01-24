import {
 TOKEN, USER, ADMINTOKEN, CARTITEMS, MYORDER

} from '../constants';

const initialState = {
    user: {},
    token: null,
    admintoken: null,
    cartitems: [],
    myorder: [],
   
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOKEN:
            return {
                ...state,
                token: action.payload
            };
        case USER:
            return {
                ...state,
                user: action.payload
            };


        case ADMINTOKEN:
            return {
                ...state,
                admintoken: action.payload
            }
            case CARTITEMS:
                return{
                    ...state,
                    cartitems:action.payload
                }
                case MYORDER:
                return{
                    ...state,
                    myorder:action.payload
                }
             default:
            return state;
    }
}
export default userReducer;