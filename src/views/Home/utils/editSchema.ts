import * as Yup from 'yup';

export const formSchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email().required('Email is required.'),
  city: Yup.string().required('City is required'),
  username: Yup.string().required('Username is required.'),
});
