/**
 * This loader simply ensures that images work with next/image and export.
 * They will not be optimized, but this is okay for me.
 */
export default function stupidLoader(
    {
        src,
        width,
        quality,
    }: {
        src: string,
        width: number,
        quality?: number,
    }
) {
    return src;
}