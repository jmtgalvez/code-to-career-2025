'use client';

import { useSearchParams } from 'next/navigation';
import Posts from '../components/Posts';
import { getPosts } from '../lib/actions';

export default function PostsPage() {
  const params = useSearchParams();
  const location = params.get('location');
  const issueType = params.get('issueType');
  const posts = getPosts(location, issueType);

  return (
    <div className='p-4 mt-4 lg:p-24'>
      <h1 className='text-xl font-bold'>Posts</h1>
      <Posts posts={posts} />
    </div>
  );
}
