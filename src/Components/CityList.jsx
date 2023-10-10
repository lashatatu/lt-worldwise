import style from './CityList.module.css';
import Spinner from './Spinner.jsx';
import CityItem from './CityItem.jsx';
import Message from './Message.jsx';

const CityList = ({
  cities,
  isLoading,
}) => {
  if ( isLoading ) {
    return (
      <Spinner />
    );
  }

  if(!cities.length){
    return <Message message={"Add Your first City"}/>
  }
  return (
    <ul className={style.cityList}>
      {cities.map((city)=>(
        <CityItem city={city} key={city.id}/>
      ))}
    </ul>
  );
};

export default CityList;
