'use client';

import { useState } from 'react';

interface RegistrationFormProps {
  onSubmit: (name: string, phone: string) => void;
  isLoading: boolean;
}

export default function RegistrationForm({ onSubmit, isLoading }: RegistrationFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});

  function formatPhone(value: string) {
    return value.replace(/\D/g, '');
  }

  function validate() {
    const newErrors: { name?: string; phone?: string } = {};
    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (at least 2 characters).';
    }
    const digits = phone.replace(/\D/g, '');
    if (!digits || digits.length < 8 || digits.length > 15) {
      newErrors.phone = 'Please enter a valid phone number (8–15 digits).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    onSubmit(name.trim(), phone.replace(/\D/g, ''));
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div>
        <label className="block text-xs font-semibold text-[#6b5c4e] uppercase tracking-widest mb-1.5">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EF] border border-[#e8ddd0] text-[#1a1815] placeholder-[#b8a898] focus:outline-none focus:ring-2 focus:ring-[#E8196E] focus:border-transparent transition text-sm"
          disabled={isLoading}
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-[#6b5c4e] uppercase tracking-widest mb-1.5">
          Phone Number
        </label>
        <input
          type="tel"
          value={phone}
          onChange={e => setPhone(formatPhone(e.target.value))}
          placeholder="e.g. 08123456789"
          className="w-full px-4 py-2.5 rounded-xl bg-[#FAF6EF] border border-[#e8ddd0] text-[#1a1815] placeholder-[#b8a898] focus:outline-none focus:ring-2 focus:ring-[#E8196E] focus:border-transparent transition text-sm"
          disabled={isLoading}
          autoComplete="tel"
          maxLength={15}
          inputMode="numeric"
        />
        {errors.phone && (
          <p className="mt-1.5 text-xs text-red-400">{errors.phone}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-2.5 px-6 rounded-xl font-bold text-sm bg-[#1a1815] text-[#FAF6EF] hover:bg-[#E8196E] active:scale-[0.98] transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed mt-1 tracking-widest uppercase"
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Checking…
          </span>
        ) : (
          'Spin the Wheel'
        )}
      </button>
    </form>
  );
}
