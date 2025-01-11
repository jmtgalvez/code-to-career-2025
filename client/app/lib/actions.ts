import data from '../../data.json';
import { ParsedPost, SocialMediaPost } from './definitions';

export function getPlaces() {
  const places = (data.Parsed_Post as ParsedPost[])
    .sort((a, b) => a.Location.localeCompare(b.Location))
    .reduce((acc, elem: ParsedPost) => {
      if (Object.keys(acc).includes(elem.Location)) {
        acc[elem.Location].push(elem);
      } else {
        acc[elem.Location] = [elem];
      }
      return acc;
    }, {} as { [key: string]: ParsedPost[] });
  return places;
}

export function getPosts(location: string | null, issueType: string | null) {
  const parsedPosts = data.Parsed_Post as ParsedPost[];
  let rawPosts = (data.Social_Media_Post as SocialMediaPost[]).sort((a, b) =>
    a.Created_At.localeCompare(b.Created_At),
  );
  const posts = rawPosts.map((post) => {
    for (const parsedPost of parsedPosts) {
      if (parsedPost.Post_ID === post.Post_ID) {
        post = {
          ...post,
          Location: parsedPost.Location,
          Issue_Type: parsedPost.Issue_Type,
        };
      }
    }
    return post;
  });
  if (!location && !issueType) return posts;

  const filteredPosts = parsedPosts
    .filter(
      (post) => post.Location === location && post.Issue_Type === issueType,
    )
    .map((post) => post.Post_ID);
  return posts.filter((post) => filteredPosts.includes(post.Post_ID));
}
