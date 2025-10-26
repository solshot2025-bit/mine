import WalletCard from '../WalletCard';

export default function WalletCardExample() {
  return (
    <WalletCard 
      balance={150.50}
      ordersToday={12}
      gbSoldToday={45.5}
      revenueToday={75.20}
      onDeposit={() => console.log('Deposit clicked')}
    />
  );
}
