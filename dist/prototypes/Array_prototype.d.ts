interface Array<T> {
    getLastElement(): string;
    getFirstElement(): string;
    getMiddleElement(): Array<T> | null;
}
