import { ListAction } from './components/ListAction';
import { ListFilter } from './components/ListFilter';
import { ListTable } from './components/ListTable';

export const ListPage = () => {
  const tableHeader = () => {
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

  const tableData = () => {
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

  return (
    <div className="page">
      <h1>List Page</h1>
      <ListAction />
      <ListFilter />
      <ListTable
        header={tableHeader}
        data={tableData}
        pagination={3}
      />
    </div>
  );
};
