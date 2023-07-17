export interface IAlgorithm {
    complexity: TimeComplexity
}

export enum TimeComplexity {
    one = 'O(1)',
    n = 'O(n)',
    logn = 'O(log(n))',
    nlogn = 'O(nlog(n))',
    nsqr = 'O(n^2)',
    npk = 'O(n^k)'
}