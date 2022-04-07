import axios from "axios";
import { ADDRESS } from "./consts.js";

export async function userById(user_id){
    return axios.get(ADDRESS + "/users/" + user_id)
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
    return axios.get(ADDRESS + "/users")
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

export async function addNewUser({name, email, login}){
    return axios.post(ADDRESS + '/users', {
            name: name,
            email: email,
            username: login
        })
        .then(user => {
            console.log(user);
            return {
                id: user.data.id,
                name: user.data.name,
                email: user.data.email,
                login: user.data.username,
            }      
        })
        .catch(function (error) {
            console.log(error);
        });
}

export async function editUserById({id, name, email, login}){
    return axios.put(ADDRESS + '/users/' + id, {
            name: name,
            email: email,
            username: login
        })
        .then(user => {
            console.log(user);
            return {
                id: user.data.id,
                name: user.data.name,
                email: user.data.email,
                login: user.data.username,
            }      
        })
        .catch(function (error) {
            console.log(error);
        });
}


export async function deleteUserById(user_id){
    return axios.delete(ADDRESS + "/users/" + user_id)
            .then(
                user => {
                    console.log(user.status);
                    return { deleted: true }; 
                }
            )
}