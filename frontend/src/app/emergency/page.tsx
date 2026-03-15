'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Emergency page is now handled by the global SOS floating button.
// Redirect users back to dashboard.
export default function EmergencyRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/dashboard'); }, [router]);
  return null;
}
