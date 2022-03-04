import { Layout } from '../Layout';
import { IconButton } from '../IconButton';

import Styles from './HeaderActions.styles';
import type { HeaderActionsProps } from './HeaderActions.props';

const HeaderActions = ({
    primaryAction,
    secondaryAction,
    extraContent,
    fixed,
}: HeaderActionsProps) => {
    let layoutStyles = { ...Styles.layout };
    if (fixed) layoutStyles = { ...layoutStyles, ...Styles.fixed };
    return (
        <Layout
            direction="row"
            align="center"
            justify="space-between"
            style={layoutStyles}
        >
            {primaryAction && (
                <IconButton
                    icon={primaryAction.icon}
                    onPress={primaryAction.onPress}
                />
            )}
            {extraContent}
            {secondaryAction && (
                <IconButton
                    icon={secondaryAction.icon}
                    onPress={secondaryAction.onPress}
                />
            )}
        </Layout>
    );
};

export default HeaderActions;
