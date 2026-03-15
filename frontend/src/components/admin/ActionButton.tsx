'use client';

interface ActionButtonProps {
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  variant?: 'edit' | 'danger' | 'success' | 'warning';
  onClick?: () => void;
}

export default function ActionButton({
  icon: Icon,
  label,
  variant = 'edit',
  onClick,
}: ActionButtonProps) {
  const variants = {
    edit: 'hover:bg-blue-50 text-blue-600',
    danger: 'hover:bg-red-50 text-red-600',
    success: 'hover:bg-green-50 text-green-600',
    warning: 'hover:bg-orange-50 text-orange-600',
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors text-sm font-medium ${variants[variant]}`}
      title={label}
    >
      <Icon size={16} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
