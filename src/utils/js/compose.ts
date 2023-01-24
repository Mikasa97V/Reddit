export function compose<U>(...fns: Function[]) {
    return <E, >(initialValue: any): U =>
        fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}
