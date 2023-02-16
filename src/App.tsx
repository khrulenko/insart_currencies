import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getBTCRate, getNBURates } from './common/api';
import Exchange from './ui/components/Exchange';
import MainLayout from './ui/components/MainLayout';
import RatesTable from './ui/components/RatesTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNBURates(dispatch);
    getBTCRate(dispatch);
  }, []);

  return (
    <MainLayout>
      <RatesTable />

      <Exchange />
    </MainLayout>
  );
};

export default App;
