const initState = {
    users: [
        {
            id: 1,
            name: "John",
            key: 0
        },
        {
            id: 2,
            name: "Doe",
            key: 1
        },
        {
            id: 3,
            name: "Foo",
            key: 2
        },
        {
            id: 4,
            name: "Bar",
            key: 3
        }
    ]
};

function reducer(state = initState, action) {
    let users = [...state.users];
    const updateKeys = (items) => {
        return items.map((item, key) => {
            let entity = {...item};
            entity.key = key;
            return entity;
        });
    }
    let userIndx = -1; 
    switch (action.type) {
        case 'users.add':
            users.push(action.payload.user);
            break;
        case 'users.update':
            userIndx = users.findIndex((user) => user.id === action.payload.user.id);
            if (userIndx >= 0) {
                users[userIndx] = action.payload.user;
            }
            break;
        case 'users.delete':
            userIndx = users.findIndex((user) => user.id === action.payload.user_id);
            if (userIndx >= 0) {
                users.slice(userIndx, 1);
            }
            break;
        default:
            // special for eslint   
    }
    users = updateKeys(users);
    return { users };
}

export default reducer;