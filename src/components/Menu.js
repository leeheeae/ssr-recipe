import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <Link to='red'>Red</Link>
      <Link to='blue'>Blue</Link>
    </nav>
  );
};

export default Menu;
