'use client';
import { trpc } from '@/trpc/client';

export default function Home() {
  const { data, error, isLoading } = trpc.hello.useQuery({ text: "hi" });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.greeting}</div>;
}

