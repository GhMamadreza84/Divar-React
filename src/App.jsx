import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./router/Router";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        retry: 1,
        staleTime: 60 * 1000,
      },
    },
  });
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
