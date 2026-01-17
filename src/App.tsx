import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './router';
import { RoleProvider } from './context/RoleContext';

function App() {
  return (
    <BrowserRouter basename={__BASE_PATH__}>
      <RoleProvider>
        <AppRoutes />
      </RoleProvider>
    </BrowserRouter>
  );
}

export default App;
