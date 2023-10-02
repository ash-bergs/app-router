// If a folder in the app directory is named with parentheses, it will be ignored by the router
// Meaning it won't show up in the route path
// Useful for organization
import axios from 'axios';
import { AuthRequiredError } from '@/lib/exceptions';
const session = null;
// server components can be async
// this is useful for fetching data from an api
// we can use `await` at the top level of the component
const Login = async () => {
  // Instead of throwing this error
  // We can create one special exception or error
  // That will always be thrown when there's an auth error, for example
  // if (!session) throw new Error('Unauthorized');
  // lib/exceptions.ts
  if (!session) throw new AuthRequiredError();

  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  return (
    <div>
      <h1>Login</h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default Login;
