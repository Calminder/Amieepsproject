/**
 *
 * @param {string} url
 * @param {object} options
 * @returns {Promise<any>}
 */
export async function loadJson (url,options){
    try {
        const response = await fetch( url, options);
        return response.json();
    }catch (e){
        throw e;
    }
}