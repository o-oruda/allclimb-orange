import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { instance } from './axiosInstance';

export interface CommonResponse<T> {
	code: 'SUCCESS' | 'ERROR' | 'FAIL';
	data: T;
	message: string;
}

export const Get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await instance.get(url, config);
	return response;
};

export const Post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<AxiosResponse<CommonResponse<T>>> => {
	const response = await instance.post(url, data, config);
	return response;
};
