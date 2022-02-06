import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { ViewTitle } from 'layouts/ViewTitle';
import { ViewContainer } from 'layouts/ViewContainer';

import { useForm } from 'hooks/useForm';
import { useUser } from 'hooks/useUser';

import { Form } from 'components/Form/Form';
import { Input } from 'components/Form/Input';

import { formSchema } from '../utils/editSchema';

import { FormFooter } from 'components/Form/FormFooter';

type EditHomeViewProps = {
  id: string;
};

export const EditHomeView: React.FC<EditHomeViewProps> = ({ id }) => {
  const router = useRouter();

  const { data, handleEditUser } = useUser();

  const { errors, fields, setFields, submitHandler } = useForm({
    name: '',
    email: '',
    city: '',
    username: '',
  });

  useEffect(() => {
    const idFind = data.filter(user => user.id === +id);

    idFind.map(user => {
      setFields({
        name: user.name,
        city: user.city,
        email: user.email,
        username: user.username,
      });
    });
  }, []);

  const handleSubmit = submitHandler({
    validateSchema: formSchema,
    callback: async values => {
      console.log(values);

      handleEditUser({
        id: +id,
        ...values,
      });

      router.back();
    },
    onError: () => {},
  });

  return (
    <>
      <ViewTitle breadcrumb={{ items: [{ label: 'Edit' }] }} />
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
