import { writable } from "svelte/store";

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

export function login(username, password) {
    let user = getUser(username)

    if (!user) return null
    else if (user.password != password) return false
    else {
        logged_in.set(true)
        return true
    }
}

function getUser(username) {
    let user = users.find(u => u.username == username)
    return user
}