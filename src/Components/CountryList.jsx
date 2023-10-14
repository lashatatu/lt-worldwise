import style from './CountryList.module.css';
import Spinner from './Spinner.jsx';
import Message from './Message.jsx';
import CountryItem from './CountryItem.jsx';

const CountryList = ({
  cities,
  isLoading,
}) => {
  if ( isLoading ) {
    return (
      <Spinner />
    );
  }

  if ( !cities.length ) {
    return <Message message={'Click to add country on map'} />;
  }

  const countries = cities.reduce((arr, city) => {
      if ( !arr.map(el => el.country)
        .includes(city.country) ) {
        return [
          ...arr,
          {
            country: city.country,
            emoji: city.emoji,
          },
        ];
      } else {
        return arr;
      }
    }
    , []);

  return (
    <ul className={style.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
