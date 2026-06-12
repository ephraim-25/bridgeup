'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function RegisterPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const goToStudentDashboard = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Mock submit delay
    await new Promise((r) => setTimeout(r, 500));
    router.push('/student/dashboard');
  };

  const goToCompanyDashboard = async () => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    // Mock submit delay
    await new Promise((r) => setTimeout(r, 500));
    router.push('/company/dashboard');
  };

  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6 text-xl sm:text-2xl font-bold tracking-tight text-primary">
          <div className="w-8 h-8 rounded-lg bg-primary" aria-hidden="true" />
          BridgeUp
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-slate-900">
          Créer un compte
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500">
          Vous avez d&eacute;j&agrave; un compte ?{' '}
          <Link href="/login" className="font-semibold text-primary hover:text-primary/80">
            Se connecter
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mt-10 px-4 sm:px-6">
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 sm:mb-8 h-11">
            <TabsTrigger value="student">Étudiant</TabsTrigger>
            <TabsTrigger value="company">Entreprise</TabsTrigger>
          </TabsList>

          <TabsContent value="student" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input id="firstName" className="mt-2" placeholder="Alexandre" />
              </div>
              <div>
                <Label htmlFor="lastName">Nom</Label>
                <Input id="lastName" className="mt-2" placeholder="Dubois" />
              </div>
            </div>
            <div>
              <Label htmlFor="studentEmail">Email académique ou perso</Label>
              <Input
                id="studentEmail"
                type="email"
                className="mt-2"
                placeholder="alex@ecole.edu"
              />
            </div>
            <div>
              <Label htmlFor="studentPassword">Mot de passe</Label>
              <Input id="studentPassword" type="password" className="mt-2" />
            </div>
            <Button
              type="button"
              className="w-full mt-4"
              onClick={goToStudentDashboard}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
S&apos;inscrire en tant qu&apos;&eacute;tudiant
            </Button>
          </TabsContent>

          <TabsContent value="company" className="space-y-6">
            <div>
              <Label htmlFor="companyName">Nom de l'entreprise</Label>
              <Input id="companyName" className="mt-2" placeholder="TechFlow Inc." />
            </div>
            <div>
              <Label htmlFor="companyEmail">Email professionnel</Label>
              <Input
                id="companyEmail"
                type="email"
                className="mt-2"
                placeholder="recrutement@techflow.fr"
              />
            </div>
            <div>
              <Label htmlFor="companyPassword">Mot de passe</Label>
              <Input id="companyPassword" type="password" className="mt-2" />
            </div>
            <Button
              type="button"
              className="w-full mt-4"
              onClick={goToCompanyDashboard}
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? "Inscription..." : "Cr&eacute;er le compte recruteur"}
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

