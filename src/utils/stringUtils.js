
/**
 * Strip tags and trim a given string.
 * 
 * @param {string} string 
 * @param {int} length 
 */
export const trim = (string, length) => {
    length = length || 200;
    return string.replace(/(<([^>]+)>)/ig,"").substr(0, length)
}