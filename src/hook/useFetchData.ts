import { useEffect, useState } from 'react';

import request, { type requestType } from '../api/http.api';

export default function useFetchData() {
  const [data, setData] = useState<requestType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request()
      .then(res => setData(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
