import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ApprovalQueue from './pages/ApprovalQueue/ApprovalQueue';
import Error from './pages/Error';
import { useUserService } from './user-context';

import routes from './constants/routes';
/**
 * This component is responsible for storing the main content body of the app
 * It is also responsible for holding the routing definition
 *
 * In more complex apps I would resort to import the route strings from a constant file given
 * that it is common to need to refeerence these in cases where we need to trigger a
 * programmatic navigation
 *
 * The element syntaxt is also convenient for injecting props on the components
 */
function AppContentShell() {
  const { state: { currentUser } } = useUserService();

  return (
    <Routes>
      <Route path={routes.HOME.PATH} element={<Home />} />
      {currentUser.username === 'Unauthenticated'
        ? <Route path={routes.APPROVALQUEUE.PATH} element={<Error />} />
        : <Route path={routes.APPROVALQUEUE.PATH} element={<ApprovalQueue />} />}
    </Routes>
  );
}

export default AppContentShell;
