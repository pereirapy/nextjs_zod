'use client';

import Search from '@/app/list-property/search';
import Card from './card';
import { Property } from '@/types/property';
import { useState } from 'react';
import { sortById } from '@/utils/manipulateData';

type ListContainerProps = {
  data: Property[] | never[];
  error: string | null;
};

const ListContainer = ({ data, error }: ListContainerProps) => {

  const dataOrderedById = data.sort(sortById);
  const [dataFiltered, setDataFiltered] = useState(dataOrderedById);

  return (
    <div className="container m-auto ">
      <Search
        data={data}
        setDataFiltered={setDataFiltered}
      />
      <div className="flex flex-wrap gap-x-4 gap-y-8 place-content-center">
        {!error && dataFiltered.length === 0 && <div className="text-red-500 text-lg">No data</div>}
        {error && data.length === 0 ? (
          <h1 className="text-red-500 text-lg">{String(error)}</h1>
        ) : (
          dataFiltered &&
          dataFiltered.map((list) => (
            <Card
              key={list.Id}
              data={list}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListContainer;
