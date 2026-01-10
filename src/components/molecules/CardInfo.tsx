import type { requestType } from '../../api/http.api';

interface CardInfoProps {
  data: requestType;
}

export default function CardInfo({ data }: CardInfoProps) {
  return (
    <section className="CardInfo">
      <div className="CardInfo-right">
        <img src={data.best_poster} alt={data.name_original} />
      </div>
      <div className="CardInfo-left">
        <h1>{data.name_original}</h1>
        <h2>{data.description}</h2>
        <div className="CardInfo-left-advanced">
          <p>{data.rating_kp}</p>
          <p>{data.year_start}</p>
          <p>{data.time_minutes}</p>
          <p>{data.age_restriction}</p>
          <p>{data.type}</p>
          <p>{data.country_ru}</p>
        </div>
      </div>
    </section>
  );
}
