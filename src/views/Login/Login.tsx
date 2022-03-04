import { useState } from 'react';

import { Screen, TextField, Margin, Button, Layout } from '../../components';
import type { ViewProp } from '../../types';
import { Locales } from '../../utils';

import { LoginStyles } from '../../styles';

const Login = ({ navigation }: ViewProp) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <Screen navigation={navigation} title={Locales.StringsES.Login.title}>
            <Margin marginBottom="extraLoose">
                <TextField
                    label="Correo electrónico"
                    placeholder={Locales.StringsES.Login.fields.email}
                    size="large"
                    autoCompleteType="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextField
                    label="Contraseña"
                    placeholder={Locales.StringsES.Login.fields.password}
                    size="large"
                    autoCompleteType="off"
                    autoCapitalize="none"
                    keyboardType="default"
                    textContentType="password"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                />
                <Button text="Iniciar sesión" primary />
                <Layout direction="row" align="center" justify="center">
                    <Button
                        text={Locales.StringsES.Login.forgotPassword.caption}
                        link
                        textStyle={LoginStyles.signInLink}
                    />
                </Layout>
            </Margin>
        </Screen>
    );
};

export default Login;
