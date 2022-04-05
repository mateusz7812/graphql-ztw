import axios from "axios";


export async function todoById(parent, args, context, info){
    return axios.get("https://jsonplaceholder.typicode.com/todos/" + args.id)
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

export async function todoAll(){
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

export async function todoByUserID(){
    return todoAll().then(todos => todos.filter(t => t.user_id == user_id));
}