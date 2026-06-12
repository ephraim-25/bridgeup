import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

export default function LoginPage() {
  return (
    <>
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-2 mb-6 text-xl sm:text-2xl font-bold tracking-tight text-primary">
          <div className="w-8 h-8 rounded-lg bg-primary" aria-hidden="true" />
          BridgeUp
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold leading-9 tracking-tight text-slate-900">
          Connexion à votre compte
        </h2>
        <p className="mt-2 text-sm sm:text-base text-slate-500">
          Pas encore de compte ?{' '}
          <Link href="/register" className="font-semibold text-primary hover:text-primary/80">
            S&apos;inscrire
          </Link>
        </p>
      </div>

      <div className="mt-6 sm:mt-10 px-4 sm:px-6">
        <form className="space-y-6">

          <div>
            <Label htmlFor="email">Adresse email</Label>
            <div className="mt-2">
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="vous@exemple.com"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Mot de passe</Label>
              <div className="text-sm">
                <button
                  type="button"
                  className="font-semibold text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
                >
                  Mot de passe oubli&eacute; ?
                </button>
              </div>

            </div>
            <div className="mt-2">
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" />
            <label
              htmlFor="remember-me"
              className="text-sm font-medium leading-none text-slate-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Se souvenir de moi
            </label>
          </div>

          <div>
            <Button type="submit" className="w-full">
              Se connecter
            </Button>
          </div>
        </form>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-sm font-medium">
              <span className="px-6 text-slate-500 bg-white">Ou continuer avec</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <Button variant="outline" className="w-full">
              Google
            </Button>
            <Button variant="outline" className="w-full">
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
