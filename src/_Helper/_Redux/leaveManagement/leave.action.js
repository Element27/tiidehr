import { LOAD_LEAVE_POLICIES } from "./leave.type"

export const loadLeavePolicies = (leavesArray) =>( dispatch )=> {
    dispatch({type: LOAD_LEAVE_POLICIES, payload: leavesArray})
}