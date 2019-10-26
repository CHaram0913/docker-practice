import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'
import { Paper, Typography } from '@material-ui/core';

const EXCHANGE_RATES = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`;

function ExchangeRates() {
  const { data, error, loading } = useQuery(EXCHANGE_RATES);

  if (loading)
    return <p>Loading!..</p>;
  if (error)
    return <p>Error :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <Paper key={currency}>
      <Typography>
        {currency}: {rate}
      </Typography>
    </Paper>
  ));
}

function App() {
  return (
    <ExchangeRates />
  );
}

export default App;
