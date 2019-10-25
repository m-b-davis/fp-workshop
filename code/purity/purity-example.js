
// Impure

let basePackagingCost = 10;
let isUKCitizen = false;
let isEUCitizen = true;
let amount = 0;

function calculateShippingRate() {
  amount += 10;

  if (isUKCitizen) {
  amount += 12;
    return;
  }

  if (isEUCitizen) amount += 31;
  addTaxes(amount);
}

console.log(amount);


// Pure

const shippingCharges = {
  UK: 10,
  EU: 31,
}

function addTaxes(amount) {
  return amount * 1.2;
}

function calculateShippingRate(shippingCharges, citizenType) {
  const baseCharge = shippingCharges[citizenType];
  return addTaxes(baseCharge);
}

const citizenType = 'UK';

const shippingRate = calculateShippingRate(
  shippingCharges,
  citizenType
);

console.log(amount); // 10 * 1.2 = 12


