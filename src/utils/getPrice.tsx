import type { Car } from "../types";

export const getPrice = (car: Car): number => {
  // Base daily price for an economy car
  let price = 50;

  const year = parseInt(car.year);
  if (!isNaN(year) && year > 2015) {
    price += (year - 2015) * 1.5; // ~$1.5 per newer year
  }

  if (car.displ) {
    if (car.displ >= 3.0) {
      price += 20;
    } else if (car.displ >= 2.0) {
      price += 10;
    }
  }

  if (car.drive && car.drive.toLowerCase().includes("all-wheel")) {
    price += 15;
  }

  if (car.trany && car.trany.toLowerCase().includes("auto")) {
    price += 7;
  }

  if (car.fueltype && car.fueltype.toLowerCase().includes("electric")) {
    price += 25;
  }

  return Math.round(price);
};
