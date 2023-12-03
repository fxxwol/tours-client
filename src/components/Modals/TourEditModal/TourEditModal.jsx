import { FormControl, TextField } from '@mui/material';
import {
  AuthHelperText,
  InputField,
  Label,
  SubmitBtn,
} from 'components/AuthForms/AuthForms.styled';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import Modal from '../Modal';
import { TourForm } from '../Modal.styled';
import { updateTourAndRefresh } from 'redux/tours/toursSlice';

const TourEditModal = ({ onClose, tour }) => {
  const dispatch = useDispatch();

  const EditSchema = Yup.object().shape({
    name: Yup.string(),
    description: Yup.string(),
    amount: Yup.number().min(0, 'Amount must be at least 0'),
    country: Yup.string(),
    city: Yup.string(),
    price: Yup.number().min(1, 'Price must be at least 1'),
    duration: Yup.number().min(1, 'Duration must be at least 1'),
  });
  const formik = useFormik({
    initialValues: {
      name: tour.name,
      description: tour.description,
      amount: tour.amount,
      country: tour.country,
      city: tour.city,
      price: tour.price,
      duration: tour.duration,
    },

    validate: values => {
      const errors = {};
      try {
        EditSchema.validateSync(values, { abortEarly: false });
      } catch (validationErrors) {
        validationErrors.inner.forEach(error => {
          errors[error.path] = error.message;
        });
      }

      return errors;
    },
    onSubmit: newTour => {
      dispatch(updateTourAndRefresh({ id: tour._id, newTour }));
      formik.resetForm();
      onClose();
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
        <SubmitBtn type="submit">Save changes</SubmitBtn>
      </TourForm>
    </Modal>
  );
};

export default TourEditModal;
