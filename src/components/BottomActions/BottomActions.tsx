import { BlurView } from 'expo-blur';

import { Button } from '../Button';

import Styles from './BottomActions.styles';
import type { BottomActionsProps } from './BottomActions.props';

const BottomActions = ({
    content,
    open,
    primaryAction,
    secondaryAction,
}: BottomActionsProps) =>
    open ? (
        <BlurView
            intensity={20}
            tint="dark"
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                top: 0,
                justifyContent: 'flex-end',
                padding: 16,
            }}
        >
            {content}
            {primaryAction && (
                <Button
                    text={primaryAction.text}
                    primary
                    onPress={primaryAction.onPress}
                    style={Styles.primaryAction}
                />
            )}
            {secondaryAction && (
                <Button
                    text={secondaryAction.text}
                    onPress={secondaryAction.onPress}
                />
            )}
        </BlurView>
    ) : (
        <></>
    );

export default BottomActions;
