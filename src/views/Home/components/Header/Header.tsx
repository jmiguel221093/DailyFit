import { Layout, Text, Thumbnail, Padding } from '../../../../components';
import { Locales } from '../../../../utils';

import type { HeaderProps } from './Header.props';

const Header = ({ avatar, userName }: HeaderProps) => (
    <Padding paddingHorizontal="regular">
        <Layout justify="space-between" align="center" direction="row">
            <Layout.Item flex={1}>
                <Text type="displayLarge">
                    {Locales.StringsES.Home.greetings.replace(
                        '$.name',
                        userName
                    )}
                </Text>
            </Layout.Item>
            {avatar && (
                <Thumbnail
                    source={{
                        uri: avatar,
                    }}
                />
            )}
        </Layout>
    </Padding>
);

export default Header;
