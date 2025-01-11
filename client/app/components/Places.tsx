'use client';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronRight } from 'lucide-react';

import { getPlaces } from '../lib/actions';
import { ParsedPost } from '../lib/definitions';
import Link from 'next/link';

const cities: { [key: string]: ParsedPost[] } = getPlaces();

export default function NetworkStatus() {
  return (
    <div className='w-full max-w-3xl mx-auto p-4 bg-white/10 rounded-md'>
      <div className='space-y-2'>
        {Object.keys(cities).map((city) => (
          <Collapsible
            key={city}
            className='border rounded-lg'
          >
            <CollapsibleTrigger className='flex items-center justify-between w-full p-4 hover:bg-muted/50 rounded-lg'>
              <div className='flex items-center gap-2'>
                <ChevronRight className='w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-90' />
                <span className='font-bold'>{city}</span>
                <span className='text-lg font-bold inline-flex items-center justify-center w-6 h-6 rounded-full bg-muted'>
                  {city.length}
                </span>
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='px-4 pb-4'>
                <div className='space-y-2'>
                  {cities[city].map((city, index) => (
                    <div
                      key={index}
                      className='flex justify-between gap-4 py-2 border-t items-center'
                    >
                      <div className='font-mono text-sm flex-grow'>
                        {city.Issue_Type}
                      </div>
                      <div className='text-sm'>
                        {city.Confidence_Score * 100}%
                      </div>
                      <Link
                        href={`/api/${city.Post_ID}`}
                        className='w-fit p-2 font-bold text-white bg-blue-300 hover:bg-blue-500'
                      >
                        Open
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
