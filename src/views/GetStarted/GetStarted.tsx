import { Container, Text, Margin, Button, Layout } from '../../components';
import { Locales, Screens } from '../../utils';

import GradientBackground from './GradientBackground';
import { GetStartedStyles } from '../../styles';

import type { ViewProp } from '../../types';

const GetStarted = ({ navigation }: ViewProp) => {
    const handleCreateAccount = () => {
        navigation.navigate(Screens.registration);
    };
    return (
        <>
            <GradientBackground />
            <Container style={GetStartedStyles.container}>
                <Text type="displayLarge">
                    {Locales.StringsES.GetStarted.title}
                </Text>
                <Margin marginTop="regular" marginBottom="regular">
                    <Text>{Locales.StringsES.GetStarted.description}</Text>
                </Margin>
                <Margin marginTop="regular">
                    <Button text={Locales.StringsES.GetStarted.buttons.apple} />
                    <Button
                        text={Locales.StringsES.GetStarted.buttons.google}
                        style={GetStartedStyles.googleButtonContainer}
                        textStyle={GetStartedStyles.googleButtonText}
                    />
                    <Button
                        text={Locales.StringsES.GetStarted.buttons.facebook}
                        style={GetStartedStyles.facebookButton}
                    />
                    <Button
                        text={
                            Locales.StringsES.GetStarted.buttons.createAccount
                        }
                        primary
                        onPress={handleCreateAccount}
                    />
                    <Layout direction="row" align="center" justify="center">
                        <Margin marginRight="extraTight">
                            <Text
                                type="caption"
                                align="center"
                                style={GetStartedStyles.caption}
                            >
                                {Locales.StringsES.GetStarted.caption}
                            </Text>
                        </Margin>
                        <Button
                            text={Locales.StringsES.GetStarted.signIn}
                            link
                            textStyle={GetStartedStyles.signInLink}
                        />
                    </Layout>
                </Margin>
            </Container>
        </>
    );
};

export default GetStarted;
