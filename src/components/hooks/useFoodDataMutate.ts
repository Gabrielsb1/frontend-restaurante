import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosPromise } from 'axios';
import { FoodData } from '../interface/FoodData';

const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.post(API_URL + '/food', data);
  return response;
};

const deleteData = async (id: number): AxiosPromise<any> => {
  const response = axios.delete(API_URL + `/food/${id}`);
  return response;
};


export function useFoodDataMutate() {
    const queryClient = useQueryClient();
  
    const create = useMutation(postData, {
      onSuccess: () => {
        queryClient.invalidateQueries(['food-data']);
      },
    });
  
    const remove = useMutation(deleteData, {
      onSuccess: () => {
        queryClient.invalidateQueries(['food-data']);
      },
    });
  
    const mutate = async (data: FoodData) => {
      await create.mutateAsync(data);
    };
  
    const removeItem = async (id: number) => {
      await remove.mutateAsync(id);
    };
  
    return {
      mutate,
      removeItem,
      isLoading: create.isLoading || remove.isLoading,
      isSuccess: create.isSuccess || remove.isSuccess,
      isError: create.isError || remove.isError,
    };
  }
  