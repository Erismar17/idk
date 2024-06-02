import { Link } from 'react-router-dom';
import './App.css';
const App = () => {
  
  return (
    <div>
      <button>
          <Link to={'/my-list'}>
              <span class="material-symbols-outlined">shopping_bag</span>
          </Link>
      </button>
    </div>
  )
 }

export default App;