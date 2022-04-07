import axios from "axios";
import { ADDRESS } from "./consts.js";


export async function todoById(todo_id){
    return axios.get(ADDRESS + "/todos/" + todo_id)
            .then(
                todo => {
                    console.log(todo);
                    return {
                        id: todo.data.id,
                        title: todo.data.title,
                        completed: todo.data.completed,
                        user_id: todo.data.userId,
                    }    
                }
            )
}

export async function todosAll(){
    return axios.get(ADDRESS + "/todos")
            .then(
                (todos) => {
                    console.log(todos);
                    return todos.data.map(
                        ({ id, title, completed, userId }) => (
                            {
                                id: id,
                                title: title,
                                completed: completed,
                                user_id: userId,
                            }
                        )
                    )
                }
            )
}

export async function todosByUserID(user_id){
    return axios.get(ADDRESS + "/users/" + user_id + "/todos")
    .then(
        (todos) => {
            console.log(todos);
            return todos.data.map(
                ({ id, title, completed, userId }) => (
                    {
                        id: id,
                        title: title,
                        completed: completed,
                        user_id: userId,
                    }
                )
            )
        }
    )
}

export async function addTodoToUser({title, completed, user_id}){
    return axios.post(ADDRESS + '/todos', {
            title: title,
            completed: completed,
            userId: user_id
        })
        .then(todo => {
            console.log(todo);
            return {
                id: todo.data.id,
                title: todo.data.title,
                completed: todo.data.completed,
                user_id: todo.data.userId,
            }    
        })
        .catch(function (error) {
            console.log(error);
        });
}

export async function editTodoById({id, title, completed, user_id}){
    return axios.put(ADDRESS + '/todos/' + id, {
            title: title,
            completed: completed,
            userId: user_id
        })
        .then(todo => {
            console.log(todo);
            return {
                id: todo.data.id,
                title: todo.data.title,
                completed: todo.data.completed,
                user_id: todo.data.userId,
            }    
        })
        .catch(function (error) {
            console.log(error);
        });
}

export async function deleteTodoById(todo_id){
    return axios.delete(ADDRESS + "/todos/" + todo_id)
            .then(
                todo => {
                    console.log(todo.status);
                    return { deleted: true }; 
                }
            )
}