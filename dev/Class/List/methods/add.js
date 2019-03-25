const add = (context, data) => {
  const lastId = context.lastId + 1;
  const list = { ...context.list, [lastId]: data };
  const order = [...context.order, lastId];
  return { list, order, lastId };
};

export default add;
