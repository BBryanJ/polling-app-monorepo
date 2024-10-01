export default function NewPollPage() {
  return (
    <section className='flex h-screen min-w-full flex-col items-center justify-center'>
      <h1 className='text-4xl font-bold'>New Poll</h1>
      <form className='flex flex-col gap-4 p-8 shadow-lg'>
        <label htmlFor='title' className='text-sm font-bold'>
          Title
        </label>
        <input
          id='title'
          type='text'
          name='title'
          placeholder='Title'
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
          required
        />
        <label htmlFor='description' className='text-sm font-bold'>
          Description
        </label>
        <textarea
          id='description'
          name='description'
          placeholder='Description'
          className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
        />
        <div className='flex flex-col justify-center'>
          <label htmlFor='options' className='text-sm font-bold'>
            Options
          </label>
          <input
            type='text'
            placeholder='Option 1'
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            required
          />
          <input
            type='text'
            placeholder='Option 2'
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            required
          />
          <button className='rounded bg-gray-500 text-white hover:bg-gray-700'>
            +
          </button>
        </div>
        <div className='flex gap-2'>
          <button className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
            Create Poll
          </button>
        </div>
      </form>
    </section>
  );
}
