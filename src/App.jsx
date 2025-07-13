import Flow from './components/ChatFlowBuilder'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { ReactFlowProvider } from '@xyflow/react';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
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

    </>
  )
}

export default App
