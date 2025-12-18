import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { Car } from './interfaces/car.interface';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), make: 'Toyota', model: 'Corolla', year: 2020 },
    { id: uuid(), make: 'Honda', model: 'Civic', year: 2019 },
    { id: uuid(), make: 'Ford', model: 'Mustang', year: 2021 },
  ];

  getAll() {
    return this.cars;
  }

  getOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID '${id}' not found`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);
    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getOneById(id);

    console.log('CAR: ', carDB);
    console.log('CARDTO: ', updateCarDto);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...updateCarDto, ...carDB, id };
        return carDB;
      }

      return car;
    });

    console.log('CAR UPDATE: ', carDB);
    return carDB;
  }

  delete(id: string) {
    const car = this.getOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
