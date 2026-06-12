'use client';

import React, { useState } from 'react';
import { OfferCard } from '@/components/cards/offer-card';
import { CandidateCard } from '@/components/cards/candidate-card';
import { CompanyCard } from '@/components/cards/company-card';
import { MultiSelectTag } from '@/components/forms/multi-select-tag';
import { FileUpload } from '@/components/forms/file-upload';
import { mockOffers, mockStudents, mockCompanies } from '@/lib/mock';
import { Separator } from '@/components/ui/separator';

export default function DesignSystem() {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);

  return (
    <div className="container py-12 mx-auto space-y-12 max-w-7xl">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Design System</h1>
        <p className="mt-2 text-slate-500">Bibliothèque des composants clés pour le MVP BridgeUp.</p>
      </div>

      <Separator />

      {/* Cards Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Cartes (Cards)</h2>
          <p className="text-sm text-slate-500">Composants d'affichage des entités principales.</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">OfferCard</h3>
            <OfferCard offer={mockOffers[0]} />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">CandidateCard</h3>
            <CandidateCard student={mockStudents[0]} />
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">CompanyCard</h3>
            <CompanyCard company={mockCompanies[0]} />
          </div>
        </div>
      </section>

      <Separator />

      {/* Forms Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Composants de Formulaire</h2>
          <p className="text-sm text-slate-500">Inputs spécifiques complexes.</p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">MultiSelectTag</h3>
            <div className="max-w-md">
              <MultiSelectTag tags={tags} onChange={setTags} />
            </div>
            <p className="text-xs text-slate-400">Tapez un mot puis "Entrée" pour ajouter un tag.</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-500">FileUpload</h3>
            <div className="max-w-md">
              <FileUpload />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
