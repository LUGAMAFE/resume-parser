import { Route, Routes } from 'react-router-dom';
import { ReviewersTable } from '../reviewers/views/ReviewersTable';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ReviewersTable />} />
    </Routes>
  );
};
