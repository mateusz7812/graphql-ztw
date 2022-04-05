import { todosAll, todoById, todosByUserID } from './api/todo.js';
import { usersAll, userById } from './api/users.js';

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
    }