"use strict";

// add whatever parameters you deem necessary & write docstring

//should take 2 array of various lengths;
//first array contains keys
//second array contains values
//returns obj created from keys and values
//if not enough values, keys = null
// if not enough keys, no values


/**function takes two arrays(keys, values) and returns an object of the keys and values
 * if more keys, set extra keys to null
 * if more values, do not include
 * returns object
 */

function twoArrayObject(keys, values) {
    const keysAndValues = {};

    for(let i = 0; i < keys.length; i++) {
        keysAndValues[keys[i]] = (values[i] || null)
    }
    // for(let objKey in keysAndValues) {
    //     if(keysAndValues[objKey] === undefined) {
    //         keysAndValues[objKey] = null;
    //     }
    // }
    return keysAndValues;
}

// function twoArrayObject(keys, values) {
//     const keysAndValues = {}

//     for(let i = 0; i < keys.length; i++) {

//     }

// }

