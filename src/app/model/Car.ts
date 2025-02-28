export class Car {
  carId: number;
  brand: string;
  model: string;
  year: number;
  dailyRate: number;
  carImage: string;
  regNo: string;
  color: string;

  constructor() {
    this.carId = 0;
    this.brand = '';
    this.model = '';
    this.year = 0;
    this.dailyRate = 0;
    this.carImage = '';
    this.regNo = '';
    this.color = '';
  }
}

export interface ICarList {
  carId: number;
  brand: string;
  model: string;
  year: number;
  dailyRate: number;
  carImage: string;
  regNo: string;
  color: string;
}
