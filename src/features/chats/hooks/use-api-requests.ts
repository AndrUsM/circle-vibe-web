import { useBaseApi } from '@/core/services/http-service/use-base-api';
import { Chat } from '@/core/api/models/chat';
import type { ChatDto } from '@/core/api/dtos/chat';
import { parseArrayToModels } from '@/core/api/utils';

const BASE_API = '/chats';

const useChatsList = () => {
  const http = useBaseApi();

  return http
    .get<ChatDto[]>(`${BASE_API}/`)
    .then(parseArrayToModels(Chat))
    .catch(() => {
      return null;
    });
};
