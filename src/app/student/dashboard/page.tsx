import { mockStudents, mockOffers, mockApplications } from '@/lib/mock';
import { OfferCard } from '@/components/cards/offer-card';
import { EmptyState } from '@/components/feedback/empty-state';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function StudentDashboard() {
  const student = mockStudents[0];
  const recommendedOffers = mockOffers;
  const recentApplications = mockApplications;

  return (
    <div className="container max-w-6xl py-8 mx-auto space-y-8">
      {/* Header Section */}
      <section className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-primary/10">
            <AvatarImage src={student.avatarUrl} alt={student.firstName} />
            <AvatarFallback>{student.firstName[0]}{student.lastName[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Bonjour, {student.firstName} 👋
            </h1>
            <p className="mt-1 text-slate-500">{student.headline}</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 p-4 bg-white border border-slate-100 rounded-xl w-full md:min-w-[250px] shadow-sm">

          <div className="flex justify-between text-sm font-medium">
            <span className="text-slate-700">Profil complété</span>
            <span className="text-primary">{student.profileCompletion}%</span>
          </div>
          <Progress value={student.profileCompletion} className="h-2" />
          <p className="text-xs text-slate-500">Complétez votre profil pour plus de visibilité.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Main Content - Recommendations */}
        <section className="space-y-4 md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">Offres recommandées</h2>
            <button
              type="button"
              className="text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 rounded"
            >
              Voir tout
            </button>

          </div>
          
          {recommendedOffers.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {recommendedOffers.map((offer) => (
                <OfferCard key={offer.id} offer={offer} />
              ))}
            </div>
          ) : (
            <EmptyState 
              title="Aucune recommandation" 
              description="Nous n'avons pas d'offres correspondant à votre profil pour le moment." 
              actionLabel="Mettre à jour mes critères"
            />
          )}
        </section>

        {/* Sidebar - Timeline */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">Vos candidatures</h2>
          
          <div className="p-4 bg-white border rounded-xl border-slate-200">
            {recentApplications.length > 0 ? (
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-6">
                  {recentApplications.map((app, index) => (
                    <div key={app.id}>
                      <div className="flex items-start gap-3">
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-3 h-3 rounded-full ${app.status === 'INTERVIEW' ? 'bg-accent' : 'bg-primary'}`} />
                          {index !== recentApplications.length - 1 && (
                            <div className="w-0.5 h-12 bg-slate-100 mt-2" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">{app.offer?.title}</p>
                          <p className="text-xs text-slate-500">{app.offer?.company?.name}</p>
                          <p className="mt-1 text-xs font-semibold text-slate-700">{app.status}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <EmptyState 
                title="Aucune candidature" 
                description="Vous n'avez pas encore postulé à des offres." 
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
