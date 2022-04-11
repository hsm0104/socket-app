const users = [];

const addUser = ({id, name, email}) =>{
    name = name.trim().toLowerCase();
    email = email

    const existingUser = users.find((user) => user.name === name&&user.email === email);

    if(existingUser){
        return {error: "Username already taken"};
    }

    const user = {id, name, email};
    users.push(user);
    return {user}
}

const removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id);

    if(index !== -1){ //-1 : false, 1: true
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}


module.exports = {addUser, removeUser, getUser};