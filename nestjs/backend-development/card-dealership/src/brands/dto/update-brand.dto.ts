// import { PartialType } from '@nestjs/mapped-types';
// import { CreateBrandDto } from './create-brand.dto';

import { IsString, MinLength } from "class-validator";

// export class UpdateBrandDto extends PartialType(CreateBrandDto) {
//     // el PartialType hace que todas las propiedades de CreateBrandDto sean opcionales
// }

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name: string;
}