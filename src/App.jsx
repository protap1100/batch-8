import Cart from './Components/Courses/Cart';
import Index from './Components/Courses/Index';

function App() {
  return (
    <div>
      <div>
        <h1 className='text-center text-3xl font-bold'>Course Registration</h1>
      </div>
      <div  className='mt-10 container mx-auto grid grid-cols-12 gap-10'>
        <div className='col-span-10 bg-blue-300 rounded-xl'>
            <Index/>
        </div>
        <div className='col-span-2 bg-gray-400 rounded-xl'>
            <Cart></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
