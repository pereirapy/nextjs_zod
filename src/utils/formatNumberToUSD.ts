export const formatNumberToUSD = (number: number | string) =>
  new Intl.NumberFormat('US', { style: 'currency', currency: 'USD' }).format(
    Number(number),
  );
