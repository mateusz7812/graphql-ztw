import axios from "axios";

export async function userById(user_id){
    return axios.get("https://jsonplaceholder.typicode.com/users/" + user_id)
            .then(
                user => {
                    console.log(user);
                    return {
                        id: user.data.id,
                        name: user.data.name,
                        email: user.data.email,
                        login: user.data.username,
                    }    
                }
            )
}

export async function usersAll(){
    return axios.get("https://jsonplaceholder.typicode.com/users")
            .then(
                (users) => {
                    console.log(users);
                    return users.data.map(
                        ({ id, name, email, username }) => (
                            {
                                id: id,
                                name: name,
                                email: email,
                                login: username,
                            }
                        )
                    )
                }
            )
}