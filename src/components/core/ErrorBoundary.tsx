import { isRouteErrorResponse, useRouteError } from 'react-router';

import Button from '@/ui/components/button/Button';

const ErrorBoundary = () => {
  const error: unknown = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-4 text-center text-foreground">
      <h1 className="text-3xl font-bold mb-4">Oops!</h1>
      <p className="mb-2 text-muted-foreground">Sorry, an unexpected error has occurred.</p>

      {/* error details */}
      {(() => {
        if (isRouteErrorResponse(error)) {
          return (
            <p className="text-muted-foreground">
              <i>{error?.statusText}</i>
              <i>{error.data}</i>
            </p>
          );
        }
        if (error instanceof Error) {
          return (
            <p className="text-muted-foreground">
              <i>{error.name || 'Unknown Error'}</i>
              <i>{error.message}</i>
            </p>
          );
        }
        return <p className="text-muted-foreground">An unknown error occurred.</p>;
      })()}

      <Button type="button" onClick={() => window.history.back()} className="mt-4">
        Go Back
      </Button>
    </div>
  );
};

export default ErrorBoundary;
