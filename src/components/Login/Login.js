import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useAuth } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const { login } = useAuth(); // Destructure setUser from the context
    const [error, setError] = useState('');
    const history = useHistory();

    const myStyles = {
        color: "red"
    }

    return (
        <>
            <h3>Login</h3>
            <Formik
                initialValues={{ uname: '', upwd: '' }}
                onSubmit={(values, { resetForm }) => {
                    axios.get(" http://localhost:4000/users")
                        .then(resp => {
                            const user = resp.data.find(
                                (user) => user.email === values.uname && user.password === values.upwd
                            );
                            if (user) {
                                login(user);
                                resetForm();
                                history.push('/dashboard');
                              
                            }
                            else {
                                setError("Invalid email or password");
                                alert("failed");
                            }                          
                        });

                }}
                validate={values => {
                    const errors = {};

                    if (!values.uname) {
                        errors.uname = "UserName is required";
                    }
                    if (!values.upwd) {
                        errors.upwd = "Password is required";
                    }
                    return errors;
                }}
            >
                {
                    (formik) =>

                        <Form>
                            <div>
                                <label>UserName</label>
                                <Field name="uname" type="text" />
                                <ErrorMessage name="uname" component="div" style={myStyles} />
                            </div>
                            <div>
                                <label>Password</label>
                                <Field name="upwd" type="password" />
                                <ErrorMessage name="upwd" component="div" style={myStyles} />
                            </div>
                            <button type="submit" disabled={!(formik.isValid && formik.dirty)} className="btn btn-primary">Submit</button>
                        </Form>
                }

            </Formik>
        </>
    )
};

export default Login;