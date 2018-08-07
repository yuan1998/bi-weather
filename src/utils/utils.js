/**
 * @Description: utils file . get citys , get config.
 * @author Yuan !998🤓🤓
 * @date 2018/8/7 
*/

import wepy from 'wepy'


/**
 * get storage citys .
 * @returns {*|Array} return storage data . or empty array;
 */
export const getCitys  = () => {
    return wepy.getStorageSync('BI_CITYS') || [];
}

/**
 * set city data to storage .
 * @param data {Array} city data array.
 * @returns {*} sync result.
 */
export const setCitys = (data) => {
    return wepy.setStorageSync('BI_CITYS',data);
}


/**
 * change storage one row.
 * @param index {Number} array index.
 * @param newData {Object} new data object.
 * @returns {*} sync result.
 */
export const changeCity = (index , newData) => {
    let data = getCitys();
    data[index] = newData;
    return setCitys(data);
}


export const deleteCity = (index) => {
    let data = getCitys();
    data.splice(index ,1);
    return setCitys(data);
}