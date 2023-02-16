import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { Rates } from '../../../../redux/slices/ratesSlice';

interface Props {
  rates: Rates;
}

const RatesTable = ({ rates }: Props) => (
  <Paper>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Currency</TableCell>
          <TableCell>Rate</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rates.map(({ currency, rate }) => (
          <TableRow key={currency}>
            <TableCell>{currency}</TableCell>
            <TableCell>{rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);
export default RatesTable;
