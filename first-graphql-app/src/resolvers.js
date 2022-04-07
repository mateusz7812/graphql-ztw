import { todosAll, todoById, todosByUserID , addTodoToUser, deleteTodoById, editTodoById} from './api/todo.js';
import { usersAll, userById, addNewUser, editUserById, deleteUserById } from './api/users.js';

export const resolvers = {
        Query: {
            users: () => usersAll(),
            todos: () => todosAll(),
            todo: (parent, args, context, info) => todoById(args.id),
            user: (parent, args, context, info) => userById(args.id),
        },
        User: {
            todos: (parent, args, context, info) => todosByUserID(parent.id)
        },
        ToDoItem:{
            user:  (parent, args, context, info) => userById(parent.user_id)
        },
        Mutation: {
            addUser: (parent, args, context, info) => addNewUser({
                name: args.name,
                email: args.email,
                login: args.login
            }),
            editUser: (parent, args, context, info) => editUserById({
                id: args.id,
                name: args.name,
                email: args.email,
                login: args.login
            }), 
            deleteUser: (parent, args, context, info) => deleteUserById(args.id),
            addTodo: (parent, args, context, info) => addTodoToUser({
                title: args.title, 
                completed: args.completed, 
                user_id: args.user_id
            }),
            editTodo: (parent, args, context, info) => editTodoById({
                id: args.id,
                title: args.title, 
                completed: args.completed, 
                user_id: args.user_id
            }), 
            deleteTodo: (parent, args, context, info) => deleteTodoById(args.id),
        }
    }
