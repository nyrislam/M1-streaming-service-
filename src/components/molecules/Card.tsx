import type { requestType } from '../../api/http.api';

interface CardProps {
  data: requestType;
}

export default function Card({ data }: CardProps) {
  return (
    <li className="Card">
      <img src={data.best_poster} />
    </li>
  );
}
