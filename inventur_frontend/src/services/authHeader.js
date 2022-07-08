/**returns the required header */

export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));
    /** when logged in */
    if(user){
        return {Authorization: 'Bearer ' + user, 'Access-Control-Allow-Origin': '*'};
    }
    /**when not logged in */
    else {
        return {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
    }
}