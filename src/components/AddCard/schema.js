import * as Yup from 'yup';
export const cardSchema = Yup.object().shape({
  name: Yup.string().required(' Card Name is required'),
});
