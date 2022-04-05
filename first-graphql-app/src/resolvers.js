import { todoAll, todoById, todoByUserID } from './api/todo.js';
import { usersAll, userById } from './api/users.js';

export const resolvers = {
        Query: {
            users: async () => usersAll(),
            todos: async () => todoAll(),
            todo: async (parent, args, context, info) => todoById(parent, args, context, info),
            user: (parent, args, context, info) => userById(parent, args, context, info),
        },
        User: {
            todos: async (parent, args, context, info) => todoByUserID(parent.id)
        },
        ToDoItem:{
            user:  (parent, args, context, info) => {
                return usersAll().find(u => u.id == parent.user_id);
            }
        },
    }