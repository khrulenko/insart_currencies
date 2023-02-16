import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNBURates } from './common/api';
import { getCurrencies } from './redux/store';
import MainLayout from './ui/components/MainLayout';
import RatesTable from './ui/components/RatesTable';

const App = () => {
  const dispatch = useDispatch();
  const currencies = useSelector(getCurrencies);

  useEffect(() => {
    getNBURates(dispatch);
  }, []);

  return (
    <MainLayout>
      <RatesTable currencies={currencies} />
    </MainLayout>
  );
};

export default App;
