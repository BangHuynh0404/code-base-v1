import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

interface QueryProps {
  children?: React.ReactNode;
}

const Query: React.FC<QueryProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

Query.defaultProps = {
  children: undefined,
};

export default Query;
