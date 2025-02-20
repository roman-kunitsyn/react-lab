export const useMockedTableData = () => {
  return [
    {
      id: 1,
      name: 'Roma',
      description: 'a good boy',
      data: { age: 40 },
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: 2,
      name: 'Ana',
      description: 'nice person',
      data: { age: 18 },
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: 3,
      name: 'Bob',
      description: 'ass hole',
      data: { age: 34 },
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
    {
      id: 4,
      name: 'Dima',
      description: 'lucky guy',
      data: { age: 28 },
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString(),
    },
  ];
};
