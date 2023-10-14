import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { ErrorMessage, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email().required('Enter your email'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Enter password'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        dispatch(logIn(values));
      }}
    >
      <Form>
        <label>
          Email <Field name="email" type="email" />
        </label>
        <ErrorMessage name="phone" component="span" />
        <label>
          Password <Field name="password" type="password" />
        </label>
        <ErrorMessage name="password" component="span" />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};
