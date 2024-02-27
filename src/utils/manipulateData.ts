export const getUniqueValues = ({
  data,
  fieldName,
}: {
  data?: any[];
  fieldName: string;
}) => {
  const onlyFieldName = data?.reduce(
    (prev, cur) => [...prev, cur[fieldName]],
    [] as number[],
  );
  return (
    onlyFieldName?.filter(
      // @ts-ignore
      (value, index, array) => array.indexOf(value) === index,
    ) || []
  );
};

export const generateSelectOptions = ({ data = [] }: { data?: any[] }) => {
  return (
    data
      .concat(0)
      ?.sort((a, b) => a - b)
      .map((item) => ({ label: String(item), value: item })) || []
  );
};
export const getMinAndMaxValues = ({
  data,
  fieldName,
}: {
  data: any[];
  fieldName: string;
}) => {
  const dataOrdered = data?.sort((a, b) => a[fieldName] - b[fieldName]);
  return {
    min: dataOrdered[0][fieldName],
    max: dataOrdered[dataOrdered.length - 1][fieldName],
  };
};

export const sortById = (a: { Id: number }, b: { Id: number }) => a.Id - b.Id;
