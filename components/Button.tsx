import React from 'react';

const sizeClasses = {
  default: 'px-10 py-5 text-sm leading-5',
  compact: 'px-6 py-2.5 text-sm',
  lg: 'p-5 text-base',
};

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  size?: keyof typeof sizeClasses;
  accentLine?: boolean;
  variant?: 'default' | 'inverted';
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  href,
  onClick,
  size = 'default',
  accentLine = false,
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'font-bold uppercase tracking-[0.15em] flex items-center justify-center transition-all relative overflow-hidden';
  const sizeClass = sizeClasses[size];
  const variantClasses =
    variant === 'inverted'
      ? 'bg-white text-brand-navy hover:bg-brand-rust hover:text-white shadow-2xl'
      : 'bg-brand-navy text-white hover:bg-brand-rust border border-brand-navy';
  const extraClasses = variant === 'default' && size === 'default' ? 'shadow-xl shadow-slate-200' : '';
  const trackingClass = size === 'compact' ? 'tracking-widest' : 'tracking-[0.15em]';
  const linkClass = href ? 'inline-block' : '';
  const combined = `${baseClasses} ${sizeClass} ${variantClasses} ${extraClasses} ${trackingClass} ${linkClass} ${className}`.trim();

  const content = (
    <>
      {accentLine && (
        <span className="absolute top-0 left-0 w-full h-[2px] bg-brand-rust opacity-50" />
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={combined}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={combined}>
      {content}
    </button>
  );
};

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({
  children,
  href,
  onClick,
  className = '',
}) => {
  const classes =
    'border border-slate-400 bg-white px-10 py-5 font-bold uppercase tracking-[0.15em] text-sm leading-5 hover:bg-slate-100 hover:border-brand-rust hover:text-brand-rust transition-all text-slate-600 flex items-center justify-center ' +
    className;

  if (href) {
    return <a href={href} className={classes.trim()}>{children}</a>;
  }
  return (
    <button type="button" onClick={onClick} className={classes.trim()}>
      {children}
    </button>
  );
};
