import * as Yup from 'yup';

export const editAccessSchema = Yup.object({
  name: Yup.string().required('Name is required.'),
  email: Yup.string().email().required('Email is required.'),
});
