import React, { useState } from 'react';

import './TeamForm.scss';
import PageDefault from '../../components/PageDefault/PageDefault';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { checkValidity, updateObject } from '../../utils/utils';
import FormFields from '../../components/FormFields/FormFields';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';

const TeamForm = () => {
    const [initialRegisterUserForm, ] = useState({
        formIsValid: false,
        fields: {
            teamName: {
                type: 'input',
                config: {
                    type: 'text',
                },
                class: 'inputStyle',
                label: 'Team name',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                placeholder: 'Insert team name'
            },
            description: {
                type: 'textarea',
                label: 'Description',
                value: '',
                validation: {
                    required: false
                },
                valid: false,
                touched: false,
                inputFocused: false
            },
            website: {
                type: 'input',
                config: {
                    type: 'url',
                },
                class: 'inputStyle',
                label: 'Team website',
                value: '',
                validation: {
                    required: true,
                    website: true
                },
                valid: false,
                touched: false,
                placeholder: 'http://website.com'
            },
            teamType: {
                type: 'radio',
                config: {
                    options: [
                        {value: 'real', label: 'Real'},
                        {value: 'fantasy', label: 'Fantasy'},
                    ]
                },
                label: 'Team type',
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            tag: {
                label: 'Tags',
                type: 'InputTag',
                value: ''
            },
            formation: {
                type: 'select',
                config: {
                    options: [
                        {value: '0', label: '3-2-2-3'},
                        {value: '1', label: '3-2-3-1'},
                        {value: '2', label: '3-4-3'},
                        {value: '3', label: '3-5-2'},
                        {value: '4', label: '4-2-3-1'},
                        {value: '5', label: '4-3-1-1'},
                        {value: '6', label: '4-3-2'},
                        {value: '7', label: '4-4-2'},
                        {value: '8', label: '4-5-1'},
                        {value: '9', label: '5-4-1'}
                    ]
                },
                label: 'Formation',
                class: 'inputStyle',
                value: '',
                validation: {
                    required: false
                },
                valid: true,
                touched: false
            },
            search: {
                type: 'input',
                config: {
                    type: 'text'
                },
                label: 'Search Players',
                value: '',
                validation: {
                    required: false
                },
                class: 'inputStyle',
                valid: true,
                toutched: false
            }
        }
    });
    const [registerUserForm, setRegisterUserForm] = useState({...initialRegisterUserForm});

    const renderFormTeam = () => {
        const inputArray = [];

        for (let key in registerUserForm.fields) {
            inputArray.push({
                id: key,
                config: registerUserForm.fields[key]
            });
        }

        return (
            <FormFields>
                {inputArray.map(input => (
                    <Input
                        key={input.id}
                        name={input.id}
                        className={input.config.class}
                        label={input.config.label}
                        type={input.config.type}
                        config={input.config.config}
                        value={input.config.value}
                        invalid={!input.config.valid}
                        shouldValidate={input.config.validation}
                        inputFocused={input.config.inputFocused}
                        placeholder={input.config.placeholder}
                        touched={input.config.touched}
                        changed={event => inputChangedHandler(event, input.id)}
                        focused={event => inputFocused(event, input.id)}
                        blured={event => inputBlured(event, input.id)} />
                ))}
            </FormFields>
        );
    }

    const saveTeam = event => {
        event.preventDefault();

        if (!registerUserForm.formIsValid) {
            changeAllFields('touched', true);
            return false;
        }

        const formData = {};

        // formData['id'] = teams.length + 1;

        for (let inputIdentifier in registerUserForm.fields) {
            formData[inputIdentifier] = registerUserForm.fields[inputIdentifier].value;
        }

        // dispatch(registerUser(formData));

        setRegisterUserForm({...initialRegisterUserForm});
    }

    const changeAllFields = (prop, value) => {
        let currentFormFields = {...registerUserForm.fields};

        for (let inputIdentifier in currentFormFields) {
            const updatedInput = updateObject(currentFormFields[inputIdentifier], {
                [prop]: value
            });

            currentFormFields = updateObject(currentFormFields, {
                [inputIdentifier]: updatedInput
            });
        }

        setRegisterUserForm({
            fields: currentFormFields,
            formIsValid: registerUserForm.formIsValid
        });
    }

    const inputFocused = (event, inputIdentifier) => {
        const updatedInput = updateObject(registerUserForm.fields[inputIdentifier], {
            inputFocused: true
        });

        const updatedRegisterUserForm = updateObject(registerUserForm.fields, {
            [inputIdentifier]: updatedInput
        });

        setRegisterUserForm({
            fields: updatedRegisterUserForm,
            formIsValid: registerUserForm.formIsValid
        });
    }

    const inputBlured = (event, inputIdentifier) => {
        const updatedInput = updateObject(registerUserForm.fields[inputIdentifier], {
            inputFocused: false
        });

        const updatedRegisterUserForm = updateObject(registerUserForm.fields, {
            [inputIdentifier]: updatedInput
        });

        setRegisterUserForm({
            fields: updatedRegisterUserForm,
            formIsValid: registerUserForm.formIsValid
        });
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const value = event.target.value;

        const updatedInput = updateObject(registerUserForm.fields[inputIdentifier], {
            value,
            valid: checkValidity(value, registerUserForm.fields[inputIdentifier].validation),
            touched: true
        });

        const updatedRegisterUserForm = updateObject(registerUserForm.fields, {
            [inputIdentifier]: updatedInput
        });

        let formIsValid = true;
        for (let inputIdentifier in updatedRegisterUserForm) {
            formIsValid = updatedRegisterUserForm[inputIdentifier].valid && formIsValid;
        }

        setRegisterUserForm({
            fields: updatedRegisterUserForm,
            formIsValid
        });
    }

    return (
        <PageDefault>
            <div className="TeamForm">
                <Section>
                    <SectionTitle title="Create your team" />
                    <Form submitFor={saveTeam}>
                        <div className="form-section">
                            <h2 className="text-center">TEAM INFORMATION</h2>
                            {renderFormTeam()}
                        </div>
                        <Button>Save</Button>
                    </Form>
                </Section>
            </div>
        </PageDefault>
    );
}

export default TeamForm;