import { View } from 'react-native';
import type { ViewStyle } from 'react-native';

import type { IconActionProp } from '../../types';

import { Container } from '../Container';
import { Text } from '../Text';
import { Margin } from '../Margin';
import { HeaderActions } from '../HeaderActions';

import Styles from './Screen.styles';
import type { ScreenProps } from './Screen.props';

const Screen = ({
    children,
    title,
    navigation,
    headerPrimaryAction,
    headerSecondaryAction,
    headerExtraContent,
    containerStyle,
    ...rest
}: ScreenProps) => {
    const canGoBack = navigation && navigation.canGoBack();
    let containerStyles: ViewStyle = {};
    if (canGoBack) {
        containerStyles = { ...containerStyles, ...Styles.containerComponent };
    }
    if (containerStyle) {
        containerStyles = { ...containerStyles, ...containerStyle };
    }

    const primaryActionHeader: IconActionProp =
        headerPrimaryAction ||
        /* eslint-disable no-extra-parens */
        (canGoBack && {
            icon: 'ChevronLeft',
            onPress: () => {
                navigation.goBack();
            },
        });

    return (
        <View style={Styles.screenContainer}>
            <Container {...rest} style={containerStyles}>
                {title && (
                    <Margin marginBottom="extraLoose">
                        <Text type="displayLarge">{title}</Text>
                    </Margin>
                )}
                {children}
            </Container>
            {canGoBack && (
                <HeaderActions
                    primaryAction={primaryActionHeader}
                    secondaryAction={headerSecondaryAction}
                    extraContent={headerExtraContent}
                    fixed
                />
            )}
        </View>
    );
};

export default Screen;
