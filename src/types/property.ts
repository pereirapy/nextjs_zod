export type Property = {
  Id: number;
  DateListed: Date;
  Title: string;
  Description: string;
  'Sale Price': number;
  ThumbnailURL: string;
  PictureURL: string;
  Location: 'string';
  Sqft: number;
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
  YearBuilt: number;
};

export type GetPropertiesResponse =
  | {
      data: Property[];
      error: null;
    }
  | {
      error: string;
      data: null;
    };

export type GetPropertyResponse =
  | {
      data: Property;
      error: null;
    }
  | {
      error: string;
      data: null;
    };
