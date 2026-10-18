import { Button } from '@mui/material';
import { type FC } from 'react';
import { useNavigate } from 'react-router';

export const ErrorPage: FC = () => {
  const navigate = useNavigate();

  const navigateToSignIn = () => {
    navigate('/sign-in');
  }

  return (
    <section className="app-page__centered-section">
      <div className="flex flex-col gap-2 text-center">
        <h3 className="app-text-base">This page doesn’t exist</h3>

        <p className="text-sm">
          The link may be incorrect or the page may have been moved.
          Please check the URL or return to the home page.
        </p>

        <Button type="button" variant="contained" fullWidth onClick={navigateToSignIn}>
          Back to Sign In
        </Button>
      </div>
    </section>
  );
};
