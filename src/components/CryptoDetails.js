import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCryptoDetails } from '../redux/cryptoDetails/cryptoDetailsSlice';

function CryptoDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const {
    cryptoDetails, isLoading, error,
  } = useSelector((store) => store.cryptoDetails);

  useEffect(() => {
    dispatch(fetchCryptoDetails(id));
  }, [dispatch, id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <span>{error}</span>;
  }

  return (
    <div>
      <h3>
        {id}
        {' '}
        : Crypto Details
      </h3>

      {cryptoDetails.map((element) => (
        <div key={element.id} className="crypto-details">
          <div className="image">
            <img src={element.largeImage} alt="Large" />
          </div>
          <li>
            <div>Symbol</div>
            <div>{element.symbol}</div>
          </li>
          <li>
            <div>Name</div>
            <div>{element.name}</div>
          </li>
          <li>
            <div>Current Price(USD)</div>
            <div>{element.currentPrice}</div>
          </li>
          <li>
            <div>Coin Gecko Score</div>
            <div>{element.coinGeckoScore}</div>
          </li>
          <li>
            <div>Market Cap Rank</div>
            <div>{element.marketCapRank}</div>
          </li>
          <li>
            <div>Liquidity Score</div>
            <div>{element.liquidityScore}</div>
          </li>
          <li>
            <div>Public Interest Score</div>
            <div>{element.publicInterestScore}</div>
          </li>
          <li>
            <div>Last Updated</div>
            <div>{element.lastUpdated}</div>
          </li>
        </div>
      ))}
    </div>
  );
}

export default CryptoDetails;
