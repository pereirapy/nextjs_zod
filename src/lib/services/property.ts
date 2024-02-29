import { defaultRevalidate, urlListJson } from '@/config/constants';
import {
  GetPropertiesResponse,
  GetPropertyResponse,
  Property,
} from '@/types/property';

export const getProperties = async (): Promise<GetPropertiesResponse> => {
  try {
    const result = await fetch(urlListJson, {
      next: { revalidate: defaultRevalidate },
    });
    if (result.ok) {
      const data: Property[] = await result.json();

      return {
        data,
        error: null,
      };
    } else {
      const error =
        result.statusText || 'Error when trying to get data from server';
      return {
        error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: String(error),
      data: null,
    };
  }
};

export const getOneProperty = async (
  id: string,
): Promise<GetPropertyResponse> => {
  try {
    if (!id) {
      return {
        error: 'No ID',
        data: null,
      };
    }
    const result = await fetch(urlListJson, {
      next: { revalidate: defaultRevalidate },
    });
    if (result.ok) {
      const data: Property[] = await result.json();
      const dataFiltered = data.find((item) => item.Id === Number(id));
      if (dataFiltered)
        return {
          data: dataFiltered,
          error: null,
        };
      else
        return {
          data: null,
          error: 'data by ID not found',
        };
    } else {
      const error =
        result.statusText || 'Error when trying to get data from server';
      return {
        error,
        data: null,
      };
    }
  } catch (error) {
    return {
      error: String(error),
      data: null,
    };
  }
};
