import { useState } from 'react';
import { Link } from 'react-router-dom';

import type { requestType } from '../../api/http.api';
import useFetchData from '../../hook/useFetchData';
import Button from '../atoms/Button';
import Card from '../molecules/Card';

interface TypeCards {
  typeProps: string;
}

export default function Cards({ typeProps }: TypeCards) {
  const { data, loading } = useFetchData();
  const [current, setCurrent] = useState(0);

  const filterData =
    typeProps == 'home' ? data : data.filter(item => item.type == typeProps);

  function handlePrev() {
    setCurrent(cur => (cur - 3 < 0 ? filterData.length - 1 : cur - 3));
  }
  function handleNext() {
    setCurrent(cur => (cur + 3 >= filterData.length - 1 ? 0 : cur + 3));
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ul className="CardsList">
      <div className="Cards">
        {filterData.slice(current, current + 3).map((item: requestType) => (
          <Link
            key={item.name_original}
            to={
              item.type == 'film'
                ? `/movie/${item.name_original}`
                : `/serial/${item.name_original}`
            }
          >
            <Card data={item} />
          </Link>
        ))}
      </div>
      <div className="controlCardList">
        <Button onClick={handlePrev}>prev</Button>
        <Button onClick={handleNext}>next</Button>
      </div>
    </ul>
  );
}
