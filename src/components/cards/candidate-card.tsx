import React from 'react';
import { Student } from '@/types';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CandidateCard({ student }: { student: Student }) {
  return (
    <Card className="flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex flex-row items-start justify-between pb-2 space-y-0">
        <div className="flex items-center space-x-4">
          <Avatar className="w-12 h-12 border-2 border-primary/10">
            <AvatarImage src={student.avatarUrl} alt={student.firstName} />
            <AvatarFallback>{student.firstName[0]}{student.lastName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-semibold leading-none tracking-tight text-slate-900">
              {student.firstName} {student.lastName}
            </h3>
            <p className="mt-1 text-sm text-slate-500 line-clamp-1">{student.headline}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-4 mt-2">
        <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> {student.location}
          </div>
          <div className="flex items-center gap-1 font-medium text-primary">
            <Target className="w-3.5 h-3.5" /> {student.lookingFor.join(' / ')}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {student.skills.slice(0, 4).map((skill) => (
            <Badge key={skill.id} variant="secondary" className="text-xs font-normal bg-slate-100 text-slate-700 hover:bg-slate-200">
              {skill.name}
            </Badge>
          ))}
          {student.skills.length > 4 && (
            <Badge variant="outline" className="text-xs font-normal">+{student.skills.length - 4}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-0 mt-auto">
        <Button variant="outline" className="w-full">Voir le profil</Button>
      </CardFooter>
    </Card>
  );
}
