/**
 * @param [length=30] The length of the array, default 30
 * @param [min=0] Minimum value, default 0
 * @param [max = 100] Maximum value, default 100
 * @param [sort=false] Return a sorted array or NOT, default: FALSE
 * @param [allowDuplicate=true] Allow duplicated values or NOT, defult: TRUE
 */
export function getNumericArray(length: number = 30, min: number = 0, max: number = 100, sort: boolean = false, allowDuplicate: boolean = true) {
    let arr: number[] = [];
    while(arr.length < length) {
        let num: number = Math.floor(Math.random() * max);
        num *= (min < 0 && (Math.floor(Math.random() * 100)) % 2 == 0) ? -1 : 1;
        if(num >= min && num <= max) {
            if(allowDuplicate || (!allowDuplicate && !arr.includes(num))) arr.push(num);
        }
    }
    if(sort) arr.sort((a: number, b: number) => a - b);
    return arr;
}