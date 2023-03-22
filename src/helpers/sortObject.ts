export default function sortObject(
    object: Record<string, number>
): Record<string, number> {
    return Object.fromEntries(
        Object.entries(object)
            .sort(
                (a, b) => {
                return b[1] - a[1];
            }
        )
    );
}