import React, {useState} from "react";
import {Form, Button} from "semantic-ui-react";
import Validator from 'validator';
import InlineError from "../messages/InlineError";

export default function LoginForm(props) {

    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [errors, setErrorsData] = useState({})

    const onChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    };

    const onSubmit = () => {
        setErrorsData(validate(data))
        if(Object.keys(errors).length === 0){
            props.submit(data)
        }
    }

    const validate = (data) => {
        const errors = {}
        if(!Validator.isEmail(data.email)) errors.email = "Invalid email"
        if(Validator.isEmpty(data.email)) errors.email = "Can't be blank"
        if(Validator.isEmpty(data.password)) errors.password = "Can't be blank"
        return errors
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Field error={!!errors.email}>
                <label htmlFor={'email'}>Email</label>
                <input
                    type={'email'}
                    id={'email'}
                    name={'email'}
                    placeholder={'example@example.com'}
                    value={data.email}
                    onChange={onChange}
                />
                {errors.email &&  <InlineError text={errors.email} /> }
            </Form.Field>
            <Form.Field error={!!errors.password}>
                <label htmlFor={'password'}>Password</label>
                <input
                    type={'password'}
                    id={'password'}
                    name={'password'}
                    placeholder={'Make it secure'}
                    value={data.password}
                    onChange={onChange}
                />
                {errors.password &&  <InlineError text={errors.password} /> }
            </Form.Field>
            <Button primary> Login </Button>
        </Form>
    )
}