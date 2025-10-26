import DepositCard from '../DepositCard';

export default function DepositCardExample() {
  return <DepositCard onDeposit={() => console.log('Deposit now clicked')} />;
}
