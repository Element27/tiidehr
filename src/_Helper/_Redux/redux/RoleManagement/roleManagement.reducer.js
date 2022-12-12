import { DELETE_ROLE, LOAD_CREATED_ROLES, CREATE_ROLE } from "./roleManagement.type";


const INITIAL_STATE = {
    roles: [],
    role:{}
}

const RoleManagementReducer = (state = INITIAL_STATE, action ) => {

    const {roles} = state;
    const {type, payload} = action;

    switch (type) {

        case LOAD_CREATED_ROLES: 
console.log("serv ", roles)
        return {
            ...state,
            roles:  payload,
        };

        case CREATE_ROLE:
        return {
            ...state,
            roles: [...roles, payload]
        }
        case DELETE_ROLE:
            return {
                ...state,
                roles: state.roles.filter((role) => role.roleId !== payload.roleId)
            }

        default: 
        return state;
    }
}

export default RoleManagementReducer;