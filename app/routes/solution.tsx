import type {Route} from './+types/solution';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Solution'}];
};

export default function Solution() {
  return (
    <div className="solution">
      <h1>Solution</h1>
      <p>Page solution</p>
    </div>
  );
}
