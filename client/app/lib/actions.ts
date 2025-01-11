import data from '../../data.json';
import { ParsedPost } from './definitions';

export function getPlaces() {
  const places = (data.Parsed_Post as ParsedPost[]).reduce(
    (acc, elem: ParsedPost) => {
      if (Object.keys(acc).includes(elem.Location)) {
        acc[elem.Location].push(elem);
      } else {
        acc[elem.Location] = [elem];
      }
      return acc;
    },
    {} as { [key: string]: ParsedPost[] },
  );
  return places;
}
