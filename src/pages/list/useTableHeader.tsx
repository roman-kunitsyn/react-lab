export const useTableHeader = () => {
  return [
    {
      title: (
        <input
          type="checkbox"
          name="selectAll"
          onChange={(event) => {
            console.log(event.target.checked, event.target.name);
          }}
        />
      ),
      key: '',
      render: (record: any) => {
        return (
          <input
            type="checkbox"
            onChange={(event) => {
              console.log(event.target.checked, record);
            }}
          />
        );
      },
    },
    {
      title: 'Id',
      key: 'id',
      render: (record: any) => {
        return record.id;
      },
    },
    {
      title: 'Name',
      key: 'name',
      render: (record: any) => {
        return record.name;
      },
    },
    {
      title: 'Description',
      key: 'description',
      render: (record: any) => {
        return record.description;
      },
    },
    {
      title: 'Data',
      key: 'data',
      render: (record: any) => {
        return JSON.stringify(record.data);
      },
    },
    {
      title: 'Created At',
      key: 'createdAt',
      render: (record: any) => {
        return record.createdAt;
      },
    },
    {
      title: 'Updated At',
      key: 'updatedAt',
      render: (record: any) => {
        return record.updatedAt;
      },
    },
    {
      title: 'Detail',
      key: 'id',
      render: (record: any) => {
        return (
          <a href={`/#/detail/${record.id}`}>
            <button>Detail</button>
          </a>
        );
      },
    },
  ];
};
