export default function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, item) => acc + (item.count * item.price), 0);
  if (applyDiscount) {
    return sum * 0.891;
  }
  return sum;
}
