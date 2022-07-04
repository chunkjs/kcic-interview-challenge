import ContentShell from './AppContentShell';
import Header from './components/app-header/Header';
import { Container } from 'reactstrap';
import { UserProvider } from './user-context';
import ErrorBoundary from './components/ErrorBoundary';
/**
 * This App component responsosible for providing the initial layout foundation of the app
 */
function App() {
  return (
    <ErrorBoundary>
    <UserProvider>
      <Header />
      <Container>
        <ContentShell />
      </Container>
    </UserProvider>
    </ErrorBoundary>
  );
}

export default App;
