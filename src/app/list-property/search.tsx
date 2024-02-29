'use client';

import Button from '@/components/button';
import { Loading } from '@/components/loading';
import { SelectWithLabel } from '@/components/select';
import { Property } from '@/types/property';
import { formatNumberToUSD } from '@/utils/formatNumberToUSD';
import {
  generateSelectOptions,
  getMinAndMaxValues,
  getUniqueValues,
  sortById,
} from '@/utils/manipulateData';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from 'react';

type SearchProps = {
  data: Property[] | never[];
  setDataFiltered: Dispatch<SetStateAction<Property[] | never[]>>;
};

const defaultFilters = {
  'Sale Price': '0',
  Bedrooms: '0',
  Bathrooms: '0',
  Parking: '0',
};

type FilterProps = typeof defaultFilters;

const Search = ({ data, setDataFiltered }: SearchProps) => {
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<FilterProps>(defaultFilters);

  const bedroomsOptions = useMemo(
    () =>
      generateSelectOptions({
        data: getUniqueValues({ data, fieldName: 'Bedrooms' }),
      }),
    [data],
  );

  const bathroomsOptions = useMemo(
    () =>
      generateSelectOptions({
        data: getUniqueValues({ data, fieldName: 'Bathrooms' }),
      }),
    [data],
  );

  const parkingOptions = useMemo(
    () =>
      generateSelectOptions({
        data: getUniqueValues({ data, fieldName: 'Parking' }),
      }),
    [data],
  );

  const { min, max } = useMemo(
    () => getMinAndMaxValues({ data, fieldName: 'Sale Price' }),
    [data],
  );

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      'Sale Price': max,
    }));
    setLoading(false);
  }, [max]);

  const currentPriceRangeValue = useMemo(
    () => formatNumberToUSD(filters['Sale Price']),
    [filters],
  );

  const handleSetNewValues = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) =>
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

  const handleSearch = (restoreDefaultValues?: FilterProps) => {
    let dataFiltered = data;
    const currentFilters = restoreDefaultValues || filters;

    if (currentFilters.Bedrooms !== '0') {
      dataFiltered = dataFiltered.filter(
        (item) => item.Bedrooms === Number(currentFilters.Bedrooms),
      );
    }

    if (currentFilters.Bathrooms !== '0') {
      dataFiltered = dataFiltered.filter(
        (item) => item.Bathrooms === Number(currentFilters.Bathrooms),
      );
    }

    if (currentFilters.Parking !== '0') {
      dataFiltered = dataFiltered.filter(
        (item) => item.Parking === Number(currentFilters.Parking),
      );
    }

    dataFiltered = dataFiltered.filter(
      (item) => item['Sale Price'] <= Number(currentFilters['Sale Price']),
    );

    const dataOrderedById = dataFiltered.sort(sortById);

    setDataFiltered(dataOrderedById);
  };

  const resetSearch = () => {
    const restoreDefaultValues = { ...defaultFilters, 'Sale Price': max };
    setFilters(restoreDefaultValues);
    handleSearch(restoreDefaultValues);
  };

  if (loading) return <Loading />;

  return (
    <div className="m-4 ml-2 sm:ml-16 lg:ml-8 xl:ml-32 ">
      <div className="flex flex-wrap my-4 gap-4 ">
        <SelectWithLabel
          label="Bedrooms"
          name="Bedrooms"
          value={filters.Bedrooms}
          onChange={handleSetNewValues}
          options={bedroomsOptions}
        />
        <SelectWithLabel
          label="Bathrooms"
          name="Bathrooms"
          value={filters.Bathrooms}
          onChange={handleSetNewValues}
          options={bathroomsOptions}
        />
        <SelectWithLabel
          label="Parking"
          name="Parking"
          value={filters.Parking}
          onChange={handleSetNewValues}
          options={parkingOptions}
        />
        <div>
          <label
            className="mr-2"
            htmlFor="priceRange">
            Price Range
          </label>
          <input
            type="range"
            name="Sale Price"
            step={1000}
            min={min}
            max={max}
            value={filters['Sale Price']}
            onChange={handleSetNewValues}
            className="slider"
            id="priceRange"
          />
          <div>Current Price: {currentPriceRangeValue}</div>
        </div>
        <div className="xl:pl-2">
          <Button onClick={handleSearch}>Search</Button>
          <Button
            onClick={resetSearch}
            className="ml-2"
            color="green">
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
