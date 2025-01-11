import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import {
  AlertCircle,
  Bell,
  CheckCircle,
  Facebook,
  Instagram,
  MapPin,
  MessageSquare,
  TrendingUp,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';

function homepage() {
  return (
    <main className='grid sm:grid-cols-1 md:grid-cols-2 gap-2 mt-10 items-center justify-center'>
      <Link href='/places'>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Card className='bg-white/10 border-none text-white hover:bg-white/15 transition-colors'>
              <CardHeader className='flex flex-row items-center justify-between pb-2'>
                <CardTitle className='text-lg font-medium'>
                  Places/Cities
                </CardTitle>
                <MapPin className='h-5 w-5 text-muted-foreground' />
              </CardHeader>
              <CardContent>
                <div className='text-4xl font-bold'>20</div>
                <p className='text-sm text-muted-foreground mt-2'>
                  +2 new this week
                </p>
              </CardContent>
            </Card>
          </HoverCardTrigger>
          <HoverCardContent className='w-80'>
            <div className='flex justify-between space-x-4'>
              <div className='space-y-1'>
                <h4 className='text-sm font-semibold'>Location Analytics</h4>
                <p className='text-sm'>
                  Track and manage scraped locations across platforms.
                </p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </Link>

      <Link href='/posts'>
        <Card className='bg-white/10 border-none text-white hover:bg-white/15 transition-colors'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-lg font-medium'>Post Count</CardTitle>
            <MessageSquare className='h-5 w-5 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-4xl font-bold'>100</div>
            <p className='text-sm text-muted-foreground mt-2'>
              +15 from yesterday
            </p>
          </CardContent>
        </Card>
      </Link>

      <Card className='bg-white/10 border-none text-white hover:bg-white/15 transition-colors'>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <CardTitle className='text-lg font-medium'>Alerts</CardTitle>
          <Bell className='h-5 w-5 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <CheckCircle className='h-5 w-5 text-green-500' />
                <span className='text-lg'>Resolved</span>
              </div>
              <span className='text-2xl font-bold'>2</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <AlertCircle className='h-5 w-5 text-yellow-500' />
                <span className='text-lg'>Active</span>
              </div>
              <span className='text-2xl font-bold'>1</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Platform Stats Card */}
      <Card className='bg-white/10 border-none text-white hover:bg-white/15 transition-colors'>
        <CardHeader className='flex flex-row items-center justify-between pb-2'>
          <CardTitle className='text-lg font-medium'>Platform Stats</CardTitle>
          <TrendingUp className='h-5 w-5 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Facebook className='h-5 w-5 text-blue-500' />
                <span className='text-lg'>Facebook</span>
              </div>
              <span className='text-2xl font-bold'>5,678</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Twitter className='h-5 w-5 text-sky-500' />
                <span className='text-lg'>Twitter</span>
              </div>
              <span className='text-2xl font-bold'>3,456</span>
            </div>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-2'>
                <Instagram className='h-5 w-5 text-pink-500' />
                <span className='text-lg'>Instagram</span>
              </div>
              <span className='text-2xl font-bold'>2,345</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default homepage;
