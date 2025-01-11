import data from '../../data.json';
import { SocialMediaPost } from '../lib/definitions';

export default function Posts({ posts }: { posts: SocialMediaPost[] }) {
  return (
    <div className='grid lg:grid-cols-3 gap-4'>
      {posts.map((post, i) => (
        <div
          key={i}
          className='p-4 border border-black rounded-md grid gap-1 bg-white/10 hover:bg-white/15 transition-colors'
        >
          <h3 className='flex gap-2 items-center'>
            <p className='text-md font-bold'>{post.Location}</p>
            <span className='p-1 text-xs bg-white/50'>{post.Issue_Type}</span>
          </h3>
          <div className='w-100 flex gap-2 items-center justify-between'>
            <h3 className='text-lg font-bold'>@{post.Author}</h3>
            <a
              href={`${
                post.Platform == 'Twitter'
                  ? 'https://x.com'
                  : post.Platform == 'Facebook'
                  ? 'https://facebook.com'
                  : '/api'
              }/${post.Author}`}
              target='_blank'
            >
              {post.Platform == 'Facebook' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='50'
                  height='50'
                  viewBox='0 0 48 48'
                >
                  <path
                    fill='#039be5'
                    d='M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z'
                  ></path>
                  <path
                    fill='#fff'
                    d='M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z'
                  ></path>
                </svg>
              ) : post.Platform == 'Twitter' ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='50'
                  height='50'
                  viewBox='0 0 50 50'
                >
                  <path d='M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z'></path>
                </svg>
              ) : (
                <p className='w-fit p-2 font-bold text-white bg-blue-300 hover:bg-blue-500'>
                  {post.Platform}
                </p>
              )}
            </a>
          </div>
          <span className='text-gray-500 text-sm'>{post.Created_At}</span>
          <p className=''>{post.Post_Text}</p>
        </div>
      ))}
    </div>
  );
}
