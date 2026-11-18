
import { useBaseApi } from '@/core/services/http-service/use-base-api';
import { useApiRequest } from '@/core/services/http-service/use-api-request';

import { parseObjectToModel } from '@/core/api/utils';
import { AuthResponse } from '@/core/api/models/user';

import type { AuthResponseDto } from '@/core/api/entities/user/dto/auth-response.dto';
import type {
  CreateUserParams,
  RestorePasswordParams,
  SignInParams,
} from '@/core/api/entities/user/params';

const BASE_API = '/auth';

export const useSignIn = () => {
  const http = useBaseApi();

  const apiCall = (params: SignInParams) =>
    http
      .post<AuthResponseDto>(`${BASE_API}/sign-in`, params)
      .then(parseObjectToModel(AuthResponse));

  return useApiRequest(apiCall);
};

export const useCreateUser = () => {
  const http = useBaseApi();

  const apiCall = (params: CreateUserParams) =>
    http
      .post<AuthResponseDto>(`${BASE_API}/sign-up`, params)
      .then(parseObjectToModel(AuthResponse));

  return useApiRequest(apiCall);
};

export const useRestorePassword = () => {
  const http = useBaseApi();

  const apiCall = (userId: number, params: RestorePasswordParams) =>
    http
      .put<AuthResponseDto>(
        `${BASE_API}/${userId}/restore-password`,
        params
      )
      .then(parseObjectToModel(AuthResponse));

  return useApiRequest(apiCall);
};
