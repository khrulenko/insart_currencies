import { Paper } from '@mui/material';
import MUITable from '@mui/material/Table';
import { Rates } from '../../../../redux/slices/ratesSlice';

interface Props {
  rates: Rates;
}

const RatesTable = ({ rates }: Props) => (
  <Paper>
    <MUITable>
      <tbody>
        <tr>
          <th>currency</th>
          <th>rate</th>
        </tr>

        {rates.map(({ currency, rate }) => (
          <tr key={currency}>
            <td>{currency}</td>
            <td>{rate}</td>
          </tr>
        ))}
      </tbody>
    </MUITable>
  </Paper>
);
export default RatesTable;
