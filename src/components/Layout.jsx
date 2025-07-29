import { ReactFlowProvider } from '@xyflow/react';
import { Toaster } from 'react-hot-toast';

import { Suspense, lazy } from 'react';

const Flow = lazy(()=>import('./ChatFlowBuilder'))
const Navbar = lazy(()=>import('./Navbar'))
const Sidebar = lazy(()=>import('./Sidebar'))


const Layout = () => {
  return (
    <div className="w-screen h-screen flex flex-col">
        <div><Toaster /></div>

        <ReactFlowProvider>
        <Navbar />
        <div className='flex flex-1 overflow-hidden'>
            <div className='w-[75%] h-full'>
            <Flow />
            </div>
            <div className='w-[25%] h-full'>
            <Sidebar />
            </div>          
        </div>        
        </ReactFlowProvider>        
    </div>
  )
}

export default Layout