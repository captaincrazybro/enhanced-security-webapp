import { writable } from "svelte/store";
import { POST } from "./api";

export const logged_in = writable(false)
const users = [
    {
        username: "cqptain",
        password: "testing123",
        id: 38588
    },
    {
        username: "admin",
        password: "adminop",
        id: 29134
    }
]

/**
 * 
 * @param {String} username 
 * @param {String} password 
 * @returns {Boolean}
 * @description Handles the login form
 */
export function login(username, password) {
    let login = await POST("/login", {
        username: username,
        password: password
    })
    let json = await login.json()

    if (json.type == 'ERROR') return { success: false, message: login.message }
    else {
        localStorage.setItem("token", json.data.token)
        return { success: true, message: json.message }
    }
}

/**
 * 
 * @param {String} username 
 * @returns {Object}
 * @description Finds a user from the username
 * @deprecated
 */
function getUser(username) {
    let user = users.find(u => u.username == username)
    return user
}