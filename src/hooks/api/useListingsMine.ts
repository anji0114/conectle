import useSWR from 'swr';

export const useListingsMine = () => {
  return useSWR('/listings/mine');
};
