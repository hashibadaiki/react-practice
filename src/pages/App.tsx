import { Template } from '../components/templates/Template';
import { css } from '@emotion/react';
import { QueryClient, QueryClientProvider } from 'react-query';

const sampleStyle = css`
  width: 100%;
  color: red;
`;

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div css={sampleStyle}>App</div>
      <Template />
    </QueryClientProvider>
  );
};
