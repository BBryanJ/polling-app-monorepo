export default function PollPage({ params }: { params: { pollId: string } }) {
  const { pollId } = params;
  return (
    <>
      <h1>Page for Poll {pollId}</h1>
    </>
  );
}
