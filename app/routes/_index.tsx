import type {Route} from './+types/_index';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Home'}];
};

export default function Homepage() {
  return (
    <div className="home">
      <h1>Bienvenue sur Wezen</h1>
      <p>Page d'accueil</p>
    </div>
  );
}
