export function getNumericArray(length: number = 30, min: number = 0, max: number = 100, sort: boolean = false) {
    let arr: number[] = [];
    while(arr.length < length) {
        let num: number = Math.floor(Math.random() * max);
        num *= (min < 0 && (Math.random() * 100) % 2 == 0) ? -1 : 1;
        if(num >= min && num <= max) arr.push(num);
    }
    if(sort) arr.sort((a: number, b: number) => a - b);
    return arr;
}