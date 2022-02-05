import { useRouter } from 'next/router';

import { ViewTitle } from 'layouts/ViewTitle';
import { ViewContainer } from 'layouts/ViewContainer';

import { useForm } from 'hooks/useForm';
import { useUser } from 'hooks/useUser';

import { Form } from 'components/Form/Form';
import { Input } from 'components/Form/Input';

import { formSchema } from '../utils/editSchema';

import { FormFooter } from 'components/Form/FormFooter';

export const EditHomeView: React.FC = () => {
  const router = useRouter();

  const { addLoading, data, handleNewData, loading, removeLoading } = useUser();

  const { errors, fields, resetForm, setFields, submitHandler } = useForm({
    name: '',
    email: '',
    city: '',
    username: '',
  });

  const handleSubmit = submitHandler({
    validateSchema: formSchema,
    callback: async values => {
      addLoading();

      console.log(values);

      // handleNewData([{
      //   id: Math.random(),
      //   city:

      // }]);

      removeLoading();
    },
    onError: () => {},
  });

  return (
    <>
      <ViewTitle breadcrumb={{ items: [{ label: 'Dashboard' }] }} />
      <ViewContainer>
        <Form
          onSubmit={handleSubmit}
          columns={2}
          footerComponent={<FormFooter onCancel={() => router.back()} />}
        >
          <Input
            label="Name"
            name="name"
            onChange={value => setFields({ ...fields, name: value })}
            value={fields.name}
            error={errors.name}
          />
          <Input
            label="Username"
            name="username"
            onChange={value => setFields({ ...fields, username: value })}
            value={fields.username}
            error={errors.username}
          />
          <Input
            label="Email"
            name="email"
            onChange={value => setFields({ ...fields, email: value })}
            value={fields.email}
            error={errors.email}
            type="email"
          />
          <Input
            label="City"
            name="city"
            onChange={value => setFields({ ...fields, city: value })}
            value={fields.city}
            error={errors.city}
          />
        </Form>
      </ViewContainer>
    </>
  );
};
