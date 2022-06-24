export default function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
        return {Authorization: 'Bearer ' + user};
    } else {
        return {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'};
    }
}