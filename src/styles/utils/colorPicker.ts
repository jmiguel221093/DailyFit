import { colorsFoundations as Colors } from '../foundations';
import { colorPaletteGenerator } from './colorPaletteGenerator';
import type {
    ColorPalette,
    Color as ColorObject,
} from './colorPaletteGenerator';

type Color = keyof typeof Colors;
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

/**
 * Returns a color code for a given color and intensity.
 *
 * @param {string} color - The color property, one of ("black" | "white" | "primary" | "secondary" | "success" | "danger" | "highlight" | "warning").
 * @param {string} intensity - The intensity property, one of ("default" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100").
 * @returns {(string | undefined)} - The color code.
 */
const colorPicker = (
    color: Color,
    intensity: Intensity = 'default'
): string | undefined => {
    const colorPalette: ColorPalette = colorPaletteGenerator(Colors);
    const colorNames = Object.keys(colorPalette);
    if (!colorPalette[color]) {
        throw new Error(
            `${color} is not a valid color. Available colors are: ${colorNames.join(
                ', '
            )}`
        );
    }
    const pickedColor: ColorObject | undefined = colorPalette[color];
    if (pickedColor && !pickedColor[intensity]) {
        throw new Error(
            `${intensity} is not a valid intensity. Available intensities are: ${Object.keys(
                pickedColor
            ).join(', ')}`
        );
    }
    return pickedColor ? pickedColor[intensity] : undefined;
};

export default colorPicker;
