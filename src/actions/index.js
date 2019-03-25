export const HOTEL_AREA = 'HOTEL_AREA';

export const selectArea = selectedArea => {
  return {
    type: HOTEL_AREA,
    payload: selectedArea
  };
};
