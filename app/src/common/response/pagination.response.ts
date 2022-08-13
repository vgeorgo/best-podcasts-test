import { Pagination } from 'nestjs-typeorm-paginate';

export class PaginationResponse<T> {
  readonly id: number;
  readonly name: string;
  readonly parent_id: number;
  readonly page_number: number;
  readonly total: number;
  readonly page_count: number;
  readonly has_previous: boolean;
  readonly previous_page_number: number;
  readonly has_next: boolean;
  readonly next_page_number: number;
  readonly listennotes_url: string;

  constructor({ meta, items }: Pagination<T>, itemsKey: string) {
    this[itemsKey] = items;
    this.id = 140;
    this.name = 'Web Design';
    this.parent_id = 127;
    this.page_number = meta.currentPage;
    this.total = meta.totalItems;
    this.page_count = Math.ceil(this.total / meta.itemsPerPage);
    this.has_previous = this.page_number > 1;
    this.has_next = this.page_number < this.page_count;
    this.listennotes_url =
      'https://www.listennotes.com/best-web-design-podcasts-140/';
  }
}
