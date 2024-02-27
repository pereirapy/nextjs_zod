"use client"

import { Property } from '@/types/property';
import PropertyDetails from './property-details';
import FavoriteAndContact from './favorite-and-contact';
import Link from 'next/link';
import { routes } from '@/config/routes';

export type GetOnePropertyResult = {
  data: Property | null;
  error?: string | null;
}|{
  data?: null;
  error: string;
};


const DetailsContainer = ({ data, error }: GetOnePropertyResult) => {
  if(error) return <div className='text-red-600'>{error}</div>
  if (!data) return <div className='text-red-600'>NO data</div>;
  return (
    <div className="container m-auto ">
      <div className='my-2'>
        <Link href={routes.home}>&#8592; GO back</Link>
      </div>
      <div className="m-2 grid grid-cols-1 lg:grid-cols-[500px_400px] gap-4 place-content-center">
        <PropertyDetails data={data} />
        <FavoriteAndContact data={data} />
      </div>
    </div>
  );
};

export default DetailsContainer;
