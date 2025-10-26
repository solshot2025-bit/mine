import ServiceCard from '../ServiceCard';
import { Smartphone } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <ServiceCard 
      name="MTN Data"
      icon={Smartphone}
      color="bg-gradient-to-br from-yellow-500 to-amber-600"
      onClick={() => console.log('MTN clicked')}
    />
  );
}
