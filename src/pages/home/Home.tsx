import { useGetFilmsTopQuery } from '../../entities/movie/api/endpointsKinopoiskApi';

export default function Movies() {
  console.log(useGetFilmsTopQuery().data.items);
  return <div className="lex flex-col min-h-screen">Home</div>;
}
