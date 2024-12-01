// 관련 api 정의

import { API_URL } from '@/shared/constant';
import { Get } from '@/shared/constant/https';

/**
 * 예)
 * 
 * export const postEmail = async (email: string) => {
  const response = await axiosPublicInstance.post('/mail/signup', {
    email: email,
  });

  return response;
};

 */

// 이용권 목록 조회
export const getTicketList = async () => {
	const response = await Get(API_URL.GET_TICKET_LIST);
	return response;
};
