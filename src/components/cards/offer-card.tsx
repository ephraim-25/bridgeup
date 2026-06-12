import React from 'react';
import { Offer } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Briefcase, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function OfferCard({ offer }: { offer: Offer }) {
  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
        <div className="flex items-center space-x-3">
          <Avatar className="w-10 h-10 border">
            <AvatarImage src={offer.company?.logoUrl} alt={offer.company?.name} />
            <AvatarFallback><Building className="w-4 h-4" /></AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold leading-none tracking-tight text-slate-900">{offer.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{offer.company?.name}</p>
          </div>
        </div>
        <Badge variant={offer.contractType === 'STAGE' ? 'secondary' : 'default'} className="shrink-0">
          {offer.contractType}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1 pb-4">
        <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {offer.location}
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-3.5 h-3.5" /> {offer.remote}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> Il y a {Math.floor((Date.now() - new Date(offer.postedAt).getTime()) / (1000 * 60 * 60 * 24))}j
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          {offer.skills.slice(0, 3).map((skill) => (
            <Badge key={skill.id} variant="outline" className="text-xs font-normal">
              {skill.name}
            </Badge>
          ))}
          {offer.skills.length > 3 && (
            <Badge variant="outline" className="text-xs font-normal">+{offer.skills.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <Button className="w-full">Voir l'offre</Button>
      </CardFooter>
    </Card>
  );
}
