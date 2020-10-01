import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './TeamForm.scss';
import PageDefault from '../../components/PageDefault/PageDefault';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import { checkValidity, updateObject } from '../../utils/utils';
import FormFields from '../../components/FormFields/FormFields';
import Button from '../../components/Button/Button';
import Section from '../../components/Section/Section';

import { addTeam } from '../../store/actions';

const TeamForm = () => {
    const dispatch = useDispatch();
    const [initialRegisterTeamForm, ] = useState({
        formIsValid: false,
        sections: [
            {
                title: "TEAM INFORMATION",
                fields: {
                    name: {
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
                    }
                }
            },
            {
                title: 'CONFIGURE SQUAD',
                fields: {
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
                        toutched: false,
                        results: []
                    }
                }
            }
        ]
    });
    const [registerTeamForm, setRegisterTeamForm] = useState({...initialRegisterTeamForm});
    const players = useSelector(state => state.player.players);

    const renderFields = (index, fields) => {
        const inputArray = [];

        for (let key in fields) {
            inputArray.push({
                id: key,
                config: fields[key]
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
                            changed={event => inputChangedHandler(event, index, input.id)}
                            focused={event => inputFocused(event, input.id)}
                            blured={event => inputBlured(event, input.id)}
                            results={input.config.results ? input.config.results : []}
                        />
                    ))}
            </FormFields>
        )
    }

    const renderFormTeam = () => {
        return (
            <Form submitFor={saveTeam}>
            {registerTeamForm.sections.map((section, index) => (
                <div key={index} className="form-section">
                    <h2 className="text-center">{section.title}</h2>
                    {renderFields(index, section.fields)}
                </div>
            ))}
            <Button>Save</Button>
            </Form>
        );
    }

    const searchPlayers = string => {
        return players.filter(player => player.name.toLowerCase().indexOf(string.toLowerCase()) !== -1);
    }

    const saveTeam = event => {
        event.preventDefault();

        if (!registerTeamForm.formIsValid) {            
            changeAllFields('touched', true);
            return false;
        }

        const formData = {};

        registerTeamForm.sections.forEach(section => {
            for (let inputIdentifier in section.fields) {
                formData[inputIdentifier] = section.fields[inputIdentifier].value;
            }
        });

        dispatch(addTeam(formData));

        setRegisterTeamForm({...initialRegisterTeamForm});
    }

    const changeAllFields = (prop, value) => {
        const newSections = registerTeamForm.sections.map(section => {
            let currentFormFields = {...section.fields};

            for (let inputIdentifier in currentFormFields) {
                const updatedInput = updateObject(currentFormFields[inputIdentifier], {
                    [prop]: value
                });
    
                currentFormFields = updateObject(currentFormFields, {
                    [inputIdentifier]: updatedInput
                });
            }

            return {
                title: section.title,
                fields: currentFormFields
            };
        });

        setRegisterTeamForm({
            sections: newSections,
            formIsValid: registerTeamForm.formIsValid
        });
    }

    const inputFocused = (event, inputIdentifier, index) => {
        const updatedInput = updateObject(registerTeamForm.sections[index].fields[inputIdentifier], {
            inputFocused: true
        });

        const updatedRegisterUserForm = updateObject(registerTeamForm.sections[index].fields, {
            [inputIdentifier]: updatedInput
        });

        setRegisterTeamForm({
            fields: updatedRegisterUserForm,
            formIsValid: registerTeamForm.formIsValid
        });
    }

    const inputBlured = (event, inputIdentifier, index) => {
        const updatedInput = updateObject(registerTeamForm.sections[index].fields[inputIdentifier], {
            inputFocused: false
        });

        const updatedRegisterUserForm = updateObject(registerTeamForm.sections[index].fields, {
            [inputIdentifier]: updatedInput
        });

        setRegisterTeamForm({
            fields: updatedRegisterUserForm,
            formIsValid: registerTeamForm.formIsValid
        });
    }

    const inputChangedHandler = (event, index, inputIdentifier) => {
        const value = event.target.value;
        let results = [];

        if(inputIdentifier === 'search') {
            results = searchPlayers(value);
        }

        const updatedInput = updateObject(registerTeamForm.sections[index].fields[inputIdentifier], {
            value,
            valid: checkValidity(value, registerTeamForm.sections[index].fields[inputIdentifier].validation),
            touched: true,
            results
        });

        const updatedFields = updateObject(registerTeamForm.sections[index].fields, {
            [inputIdentifier]: updatedInput
        });

        const updatedSection = updateObject(registerTeamForm.sections[index], {
            fields: updatedFields
        });

        const updatedSections = [
            ...registerTeamForm.sections
        ];
        updatedSections[index] = updatedSection;

        const updatedRegisterUserForm = updateObject(registerTeamForm, {
            sections: updatedSections
        });

        let formIsValid = true;
        updatedRegisterUserForm.sections.forEach(section => {
            for (let inputIdentifier in section.fields) {
                formIsValid = section.fields[inputIdentifier].valid && formIsValid;
            }
        });

        setRegisterTeamForm({
            ...updatedRegisterUserForm,
            formIsValid: registerTeamForm.formIsValid
        });
    }

    return (
        <PageDefault>
            <div className="TeamForm">
                <Section>
                    <SectionTitle title="Create your team" />
                    {renderFormTeam()}
                </Section>
            </div>
        </PageDefault>
    );
}

export default TeamForm;