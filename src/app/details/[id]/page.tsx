import { getOneProperty } from '@/lib/services/property';
import DetailsContainer from './details-container';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const { data } = await getOneProperty(id);

  return {
    title: data?.Title,
    description: data?.Description,
  };
}

export default async function Details({ params }: { params: { id: string } }) {
  const { data, error } = await getOneProperty(params.id);

  return (
    <DetailsContainer
      data={data}
      error={error}
    />
  );
}
