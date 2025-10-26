import BundleCard from '../BundleCard';

export default function BundleCardExample() {
  return (
    <BundleCard 
      id="1"
      size="2 GB"
      price={9.0}
      duration="No-Expiry"
      provider="MTN"
      onSelect={(id) => console.log('Bundle selected:', id)}
    />
  );
}
