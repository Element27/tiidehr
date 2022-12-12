export const getRefreshToken = ()=> {
    const tokens = JSON.parse(localStorage.getItem("token")); //It returns access and refresh tokens

    const refreshToken = tokens[1];
    
    

    return refreshToken;
    
}
