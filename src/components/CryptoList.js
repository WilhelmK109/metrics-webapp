import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCryptoMetrics, selectCryptoMetrics } from '../redux/cryptoList/cryptoListSlice';

export default function CryptoList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cryptoMetrics, isLoading, isError } = useSelector(selectCryptoMetrics);

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (cryptoMetrics.length === 0) {
      dispatch(fetchCryptoMetrics());
    }
  }, [dispatch, cryptoMetrics]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (isError) {
    return <h3>Error Occured...</h3>;
  }

  const filteredMetrics = cryptoMetrics.filter((metric) => {
    const metricName = metric.CoinInfo.FullName.toLowerCase();
    return query === '' || (metricName.includes(query.toLowerCase()));
  });

  return (
    <div>
      <h1 data-testid="metric">Crypto Metrics</h1>
      <div className="search-bar">
        <input
          className="search-input"
          type="text"
          placeholder="Search Name"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      {filteredMetrics.map((metric) => (
        <div key={metric.id} className="container">
          <li role="presentation" onClick={() => navigate(`CoinInfo/${metric.CoinInfo.FullName}`)}>
            <div>
              FullName -
              {metric.CoinInfo.FullName}
              {' '}
              <br />
              Price -
              {' '}
              {metric.RAW.USD.PRICE}
            </div>
          </li>
        </div>
      ))}
    </div>
  );
}
