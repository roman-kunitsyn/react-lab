import { ListPage } from './pages/list/ListPage';
import { DetailPage } from './pages/detail/DetailPage';
import { CreatePage } from './pages/create/CreatePage';

export const App = () => {
  return (
    <>
      <ListPage />
      <DetailPage />
      <CreatePage />
    </>
  );
};
