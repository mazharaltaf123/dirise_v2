export const setColor = (color, id) => {
    return {
      type: 'SET_COLOR',
      payload: {
        color,
        id,
      },
    };
  };