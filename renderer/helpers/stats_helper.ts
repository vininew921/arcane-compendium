export const stringifiedNumber = (n: number): string => {
    if (n > 0) {
        return `+${n}`;
    }

    return `${n}`;
};
