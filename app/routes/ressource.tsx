import type {Route} from './+types/ressource';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Ressource'}];
};

export default function Ressource() {
  return (
    <div className="ressource">
      <h1>Ressource</h1>
      <p>Page ressource</p>
    </div>
  );
}
