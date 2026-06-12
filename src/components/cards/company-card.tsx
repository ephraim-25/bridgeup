import React from 'react';
import { Company } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Users, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CompanyCard({ company }: { company: Company }) {
  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-col items-center pb-2 space-y-3 text-center">
        <Avatar className="w-16 h-16 border rounded-xl">
          <AvatarImage src={company.logoUrl} alt={company.name} />
          <AvatarFallback className="rounded-xl"><Building className="w-6 h-6 text-slate-400" /></AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-lg font-bold text-slate-900">{company.name}</h3>
          <p className="text-sm font-medium text-primary">{company.industry}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <p className="mb-4 text-sm text-center text-slate-600 line-clamp-2">
          {company.description}
        </p>
        <div className="flex justify-center gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {company.location.split(',')[0]}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-3.5 h-3.5" /> {company.employeeCount} emp.
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <Button variant="secondary" className="w-full">Découvrir</Button>
      </CardFooter>
    </Card>
  );
}
