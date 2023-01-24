export function pick<K extends string>(prop: K) {
    return <O extends Record<K, any>>(obj: O) => obj[prop];
}
