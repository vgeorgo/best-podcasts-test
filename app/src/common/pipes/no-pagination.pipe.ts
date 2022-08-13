import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class NoPaginationPipe implements PipeTransform {
  transform(value: any) {
    delete value.page;
    delete value.limit;

    return value;
  }
}
