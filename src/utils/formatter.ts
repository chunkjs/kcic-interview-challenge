const getCurrencyValue = (num) => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',

}).format(num);

const getTodaysDate = () => {
  const today = new Date();
  return `${String(today.getDate()).padStart(2, '0')}-${String(today.getMonth() + 1).padStart(2, '0')}-${today.getFullYear()}`;
};

export { getCurrencyValue, getTodaysDate };
