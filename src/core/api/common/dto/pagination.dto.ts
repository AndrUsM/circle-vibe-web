export interface PageDto<T> {
  totalElements: number;
  totalPages: number;
  size: number;
  content: T[];
  number: number;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  sort: SortDto;
  pageable: PageableDto;
  empty: boolean;
}

export interface SortDto {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface PageableDto {
  offset: number;
  sort: SortDto;
  paged: boolean;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
}
