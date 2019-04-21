export const findByTestAtrr = (wrapper, attr) => {
  return wrapper.find(`[data-test='${attr}']`);  
};