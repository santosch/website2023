
export default function sortObjectAsPyramid(
    object: Record<string, number>
): Record<string, number> {

    const arr = Object.entries(object);
    if (!arr.length) {
        return object;
    }

    const newArr: Array<[string, number]> = [];

    // sort numerically
    arr.sort((a, b) => {
        return b[1] - a[1];
    });

    // add center entry
    newArr.push(arr.shift()!)

    // add rest alternating at the beginning and at the end
    arr.forEach((entry, index) => {
        if (index % 2 === 0) {
            newArr.unshift(entry);
        } else {
            newArr.push(entry);
        }
    });

    return Object.fromEntries(newArr);
}