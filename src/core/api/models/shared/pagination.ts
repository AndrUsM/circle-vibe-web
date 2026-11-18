import { number, boolean, z } from 'zod';
import type { ZodType } from 'zod';

export const Sort = z.object({
  empty: boolean(),
  sorted: boolean(),
  unsorted: boolean(),
});

export const Pageable = z.object({
  offset: number(),
  sort: Sort,
  paged: boolean(),
  pageNumber: number(),
  pageSize: number(),
  unpaged: boolean(),
});

export const Page = <T extends ZodType>(itemSchema: T) =>
  z.object({
    totalElements: number(),
    totalPages: number(),
    size: number(),
    content: z.array(itemSchema),
    number: number(),
    first: boolean(),
    last: boolean(),
    numberOfElements: number(),
    sort: Sort,
    pageable: Pageable,
    empty: boolean(),
  });
