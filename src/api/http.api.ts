export interface requestType {
  id: number;
  name_original: string;
  name_russian: string;
  description: string;
  best_poster: string;
  rating_kp: number;
  year_start: number;
  time_minutes: number;
  age_restriction: number;
  type: string;
  country_ru: string;
}
export default async function request() {
  const response = await fetch(
    'https://kinobd.net/api/films/top?page=1&per_page=100',
    {
      headers: {
        accept: 'application/json',
      },
    },
  );
  if (!response.ok) {
    throw new Error('API error');
  }
  return response.json();
}
