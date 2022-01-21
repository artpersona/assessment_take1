import { Landing } from "./pages/UserPages";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./route";
import FirebaseProvider from "./shared/contexts/FirebaseContext";
import AuthProvider from "./shared/contexts/AuthContext";
import AppProvider from "./shared/contexts/AppContext";
function App() {
  return (
    <Router>
      <FirebaseProvider>
        <AuthProvider>
          <AppProvider>
            <Navigation />
          </AppProvider>
        </AuthProvider>
      </FirebaseProvider>
    </Router>
  );
}

export default App;
