import config from '../../config.json'

/**
 * 
 * @param {String} endpoint 
 * @returns {String}
 * @description Formats the endpoing with the api url
 */
const url = (endpoint) => `${config.endpoint}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`

/**
 * 
 * @param {String} endpoint
 * @param {Object} body 
 * @returns {Object}
 * @description A function to send a GET resquest
 */
export const GET = (endpoint) => request(endpoint, 'GET')

/**
 * 
 * @param {String} endpoint 
 * @param {Object} body 
 * @returns {Object}
 * @description A function to send POST requests with body
 */
export const POST = (endpoint, body) => request(endpoint, 'POST', body)

/**
 * 
 * @param {String} endpoint 
 * @param {Object} body 
 * @returns {Object}
 * @description A function to send PUT requests with body
 */
export const PUT = (endpoint, body) => request(endpoint, 'PUT', body)

/**
 * 
 * @param {String} endpoint 
 * @param {Object} body 
 * @returns {Object}
 * @description A function to send DELETE requests with body
 */
export const DELETE = (endpoint, body) => request(endpoint, 'DELETE', )

/**
 * 
 * @param {String} endpoint 
 * @param {String} method 
 * @param {Object} body 
 * @returns {ObjectI}
 * @description A function to request from an endpoint
 */
function request(endpoint, method, body) {
    let params = {
        method: method
    }
    if (body) params.body = JSON.stringify(body)

    const response = await fetch(url(endpoint), params)
    const results = await response.json()

    return results
}