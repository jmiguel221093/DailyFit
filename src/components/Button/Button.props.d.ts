import type { ViewStyle, TextStyle } from 'react-native';

export interface ButtonProps {
    /**
     * Text to be displayed inside the button
     */
    text: string;
    /**
     * Sets the button with primary style
     */
    primary?: boolean;
    /**
     * Sets the button with clean style
     */
    clean?: boolean;
    /**
     * Sets the button with destructive style
     */
    destructive?: boolean;
    /**
     * Shows the button as a link
     */
    link?: boolean;
    /**
     * Buttons sizes
     */
    size?: 'small' | 'regular' | 'large';
    /**
     * Disables the button
     */
    disabled?: boolean;
    /**
     * Function to be executed when the button is pressed
     */
    onPress?: () => void;
    /**
     * Styles object to be applied to the container of the button
     */
    style?: ViewStyle;
    /**
     * Styles object to be applied to the text of the button
     */
    textStyle?: TextStyle;
}
