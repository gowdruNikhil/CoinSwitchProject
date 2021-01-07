import request from './interceptor';

export async function getAllCoins(url): Promise {
    return request.get(url);
  }