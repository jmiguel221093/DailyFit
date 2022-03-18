export default {
    GetStarted: {
        title: 'Bienvenido a DailyFit',
        description:
            'Mide tus progresos día con día, DailyFit irá contigo hasta lograr tus metas.',
        buttons: {
            facebook: 'Continuar con Facebook',
            google: 'Continuar con Google',
            apple: 'Continuar con Apple',
            createAccount: 'Crear una cuenta',
        },
        caption: '¿Ya tienes una cuenta?',
        signIn: 'Iniciar sesión',
    },
    Registration: {
        title: 'Registro',
        fields: {
            continueButton: 'Continuar',
            labels: {
                fullName: 'Nombre completo',
                birthdate: 'Fecha de nacimiento',
                gender: 'Género',
                username: 'Nombre de usuario',
                email: 'Corre electrónico',
                password: 'Contraseña',
            },
            placeholders: {
                fullName: 'ej. Juan López',
                birthdate: 'dd/mm/aaaa',
                username: 'ej. juan.lopez',
                email: 'ej. correo@mail.com',
                password: 'Escribe tu contraseña',
            },
        },
        dateField: {
            selectDateButton: 'Seleccionar fecha',
            cancelDateButton: 'Cancelar',
        },
        genderField: {
            options: {
                male: {
                    label: 'Hombre',
                },
                female: {
                    label: 'Mujer',
                },
            },
        },
    },
    Login: {
        title: 'Iniciar sesión',
        fields: {
            email: 'ej. correo@mail.com',
            password: 'Escribe aquí tu contraseña',
        },
        forgotPassword: {
            caption: '¿Olvidé mi contraseña?',
        },
    },
    Home: {
        greetings: 'Hola,\n$.name 👋🏻',
        sections: {
            metricsSection: {
                title: 'Medidas',
            },
            weightSection: {
                title: 'Peso',
            },
        },
    },
    NutritionalPlan: {
        tabs: {
            diet: {
                title: 'Dieta',
                key: 'diet',
            },
            routine: {
                title: 'Rutina',
                key: 'routine',
                exercises: {
                    sets: {
                        singular: 'serie',
                        plural: 'series',
                    },
                    reps: {
                        singular: 'repetición',
                        plural: 'repeticiones',
                    },
                },
            },
        },
    },
    MenuForm: {
        title: {
            new: 'Crear menú',
            edit: 'Editar menú',
        },
        fields: {
            time: {
                label: 'Horario',
                placeholder: 'ej. Desayuno',
            },
            content: {
                label: 'Contenido del menú',
                placeholder: 'ej. Una taza de café',
            },
        },
        actions: {
            save: 'Guardar menú',
            cancel: 'Cancelar',
        },
    },
};
