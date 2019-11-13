import React from 'react';
import { DerivedStateFromError, ErrorBoundaryProps, ErrorBoundaryState } from './types';

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error): DerivedStateFromError {
    return {
      error,
    };
  }

  _retry = (): void => {
    this.setState({ error: undefined });
  };

  render(): React.ReactNode | React.ReactNode[] {
    const { children, fallback } = this.props;
    const { error } = this.state;

    if (error) {
      if (fallback) {
        if (typeof fallback === 'function') {
          // eslint-disable-next-line no-underscore-dangle
          return fallback(error, this._retry);
        }

        return fallback;
      }

      return (
        <div>
          <div>Error: {error.message}</div>
          <div>
            <pre>{error.stack}</pre>
          </div>
        </div>
      );
    }

    return children;
  }
}
