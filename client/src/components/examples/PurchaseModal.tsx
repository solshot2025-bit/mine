import { useState } from 'react';
import PurchaseModal from '../PurchaseModal';
import { Button } from '@/components/ui/button';

export default function PurchaseModalExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Purchase Modal</Button>
      <PurchaseModal 
        open={open}
        onClose={() => setOpen(false)}
        bundleSize="2 GB"
        bundlePrice={9.0}
        onPurchase={(phone) => console.log('Purchase for:', phone)}
      />
    </>
  );
}
