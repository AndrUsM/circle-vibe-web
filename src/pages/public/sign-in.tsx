import type { FC } from 'react';

import { SignInForm } from '../../features/users';

export const SignInPage: FC = () => {
  return (
    <section className="app-page__centered-form-overlay">
      <div className="app-page__centered-form">
        <h3 className="app-text-accent">Sign-in</h3>

        <SignInForm />
      </div>
    </section>
  );
};
