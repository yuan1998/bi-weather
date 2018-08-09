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
export const setCitys = ({ data = null , newData }) => {

    if(!data && !newData)
        return false;

    if(data === null && newData ){
        data = getCitys();
        data.unshift(newData);
    }

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
    return setCitys({data});
}

/**
 * delete city .
 * @param index {Number} city array index.
 * @returns {*}
 */
export const deleteCity = (index) => {
    let data = getCitys();
    if(!data[index])
        return false;

    data.splice(index ,1);
    return setCitys({data});
}


/**
 * set active city index.
 * @param index {Number} city arr index .
 */
export const setActiveCity = index =>
{
    let len = getCitys().length;
    if(!(index >= 0 && index <= len-1))
        return false;
    wepy.setStorageSync('BI_ACTIVE', index);
    return true;
}


/**
 *  get current active city index.
 * @param _ {Empty} null
 * @returns {*|number} return current index or zero.
 */
export const getActiveCity = _ => {
    return wepy.getStorageSync('BI_ACTIVE') || 0;
}