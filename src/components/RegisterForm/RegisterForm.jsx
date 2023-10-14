import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your name'),
  email: Yup.string().email().required('Enter your email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Enter password'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        dispatch(register(values));
      }}
    >
      <Form>
        <label>
          Name <Field name="name" type="text" />
        </label>
        <ErrorMessage name="name" component="span" />
        <label>
          Email <Field name="email" type="email" />
        </label>
        <ErrorMessage name="phone" component="span" />
        <label>
          Password <Field name="password" type="password" />
        </label>
        <ErrorMessage name="password" component="span" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};
