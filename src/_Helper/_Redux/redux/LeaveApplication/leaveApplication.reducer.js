import { DELETE_LEAVE, LOAD_APPLIED_LEAVES } from "./leaveApplication.type";


const INITIAL_STATE = {
    leaves: [],
    leave: {},
}

const appliedLeavesReducer = (state = INITIAL_STATE, action ) => {
    const {leaves} = state;
    const {type, payload} = action;
    switch (type) {
        case LOAD_APPLIED_LEAVES: 
        return {
            ...state,
            leaves: [ ...payload]
        };
        case DELETE_LEAVE:
            return {
                ...state,
                leaves: leaves.filter((leave) => leave.id !== payload.id)
            }

        default: 
        return state;
    }
}

export default appliedLeavesReducer;