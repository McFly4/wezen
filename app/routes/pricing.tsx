import type {Route} from './+types/pricing';

export const meta: Route.MetaFunction = () => {
  return [{title: 'Wezen | Pricing'}];
};

export default function Pricing() {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <p>Page pricing</p>
    </div>
  );
}
