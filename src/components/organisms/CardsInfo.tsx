import { useParams } from 'react-router-dom';

import useFetchData from '../../hook/useFetchData';
import CardInfo from '../molecules/CardInfo';

export default function CardsInfo() {
  const { data, loading } = useFetchData();
  const { name_original } = useParams();
  console.log(useParams().name_original, typeof useParams().name_original);

  const findData = data.find(res => res.name_original == name_original);

  if (loading) return <p>Loading...</p>;
  return <CardInfo data={findData} />;
}
