import { ReactNode } from 'react';
import { Stack } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';

interface Props {
  children: ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Stack minHeight="100vh" height="100%" justifyContent="space-between">
      <Header />

      <Stack p={4}>
        <Stack width="100%" spacing={6} alignItems="center">
          {children}
        </Stack>
      </Stack>

      <Footer />
    </Stack>
  );
};

export default MainLayout;
