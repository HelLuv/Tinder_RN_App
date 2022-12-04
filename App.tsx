import {StatusBar} from 'expo-status-bar';

import Navigation from "./src/navigation";
import {AuthProvider} from "./src/hooks/useAuth";


export default function App() {
  return (
    <AuthProvider>
      <Navigation/>
      <StatusBar style="auto"/>
    </AuthProvider>
  );
}

