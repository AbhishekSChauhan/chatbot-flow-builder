import { Suspense, lazy } from 'react';

const Layout = lazy(()=>import('./components/Layout'));

function App() {
  return <Suspense fallback={null}><Layout /></Suspense>  
}

export default App
