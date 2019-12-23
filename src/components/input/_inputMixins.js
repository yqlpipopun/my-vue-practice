const zeplinWidths = [80, 184, 392, 600, 1224]
const minusPaddingWidths = zeplinWidths.map((width) => {
    return `${width - 8 * 2}px`
})

export const widthMixins = {
    data: () => ({
        widths: minusPaddingWidths
    })
}