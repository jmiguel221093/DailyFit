import { Locales, Regex } from '../../../utils';

import type { InputFieldProps } from '../components';

const inputs: InputFieldProps[] = [
    {
        id: 'fullName',
        label: Locales.StringsES.Registration.fields.labels.fullName,
        placeholder:
            Locales.StringsES.Registration.fields.placeholders.fullName,
        autoCompleteType: 'name',
        autoCapitalize: 'words',
        keyboardType: 'default',
        textContentType: 'name',
        validation: Regex.personName,
    },
    {
        id: 'birthdate',
        label: Locales.StringsES.Registration.fields.labels.birthdate,
        placeholder:
            Locales.StringsES.Registration.fields.placeholders.birthdate,
        type: 'date',
    },
    {
        id: 'gender',
        label: Locales.StringsES.Registration.fields.labels.gender,
        type: 'screen-option',
        options: [
            {
                label: Locales.StringsES.Registration.genderField.options.male
                    .label,
                value: 'M',
                icon: 'MaleGender',
            },
            {
                label: Locales.StringsES.Registration.genderField.options.female
                    .label,
                value: 'F',
                icon: 'FemaleGender',
            },
        ],
    },
    {
        id: 'username',
        label: Locales.StringsES.Registration.fields.labels.username,
        placeholder:
            Locales.StringsES.Registration.fields.placeholders.username,
        autoCompleteType: 'username',
        autoCapitalize: 'none',
        keyboardType: 'default',
        textContentType: 'username',
        validation: Regex.username,
    },
    {
        id: 'email',
        label: Locales.StringsES.Registration.fields.labels.email,
        placeholder: Locales.StringsES.Registration.fields.placeholders.email,
        autoCompleteType: 'email',
        autoCapitalize: 'none',
        keyboardType: 'email-address',
        textContentType: 'emailAddress',
        validation: Regex.email,
    },
    {
        id: 'password',
        label: Locales.StringsES.Registration.fields.labels.password,
        placeholder:
            Locales.StringsES.Registration.fields.placeholders.password,
        autoCompleteType: 'off',
        autoCapitalize: 'none',
        keyboardType: 'default',
        textContentType: 'password',
        secureTextEntry: true,
        validation: Regex.password,
    },
];

export default inputs;
