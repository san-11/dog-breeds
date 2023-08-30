import { ApiResponse } from './../types/api.d';
import client from './http';

const DOGS_QUANTITY = 10;

export const getDogs = (bread: string) => (bread.trim().length > 0 ? getDogsByBreed(bread) : getRandomDogs());

export const getRandomDogs = () => client.get<ApiResponse>(`breeds/image/random/${DOGS_QUANTITY}`);

export const getDogsByBreed = (bread: string) =>
  client.get<ApiResponse>(`breed/${bread.trim().toLowerCase()}/images/random/${DOGS_QUANTITY}`);
