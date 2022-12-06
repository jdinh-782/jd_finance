import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import Data from './Data';



const data = Data;

function createData(id, month, day, year, name, status, paymentMethod, amount) {
  const date = month + "/" + day + "/" + year;
  return {id, month, date, name, status, paymentMethod, amount};
}

let rows = [];
let n_rows = 5;

if ((data.length-1) < 5) {
  n_rows = data.length
}
for (let i = (data.length-2); i >= (n_rows-1); i--) {
  const d = createData(data[i].id, data[i].month, data[i].day, data[i].year, data[i].name, data[i].status, data[i].paymentMethod, data[i].amount);
  rows.push(d);
}
rows = rows.reverse();



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
    </React.Fragment>
  );
}