import type { SortDirection } from "../enums/sort-direction.enum";

export interface PaginationParams {
  page: number;
  size: number;
  sortBy: string;
  direction: SortDirection;
}
