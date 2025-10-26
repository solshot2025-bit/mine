import NetworkStatus from '../NetworkStatus';

export default function NetworkStatusExample() {
  const mockNetworks = [
    { name: 'MTN', status: 'available' as const },
    { name: 'Telecel', status: 'unavailable' as const },
    { name: 'AirtelTigo', status: 'unavailable' as const },
  ];

  return <NetworkStatus networks={mockNetworks} lastUpdated="30s" />;
}
