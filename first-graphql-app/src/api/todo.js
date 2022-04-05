import axios from "axios";


export async function todoById(todo_id){
    return axios.get("https://jsonplaceholder.typicode.com/todos/" + todo_id)
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
    return axios.get("https://jsonplaceholder.typicode.com/todos")
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
    return axios.get("https://jsonplaceholder.typicode.com/users/" + user_id + "/todos")
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