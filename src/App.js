import { AuthProvider } from "./auth";
import { AppRouter } from "./Router/AppRouter";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;
