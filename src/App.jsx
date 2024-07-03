import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";

function App() {
  const queryClient = new QueryClient({defaultOptions:{queries:{
    refetchOnWindowFocus:false,
  }}});
  return (
    <>
      <QueryClientProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
