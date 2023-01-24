export function isEqual<T>(left: T) {
    return <E extends T>(right: E) => left === right;
}
