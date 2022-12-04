//This is where the business logic will be initiated
//Here, We wil create our store which will contain our initial state, the store will also contain our reducer/logic
//Finally, We export it to our rootReducer

import { LOAD_LEAVE_POLICIES } from "./leave.type";

const INITIAL_STATE = {
    leaves: [],
    leave: {},
}

const leaveManagementReducer = (state = INITIAL_STATE, action ) => {
    const {leaves} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_LEAVE_POLICIES: 
        return {
            ...state,
            leaves: [ ...payload]
        };

        default: 
        return state;
    }
}

export default leaveManagementReducer;