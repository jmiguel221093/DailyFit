import chroma from 'chroma-js';
import type { colorsFoundations as Colors } from '../foundations';

type Intensity =
    | 'default'
    | '10'
    | '20'
    | '30'
    | '40'
    | '50'
    | '60'
    | '70'
    | '80'
    | '90'
    | '100';
type ColorName = keyof typeof Colors;

/**
 *  The intensity of a color type.
 */
export type Color = {
    [key in Intensity]: string;
};

/**
 * Generates a color palette from a given color object.
 *
 *  @typedef {Object} ColorPalette
 * @property {Color} colorName - The color property, one of ("black" | "white" | "primary" | "secondary" | "success" | "danger" | "highlight" | "warning").
 *  @property {Intensity} intensity - The intensity property, one of ("default" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100").
 */
export type ColorPalette = {
    [colorName in ColorName]?: {
        [intensity in Intensity]: string;
    };
};

/**
 * This functions generates a color palette based on the colors object
 *
 * @param {Colors} colors  - An object of colors
 * @returns {ColorPalette}  - An object of colors with intensity values
 */
export function colorPaletteGenerator(colors: typeof Colors): ColorPalette {
    let palette: ColorPalette = {}; // Create an empty ColorPalette object

    const colorsArray: string[] = Object.keys(colors); // Get the keys of the colors object as an array to build the ColorPalette object
    colorsArray.forEach((color) => {
        const colorScaleLight = chroma.scale([
            colors[color as keyof typeof Colors],
            colors.white,
        ]); // Create a chroma scale with the color and white
        const colorScaleDark = chroma.scale([
            colors[color as keyof typeof Colors],
            colors.black,
        ]); // Create a chroma scale with the color and black
        switch (color) {
            case 'white':
                palette = {
                    ...palette,
                    [color as keyof typeof Colors]: {
                        default: colors.white,
                    },
                };
                break;
            case 'primary':
            case 'secondary':
                palette = {
                    ...palette,
                    [color]: {
                        default: colors[color],
                        '20': colorScaleLight(0.8).hex(),
                        '40': colorScaleLight(0.6).hex(),
                        '60': colorScaleLight(0.4).hex(),
                        '80': colorScaleLight(0.2).hex(),
                    },
                }; // Add the colors primary and secondary to the ColorPalette object
                break;
            case 'black':
                palette = {
                    ...palette,
                    [color as keyof typeof Colors]: {
                        default: colors[color],
                        '90': colorScaleLight(0.1).hex(),
                        '80': colorScaleLight(0.2).hex(),
                        '70': colorScaleLight(0.3).hex(),
                        '60': colorScaleLight(0.4).hex(),
                        '50': colorScaleLight(0.5).hex(),
                        '40': colorScaleLight(0.6).hex(),
                        '30': colorScaleLight(0.7).hex(),
                        '20': colorScaleLight(0.8).hex(),
                        '10': colorScaleLight(0.9).hex(),
                    },
                }; // Add the color black to the ColorPalette object
                break;
            default:
                palette = {
                    ...palette,
                    [color]: {
                        default: colors[color as keyof typeof Colors],
                        '90': colorScaleDark(0.1).hex(),
                        '80': colorScaleDark(0.2).hex(),
                        '70': colorScaleDark(0.3).hex(),
                        '60': colorScaleDark(0.4).hex(),
                        '40': colorScaleLight(0.6).hex(),
                        '30': colorScaleLight(0.7).hex(),
                        '20': colorScaleLight(0.8).hex(),
                        '10': colorScaleLight(0.9).hex(),
                    },
                }; // Add the rest of feedback colors to the ColorPalette object
                break;
        }
    });
    return palette;
}
