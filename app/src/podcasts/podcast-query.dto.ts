import { Transform } from 'class-transformer';
import { IsBoolean, IsNumber, IsOptional } from 'class-validator';
import { toBoolean, toNumber, trim } from '../common/helpers/cast.helper';

export class PodcastQueryDto {
  @Transform(({ value }) => trim(value))
  @IsOptional()
  id: string;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  title: string;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  publisher: string;

  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  explicit_content: boolean;

  @Transform(({ value }) => toNumber(value))
  @IsNumber()
  @IsOptional()
  itunes_id: number;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  language: string;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  country: string;

  @Transform(({ value }) => toBoolean(value))
  @IsBoolean()
  @IsOptional()
  is_claimed: boolean;

  @Transform(({ value }) => trim(value))
  @IsOptional()
  type: string;

  @Transform(({ value }) => toNumber(value))
  @IsNumber()
  @IsOptional()
  genre_id: number;
}
