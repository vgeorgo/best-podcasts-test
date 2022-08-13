import { Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { toNumber } from '../helpers/cast.helper';

export class PaginationQueryDto {
  @Transform(({ value }) => toNumber(value, { default: 1, min: 1 }))
  @IsNumber()
  @IsOptional()
  public page = 1;

  @Transform(({ value }) => toNumber(value, { default: 10, min: 5, max: 15 }))
  @IsNumber()
  @IsOptional()
  public limit = 10;
}
