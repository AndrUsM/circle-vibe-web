import type { FC } from 'react';

import { Controller, useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import type { SignInFormValues } from './types';

export const SignInForm: FC = () => {
  // const {t} = useTranslat
  const { control, handleSubmit } = useForm<SignInFormValues>();

  const onSubmit = (values: SignInFormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="app-form">
      <div className="app-form-body">
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField {...field} label="Email" fullWidth margin="normal" />
          )}
        />

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              size="small"
              label="Password"
              type="password"
              fullWidth
              margin="normal"
            />
          )}
        />
      </div>

      <div className="app-form-actions">
        <Button type="submit" variant="contained" fullWidth>
          Log-in
        </Button>
      </div>
    </form>
  );
};
