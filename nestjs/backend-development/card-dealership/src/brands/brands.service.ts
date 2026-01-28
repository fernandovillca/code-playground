import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    {
      id: uuid(),
      name: 'Toyota',
      createdAt: new Date().toISOString(),
    }
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const brend: Brand = {
      id: uuid(),
      name,
      createdAt: new Date().toISOString(),
    }

    this.brands.push(brend);

    return brend;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id);

    if (!brand) new NotFoundException(`Brand with id "${id}" not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    if (!brand) new NotFoundException(`Brand with id "${id}" not found`);

    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
        brand = { ...brand, ...updateBrandDto, updatedAt: new Date().toISOString() };
      }
      return brand;
    });

    return this.findOne(id);
  }

  remove(id: string) {
    const brand = this.findOne(id);

    if (!brand) new NotFoundException(`Brand with id "${id}" not found`);
    
    this.brands = this.brands.filter(brand => brand.id !== id);
  }
}
