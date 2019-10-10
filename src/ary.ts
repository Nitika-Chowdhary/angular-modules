const findItem=(array, item) => array.indexOf(item);
const printArray=(array, str) => {
    let outputString='';
    for(let i=0; i<array.length; i++)
        outputString+=array[i]+str;
    return outputString
};
const sumOfArrayElements = array => {
    return array.reduce( (acc, val) => acc + val, 0);
};

export {printArray, findItem};
export default sumOfArrayElements;