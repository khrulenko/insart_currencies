import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNBURates } from './common/api';
import { getRates } from './redux/store';
import MainLayout from './ui/styles/components/MainLayout';
import RatesTable from './ui/styles/components/RatesTable';

const App = () => {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);

  useEffect(() => {
    getNBURates(dispatch);
  }, []);

  return (
    <MainLayout>
      <RatesTable rates={rates} />
    </MainLayout>
  );
};

export default App;
