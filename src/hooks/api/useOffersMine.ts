import useSWR from 'swr';

export const useOffersMine = () => {
  return useSWR('/offers/mine');
};
