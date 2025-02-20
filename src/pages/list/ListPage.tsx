import { ListAction } from './components/ListAction';
import { ListFilter } from './components/ListFilter';
import { ListTable } from './components/ListTable';
import { useTableHeader } from './useTableHeader';
import { useMockedTableData } from './useMockedTableData';
import { usePagination } from './usePagination';

export const ListPage = () => {
  const tableHeader = useTableHeader();
  const tableData = useMockedTableData();
  const tablePagination = usePagination();

  return (
    <div className="page">
      <h1>List Page</h1>

      <ListAction />

      <ListFilter />

      <ListTable
        header={tableHeader}
        data={tableData}
        pagination={tablePagination}
      />
    </div>
  );
};
