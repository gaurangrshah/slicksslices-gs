// NOTE: Will only format the currency for the local country, will not convert the values.

const formatter = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function formatMoney(cents) {
  return formatter.format(cents / 100);
}
