import TransactionTable from '../TransactionTable';

export default function TransactionTableExample() {
  const mockTransactions = [
    {
      id: '1',
      phoneNumber: '0241234567',
      method: 'Data',
      network: 'MTN',
      data: '2 GB',
      amount: 9.0,
      status: 'success' as const,
      timestamp: new Date(),
    },
    {
      id: '2',
      phoneNumber: '0551234567',
      method: 'Data',
      network: 'Telecel',
      data: '5 GB',
      amount: 22.5,
      status: 'pending' as const,
      timestamp: new Date(Date.now() - 3600000),
    },
  ];

  return (
    <TransactionTable 
      transactions={mockTransactions}
      onViewAll={() => console.log('View all clicked')}
    />
  );
}
