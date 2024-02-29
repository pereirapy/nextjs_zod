'use client';

import { Property } from '@/types/property';
import { formatNumberToUSD } from '@/utils/formatNumberToUSD';
import Image from 'next/image';

const PropertySpecNumber = ({
  number,
  className,
}: {
  number: number;
  className: string;
}) => <div className={`mt-2 ${className}`}>{number}</div>;

const PropertySpecName = ({
  name,
  className,
}: {
  name: string;
  className: string;
}) => (
  <div
    className={`text-[12px] text-gray-400 mt-2 lg:mb-2 lg:mt-0 ${className}`}>
    {name}
  </div>
);

const options: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
};

const PropertyDetails = ({ data }: { data: Property }) => {
  if (!data) return <div className="text-lg text-red-500">NO data</div>;

  const dateListed = new Intl.DateTimeFormat('en-US', options).format(
    new Date(data.DateListed),
  );
  return (
    <div className="grid grid-cols-1 auto-rows-min gap-4">
      <div className="lg:flex lg:justify-between min-h-[76px]">
        <div className="justify-start text-left">
          <div className="text-lg">{data.Title}</div>
          <div className="text-sm">{data.Location}</div>
        </div>
        <div className="justify-end min-w-48 text-right">
          <div className="text-lg">{formatNumberToUSD(data['Sale Price'])}</div>
          <div className="text-sm text-gray-400">Data Listed: {dateListed}</div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#AAF4EE]">
        <Image
          src={data.PictureURL}
          alt={data.Title}
          width={350}
          height={350}
          className="w-full max-w-[350px]"
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-5 auto-rows-min gap-y border-2 text-center">
        <PropertySpecNumber
          className="order-1"
          number={data.Bedrooms}
        />
        <PropertySpecNumber
          className="order-2 lg:order-4"
          number={data.Bathrooms}
        />
        <PropertySpecNumber
          className="order-3"
          number={data.Parking}
        />
        <PropertySpecNumber
          className="order-4"
          number={data.Sqft}
        />
        <PropertySpecNumber
          className="order-5 mb-2 lg:mb-0"
          number={data.YearBuilt}
        />
        <PropertySpecName
          className="order-1 lg:order-6"
          name="BED"
        />
        <PropertySpecName
          className="order-2 lg:order-7"
          name="BATH"
        />
        <PropertySpecName
          className="order-3  lg:order-8"
          name="PARKING"
        />
        <PropertySpecName
          className="order-4  lg:order-9"
          name="SQFT"
        />
        <PropertySpecName
          className="order-5  lg:order-10 mb-2 lg:mb-0"
          name="YEAR BUILD"
        />
      </div>
      <div className="mt-1">
        <p className="text-gray-400 text-sm">{data.Description}</p>
      </div>
    </div>
  );
};

export default PropertyDetails;
