import { FormControl, Input, InputLabel } from '@mui/material';
import { SubmitBtn } from './AuthForms.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunk';
import * as Yup from 'yup';
import {
  AuthForm,
  AuthFormCard,
  AuthHelperText,
  FormTitle,
} from './AuthForms.styled';
import { useAuth } from 'hooks/useAuth';

function RegisterForm() {
  const dispatch = useDispatch();
  const { isLogging } = useAuth();

  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, 'Name can only contain letters'),
    lastName: Yup.string()
      .required('Required')
      .matches(/^[a-zA-Zа-яА-Я\s'-]+$/, 'Name can only contain letters'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?/~_+-=|\\]).{8,32}$/,
        'Password should have at least one uppercase letter, one digit, and one special character'
      ),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      password: '',
    },
    validate: values => {
      const errors = {};
      try {
        RegisterSchema.validateSync(values, { abortEarly: false });
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
      }

      return errors;
    },
    onSubmit: user => {
      dispatch(register(user));
      formik.resetForm();
    },
  });

  return (
    <AuthFormCard>
      <FormTitle>Sign up to Journeezy</FormTitle>
      <AuthForm onSubmit={formik.handleSubmit}>
        <FormControl>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input
            size="small"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          {formik.touched.name && formik.errors.name ? (
            <AuthHelperText>{formik.errors.name}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="lastName">Last name</InputLabel>
          <Input
            size="small"
            type="text"
            id="lastName"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <AuthHelperText>{formik.errors.lastName}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            size="small"
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          {formik.touched.email && formik.errors.email ? (
            <AuthHelperText>{formik.errors.email}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input
            id="password"
            type="password"
            name="password"
            value={formik.values.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
          />
          {formik.touched.password && formik.errors.password ? (
            <AuthHelperText>{formik.errors.password}</AuthHelperText>
          ) : null}
        </FormControl>
        <SubmitBtn type="submit" disabled={isLogging}>
          Sign up
        </SubmitBtn>
      </AuthForm>
    </AuthFormCard>
  );
}

export default RegisterForm;
