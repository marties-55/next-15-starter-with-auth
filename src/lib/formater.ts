export const formattedCurrency = (amount: number) => {
  const formatter = new Intl.NumberFormat('default', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const formattedAmount = formatter.format(amount);

  return formattedAmount;
};