// auth.js

const users = [];

// Function for registering a new user
function register(username, password) {
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        throw new Error('User already exists');
    }
    const newUser = { username, password };
    users.push(newUser);
    return newUser;
}

// Function for user login
function login(username, password) {
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        throw new Error('Invalid username or password');
    }
    return 'Login successful';
}

module.exports = { register, login };
