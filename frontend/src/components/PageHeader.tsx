'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '@/context/AppContext';

interface PageHeaderProps {
  title: string;
  backHref?: string;
}

export default function PageHeader({ title, backHref = '/dashboard' }: PageHeaderProps) {
  const { t } = useApp();
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        <Link
          href={backHref}
          className="flex items-center gap-2 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-primary transition-colors"
        >
          <ArrowLeft size={18} />
          {t('nav.back')}
        </Link>
        <div className="h-5 w-px bg-slate-200 dark:bg-slate-700" />
        <h1 className="text-lg font-bold font-display text-slate-900 dark:text-white truncate">
          {title}
        </h1>
      </div>
    </header>
  );
}
