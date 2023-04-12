import { SelectedCoffees } from './components/SelectedCoffees';
import { AddresForm } from './components/AddresForm';

import { CheckoutContainer } from './styles';

import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  uf: zod.string().min(1),
});

export function Checkout() {
  const confirmOrderForm = useForm({
    resolver: zodResolver(confirmOrderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data) {
    navigate('/success', {
      state: data
    })
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <AddresForm />

        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
