
import { useBaseApi } from '@/core/services/http-service/use-base-api';
import { useApiRequest } from '@/core/services/http-service/use-api-request';

import { Chat } from '@/core/api/models/chat';
import { Page } from '@/core/api/models/shared/pagination';

import { parseArrayToModels, parseObjectToModel } from '@/core/api/utils';

import type { ChatDto } from '@/core/api/entities/chat/dto';
import type {
  ChatFilterParams,
  ChatUpdateCreateParams,
} from '@/core/api/entities/chat/params';

import type { PaginationParams } from '@/core/api/common/types';
import type { PageDto } from '@/core/api/common/dto';

const BASE_API = '/chats';

export const useChatsList = () => {
  const http = useBaseApi();

  const apiCall = (params: ChatFilterParams) =>
    http
      .get<ChatDto[]>(`${BASE_API}/list`, { params })
      .then(parseArrayToModels(Chat));

  return useApiRequest(apiCall);
};

export const useChatsPaginated = () => {
  const http = useBaseApi();

  const apiCall = (params: ChatFilterParams & PaginationParams) =>
    http
      .get<PageDto<ChatDto>>(`${BASE_API}/paginated`, { params })
      .then(parseObjectToModel(Page(Chat)));

  return useApiRequest(apiCall);
};

export const useChatById = () => {
  const http = useBaseApi();

  const apiCall = (id: number) =>
    http
      .get<ChatDto | null>(`${BASE_API}/${id}`)
      .then(parseObjectToModel(Chat));

  return useApiRequest(apiCall);
};

export const useCreateChat = () => {
  const http = useBaseApi();

  const apiCall = (params: ChatUpdateCreateParams) =>
    http
      .post<ChatDto>(`${BASE_API}/`, params)
      .then(parseObjectToModel(Chat));

  return useApiRequest(apiCall);
};

export const useUpdateChat = () => {
  const http = useBaseApi();

  const apiCall = (id: number, params: ChatUpdateCreateParams) =>
    http
      .post<ChatDto>(`${BASE_API}/${id}`, params)
      .then(parseObjectToModel(Chat));

  return useApiRequest(apiCall);
};

export const useDeleteChat = () => {
  const http = useBaseApi();

  const apiCall = (id: number) =>
    http
      .delete<number>(`${BASE_API}/${id}`)
      .then(() => id);

  return useApiRequest(apiCall);
};
