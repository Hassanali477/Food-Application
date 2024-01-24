import {
   TOKEN, ADMINTOKEN, USER, CARTITEMS, MYORDER

} from '../constants';

export function userToken(token) {
    return {
        type: TOKEN,
        payload: token
    }
}
export function adminToken(admintoken) {
    return {
        type: ADMINTOKEN,
        payload: admintoken
    }
}
export function user(userObject) {
    return {
        type: USER,
        payload: userObject
    }
}
export function cartItems(cartitems){
    return{
        type:CARTITEMS,
        payload:cartitems
    }
}
export function myOrder(myorder){
    return{
        type: MYORDER,
        payload:myorder
    }
}





