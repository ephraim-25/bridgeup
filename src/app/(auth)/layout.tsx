import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto lg:w-[400px]">
          {children}
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-slate-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2850&q=80')] mix-blend-overlay opacity-20 object-cover" />
          <div className="absolute flex flex-col justify-center px-16 inset-0 text-white">
            <h2 className="text-4xl font-bold tracking-tight">BridgeUp</h2>
            <p className="max-w-lg mt-4 text-lg text-indigo-200">
              La plateforme de référence pour connecter les meilleurs talents aux entreprises les plus innovantes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
