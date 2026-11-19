import React from 'react';

/**
 * Dual-Layer Kinetic Rolling Link
 * Signature Swiss-editorial micro-interaction from kommakomma.is
 * On hover, the primary text layer slides up out of an overflow:hidden mask
 * while the duplicate text layer slides in seamlessly from below.
 */
export default function RollingLink({
  children,
  onClick,
  href,
  className = '',
  target,
  rel,
  ariaLabel
}) {
  const content = (
    <span className="relative inline-block overflow-hidden leading-tight align-baseline group">
      {/* Primary layer */}
      <span className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-full">
        {children}
      </span>
      {/* Duplicate rolling layer */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 inline-block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 text-neutral-950 dark:text-white"
      >
        {children}
      </span>
    </span>
  );

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={`inline-flex items-center cursor-pointer ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex items-center cursor-pointer text-left ${className}`}
    >
      {content}
    </button>
  );
}
