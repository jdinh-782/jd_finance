import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box, InputLabel, MenuItem, FormControl, Select } from '@mui/material';
import Title from './Title';
import Data from './Data';



const month_names = {1: 'January', 2: 'February', 3: 'March', 4: 'April', 5: 'May', 6: 'June', 7: 'July', 8: 'August', 9: 'Septemeber', 10: 'October', 11: 'November', 12: 'December'}

const date = new Date();
const currentMonth = date.getMonth() + 1;
const month_name = month_names[currentMonth];
const currentYear = date.getFullYear();


function createData(id, month, day, year, amount) {
  const date = month + "/" + day;
  return {id, month, day, year, date, amount};
}

const data = []
for (let i = 0; i < Data.length; i++) {
  if (Data[i].amount !== undefined && Data[i].month == currentMonth) {
    data.push(createData(Data[i].id, Data[i].month, Data[i].day, Data[i].year, Data[i].amount));
  }
}

function getTotalSpending(d) {
  let totalSpendingAmount = 0;

  for (let i = 0; i < d.length; i++) {
    if (d[i].amount !== undefined && d[i].month == currentMonth) {
      totalSpendingAmount += d[i].amount;
    }
  }
  return totalSpendingAmount.toFixed(2);
};


export default function Spending() {
  const theme = useTheme();

  const [month, setMonth] = React.useState('');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  

  return (
    <React.Fragment>
      <Title>Spending - {month_name} {currentYear}</Title>

      <Box sx={{ maxWidth: 125, marginBottom: '5px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={month}
            label="Month"
            onChange={handleChange}
          >
            <MenuItem value={'January'}>January</MenuItem>
            <MenuItem value={'February'}>February</MenuItem>
            <MenuItem value={'March'}>March</MenuItem>
            <MenuItem value={'April'}>April</MenuItem>
            <MenuItem value={'May'}>May</MenuItem>
            <MenuItem value={'June'}>June</MenuItem>
            <MenuItem value={'July'}>July</MenuItem>
            <MenuItem value={'August'}>August</MenuItem>
            <MenuItem value={'September'}>September</MenuItem>
            <MenuItem value={'October'}>October</MenuItem>
            <MenuItem value={'November'}>November</MenuItem>
            <MenuItem value={'December'}>December</MenuItem>
          </Select>
        </FormControl>
      </Box>      

      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="date"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
          </XAxis>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Money Spent ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>

      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 150,
        }}
      >
        <Title>Total Spending for {month_name} {currentYear}</Title>
          <Typography component="p" variant="h4">
            ${getTotalSpending(data)}
          </Typography>
      </Paper>
    </React.Fragment>
  );
}