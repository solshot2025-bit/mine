import { useState } from 'react';
import NoticeModal from '../NoticeModal';
import { Button } from '@/components/ui/button';

export default function NoticeModalExample() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Notice Modal</Button>
      <NoticeModal 
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
