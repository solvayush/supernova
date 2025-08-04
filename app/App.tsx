import ApplicationRoutes from "@/routes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})
function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <ApplicationRoutes />
    </QueryClientProvider>
    </>
  )
}

export default App
