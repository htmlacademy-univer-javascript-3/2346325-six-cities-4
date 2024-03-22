import { Link } from 'react-router-dom';

export default function NotFoundScreen() {
  return (
    <div>
      <h1>404.Page not found</h1>
      <p>You can go back to main scren:</p>
      <Link to="/">Main Screen</Link>
    </div>
  );
}
