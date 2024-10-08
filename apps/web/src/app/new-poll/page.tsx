import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';
import { Textarea } from '@repo/ui/components/ui/textarea';

export default function NewPollPage() {
  return (
    <section className='flex h-screen min-w-full flex-col items-center justify-center'>
      <Card className='w-full md:max-w-md'>
        <CardHeader>
          <CardTitle className='text-4xl font-bold'>New Poll</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='flex flex-col gap-4 p-4'>
            <Label htmlFor='title' className='text-sm font-bold'>
              Title
            </Label>
            <Input
              id='title'
              type='text'
              name='title'
              placeholder='Title'
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
              required
            />
            <Label htmlFor='description' className='text-sm font-bold'>
              Description
            </Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Description'
              className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            />
            <div className='flex flex-col justify-center gap-y-1'>
              <Label htmlFor='options' className='text-sm font-bold'>
                Options
              </Label>
              <Input
                type='text'
                placeholder='Option 1'
                className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                required
              />
              <Input
                type='text'
                placeholder='Option 2'
                className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                required
              />
              <Button
                variant='outline'
                className='rounded bg-gray-500 text-white hover:bg-gray-700'
              >
                +
              </Button>
            </div>
            <div className='flex gap-2'>
              <Button
                variant='default'
                type='submit'
                className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
              >
                Create Poll
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
