import { FormControl, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {
    AuthHelperText,
    InputField,
    Label,
    SubmitBtn
} from 'components/AuthForms/AuthForms.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { addTourAndRefresh } from 'redux/tours/toursSlice';
import * as Yup from 'yup';
import Modal from '../Modal';
import { TourForm } from '../Modal.styled';

const AddTourModal = ({ onClose }) => {
  const dispatch = useDispatch();

  const AddSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    date: Yup.date()
      .min(new Date(), 'Date must be in the future')
      .required('Date is required'),
    description: Yup.string().required('Description is required'),
    amount: Yup.number()
      .min(0, 'Amount must be at least 0')
      .required('Amount is required'),
    country: Yup.string().required('Country is required'),
    city: Yup.string().required('City is required'),
    price: Yup.number()
      .min(1, 'Price must be at least 1')
      .required('Price is required'),
    duration: Yup.number()
      .min(1, 'Duration must be at least 1')
      .required('Duration is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      date: '',
      description: '',
      amount: 0,
      country: '',
      city: '',
      price: 0,
      duration: 0,
    },

    validate: values => {
      const errors = {};
      try {
        AddSchema.validateSync(values, { abortEarly: false });
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
      }

      return errors;
    },
      onSubmit: newTour => {
      dispatch(addTourAndRefresh(newTour));
      formik.resetForm();
    },
  });

  return (
    <Modal onClose={onClose}>
      <TourForm onSubmit={formik.handleSubmit}>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <InputField
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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              name="date"
              value={formik.values.date || null}
              format="DD/MM/YYYY"
              onChange={formik.handleChange}
              error={formik.touched.date && Boolean(formik.errors.date)}
            />
          </LocalizationProvider>
          {formik.touched.date && formik.errors.date ? (
            <AuthHelperText>{formik.errors.date}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <TextField
            placeholder="Type description here…"
            minRows={2}
            id="description"
            name="description"
            variant="outlined"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            multiline
          />
          {formik.touched.description && formik.errors.description ? (
            <AuthHelperText>{formik.errors.description}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Label htmlFor="country">Country</Label>
          <InputField
            size="small"
            type="text"
            id="country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.country && Boolean(formik.errors.country)}
          />
          {formik.touched.country && formik.errors.country ? (
            <AuthHelperText>{formik.errors.country}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Label htmlFor="city">City</Label>
          <InputField
            size="small"
            type="text"
            id="city"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.city && Boolean(formik.errors.city)}
          />
          {formik.touched.city && formik.errors.city ? (
            <AuthHelperText>{formik.errors.city}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Label htmlFor="price">Price</Label>
          <InputField
            size="small"
            type="number"
            id="price"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.price && Boolean(formik.errors.price)}
          />
          {formik.touched.price && formik.errors.price ? (
            <AuthHelperText>{formik.errors.price}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Label htmlFor="duration">Duration</Label>
          <InputField
            size="small"
            type="number"
            id="duration"
            name="duration"
            value={formik.values.duration}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.duration && Boolean(formik.errors.duration)}
          />
          {formik.touched.duration && formik.errors.duration ? (
            <AuthHelperText>{formik.errors.duration}</AuthHelperText>
          ) : null}
        </FormControl>
        <FormControl>
          <Label htmlFor="amount">Amount</Label>
          <InputField
            size="small"
            type="number"
            id="amount"
            name="amount"
            value={formik.values.amount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="on"
            error={formik.touched.amount && Boolean(formik.errors.amount)}
          />
          {formik.touched.amount && formik.errors.amount ? (
            <AuthHelperText>{formik.errors.amount}</AuthHelperText>
          ) : null}
        </FormControl>
      </TourForm>
      <SubmitBtn onClick={onClose}>Add tour</SubmitBtn>
    </Modal>
  );
};

export default AddTourModal;
