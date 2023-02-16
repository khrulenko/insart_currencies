import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getNBURates } from './common/api';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNBURates(dispatch);
  }, []);

  return <div>Here will be currency exhange app</div>;
};

export default App;
