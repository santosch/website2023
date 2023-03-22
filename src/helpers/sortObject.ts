export default function sortObject(
    object: Record<string, number>
): Record<string, number> {
    return Object.fromEntries(
        Object.entries(object)
            .sort(
                (a, b) => {
                return a[1] - b[1];
            }
        )
    );
}