import { Dimensions, PixelRatio } from 'react-native';

const WINDOW_WIDTH: number = Dimensions.get('window').width;
const guideLineBaseWidth = 428;

export const scaleSize = (size: number): number =>
    (WINDOW_WIDTH / guideLineBaseWidth) * size;
export const scaleFont = (size: number): number =>
    size / PixelRatio.getFontScale();

/**
 *
 * @param {string} hex  - A hex color code
 * @param {number} alpha The alpha value of the color
 * @returns {string} The rgba color code
 */
export function hexToRGBA(hex: string, alpha = 1) {
    /* eslint-disable @typescript-eslint/no-explicit-any*/
    let c: any;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        /* eslint-disable no-bitwise */
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
            ','
        )}, ${alpha})`;
    }
    throw new Error('Bad Hex');
}
