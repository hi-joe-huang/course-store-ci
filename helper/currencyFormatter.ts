export default function thousandFormatter(input: number) {
  return Intl.NumberFormat('zh-TW', { style: 'currency', currency: 'NTD',  minimumFractionDigits: 0, }).format(input);
}
