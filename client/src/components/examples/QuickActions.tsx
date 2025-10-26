import QuickActions from '../QuickActions';

export default function QuickActionsExample() {
  return <QuickActions onActionClick={(action) => console.log('Action clicked:', action)} />;
}
