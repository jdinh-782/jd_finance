import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Data from './Data';



const data = Data;

function createData(id, date, name, status, paymentMethod, amount) {
  return { id, date, name, status, paymentMethod, amount };
}

let rows = [];
let n_rows = 5;

if ((data.length-1) < 5) {
  n_rows = data.length - 1
}
for (let i = 0; i < n_rows; i++) {
  const d = createData(data[i].id, data[i].date, data[i].name, data[i].status, data[i].paymentMethod, data[i].amount);
  rows.push(d);
}
rows = rows.reverse();


function preventDefault(event) {
  event.preventDefault();
}

export default function Transactions() {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Payment Method</TableCell>
            <TableCell align="right">Purchase Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.status}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See Past Transactions
      </Link>
    </React.Fragment>
  );
}