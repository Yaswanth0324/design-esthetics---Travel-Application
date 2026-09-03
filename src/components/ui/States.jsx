import React from 'react';
import { Loader2 } from 'lucide-react';

export function LoadingSpinner({ size = 'md', center = false }) {
  const sizes = { sm: 'spinner-sm', md: 'spinner', lg: 'spinner-lg' };
  return (
    <div className={center ? 'flex justify-center items-center' : ''} style={center ? { minHeight: '200px' } : {}}>
      <div className={sizes[size]} style={center ? {} : {}} />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="glass-card overflow-hidden" style={{ borderRadius: 'var(--radius-lg)' }}>
      <div className="skeleton" style={{ height: '220px', borderRadius: '0' }} />
      <div style={{ padding: 'var(--space-lg)' }}>
        <div className="skeleton" style={{ height: '22px', width: '70%', marginBottom: '12px', borderRadius: 'var(--radius-sm)' }} />
        <div className="skeleton" style={{ height: '14px', width: '90%', marginBottom: '8px', borderRadius: 'var(--radius-sm)' }} />
        <div className="skeleton" style={{ height: '14px', width: '60%', marginBottom: '20px', borderRadius: 'var(--radius-sm)' }} />
        <div style={{ display: 'flex', gap: '8px' }}>
          <div className="skeleton" style={{ height: '28px', width: '70px', borderRadius: 'var(--radius-full)' }} />
          <div className="skeleton" style={{ height: '28px', width: '80px', borderRadius: 'var(--radius-full)' }} />
        </div>
      </div>
    </div>
  );
}

export function ErrorState({ title = 'Something went wrong', message, onRetry }) {
  return (
    <div className="flex flex-col items-center text-center" style={{ padding: 'var(--space-2xl)', gap: 'var(--space-md)' }}>
      <div style={{
        width: '64px', height: '64px', borderRadius: '50%',
        background: 'rgba(249, 115, 22, 0.15)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '28px', marginBottom: 'var(--space-sm)'
      }}>⚠️</div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{title}</h3>
      {message && <p className="text-sm text-muted" style={{ maxWidth: '360px' }}>{message}</p>}
      {onRetry && (
        <button className="btn btn-secondary btn-sm" onClick={onRetry} style={{ marginTop: 'var(--space-sm)' }}>
          Try Again
        </button>
      )}
    </div>
  );
}

export function EmptyState({ icon = '🗺️', title = 'Nothing found', message, action }) {
  return (
    <div className="flex flex-col items-center text-center" style={{ padding: 'var(--space-3xl)', gap: 'var(--space-md)' }}>
      <div style={{ fontSize: '48px', marginBottom: 'var(--space-sm)', animation: 'float 4s ease-in-out infinite' }}>
        {icon}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--text-primary)' }}>{title}</h3>
      {message && <p className="text-sm text-muted" style={{ maxWidth: '360px' }}>{message}</p>}
      {action && (
        <button className="btn btn-secondary btn-sm" onClick={action.onClick} style={{ marginTop: 'var(--space-sm)' }}>
          {action.label}
        </button>
      )}
    </div>
  );
}
