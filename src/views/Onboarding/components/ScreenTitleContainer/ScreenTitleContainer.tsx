import { View } from 'react-native';

import { Icon, Padding, Text, Button } from '../../../../components';

import { OnboardingStyles } from '../../../../styles';

import type { ScreenTitleContainerProps } from './ScreenTitleContainer.props';

const ScreenTitleContainer = ({ title, onSkip }: ScreenTitleContainerProps) => (
    <Padding paddingHorizontal="extraLoose">
        <View style={OnboardingStyles.header}>
            <View style={OnboardingStyles.screenTitleContainer}>
                <Icon name="Settings" />
                <Text type="title" style={OnboardingStyles.screenTitle}>
                    {title}
                </Text>
            </View>
            {onSkip && (
                <Button
                    size="small"
                    text="Saltar"
                    icon="ChevronRight"
                    onPress={onSkip}
                />
            )}
        </View>
    </Padding>
);

export default ScreenTitleContainer;
