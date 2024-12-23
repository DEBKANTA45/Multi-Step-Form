import Form from './Pages/Form'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true
function App() {
  return (
    <>
   <Form/>
    </>
  );
}

export default App;
