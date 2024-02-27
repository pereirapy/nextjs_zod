import { Property } from '@/types/property';
import { formatNumberToUSD } from '@/utils/formatNumberToUSD';
import { routes } from '@/config/routes';
import Image from 'next/image';
import Link from 'next/link';

type ListCardProps = {
  data: Property;
};
const Card = ({ data }: ListCardProps) => {
  return (
    <Link href={`${routes.details}/${data.Id}`}>
      <div className="box-border border border-slate-500 w-[310px] hover:border-slate-700 hover:shadow-lg shadow-slate-500/50 ">
        <Image
          alt="box"
          width={150}
          height={150}
          className="border-b border-slate-500 w-[310px] h-[310px]"
          src={data.ThumbnailURL}
        />
        <div className="p-3 text-balance">
          <p className="text-lg min-h-[56px]">{data.Title}</p>
          <p className="text-base text-slate-500">{data.Location}</p>
          <p className="text-sm text-slate-400">
            {data.Bedrooms} beds | {data.Bathrooms} baths
          </p>
          <p className="my-1">{formatNumberToUSD(data['Sale Price'])}</p>
          <button className="px-3 py-2 text-white bg-blue-400 border border-slate-500 hover:bg-blue-500">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Card;
