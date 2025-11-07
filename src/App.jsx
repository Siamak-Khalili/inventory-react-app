import DarkModeProvider from "./context/DarkModeContext";
import AppLayout from "./pages/AppLayout";

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-600 dark:text-neutral-400">
        <AppLayout />
      </div>
    </DarkModeProvider>
  );
}

export default App;
