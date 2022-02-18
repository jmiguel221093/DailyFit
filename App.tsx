import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';

import { Navigator } from './src/navigation';

import { color } from './src/styles';
import { fontsStack } from './src/utils';

/**
 *  @returns {symbol} - Returns the main app component
 */
export default function App() {
    const [fontsLoaded] = useFonts(fontsStack);
    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <>
            <SafeAreaView
                style={{
                    backgroundColor: color('black'),
                }}
            >
                <StatusBar style="auto" />
            </SafeAreaView>
            <Navigator />
        </>
    );
}
