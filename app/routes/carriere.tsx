import type {Route} from './+types/carriere';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Carrière'}];
};

export default function Carriere() {
  return (
    <div className="carriere">
      <h1>Carrière</h1>
      <p>Page carrière</p>
    </div>
  );
}
