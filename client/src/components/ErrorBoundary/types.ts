export interface ErrorBoundaryProps {
  fallback?: (error: Error, _retry?: () => void) => React.ReactNode;
}

export interface ErrorBoundaryState {
  error?: Error;
}

export interface DerivedStateFromError {
  error: Error;
}
