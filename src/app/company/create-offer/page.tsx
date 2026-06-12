'use client'

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Check, ChevronRight, ChevronLeft, Save } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const createOfferSchema = z.object({
  title: z.string().min(5, "Le titre doit faire au moins 5 caractères"),
  contractType: z.enum(["STAGE", "ALTERNANCE", "CDI", "CDD"]),
  location: z.string().min(2, "Veuillez préciser la localisation"),
  remote: z.enum(["FULL", "HYBRID", "NO"]),
  description: z.string().min(20, "La description doit faire au moins 20 caractères"),
  requirements: z.string().min(10, "Veuillez préciser les pré-requis"),
  salary: z.string().optional(),
})

type FormValues = z.infer<typeof createOfferSchema>

const defaultValues: Partial<FormValues> = {
  title: '',
  location: '',
  description: '',
  requirements: '',
  salary: '',
}

const steps = [
  { id: 1, name: 'Informations Générales' },
  { id: 2, name: 'Détails du poste' },
  { id: 3, name: 'Pré-requis' },
  { id: 4, name: 'Avantages & Rémunération' },
  { id: 5, name: 'Révision' },
]

export default function CreateOfferWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState<Date | null>(null)

  const form = useForm<FormValues>({
    resolver: zodResolver(createOfferSchema),
    defaultValues,
    mode: 'onChange'
  })

  // Autosave logic (Debounced)
  useEffect(() => {
    const subscription = form.watch((value) => {
      setIsSaving(true)
      const timeout = setTimeout(() => {
        // Mock API call to save draft
        console.log('Autosaving draft...', value)
        setLastSaved(new Date())
        setIsSaving(false)
      }, 1000)
      return () => clearTimeout(timeout)
    })
    return () => subscription.unsubscribe()
  }, [form])

  const nextStep = async () => {
    type FieldName = keyof FormValues;
    let fieldsToValidate: FieldName[] = [];
    
    if (currentStep === 1) fieldsToValidate = ['title', 'contractType', 'location', 'remote'];
    if (currentStep === 2) fieldsToValidate = ['description'];
    if (currentStep === 3) fieldsToValidate = ['requirements'];
    if (currentStep === 4) fieldsToValidate = ['salary'];

    const isStepValid = await form.trigger(fieldsToValidate);
    if (isStepValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    }
  };

  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1))

  const onSubmit = (data: FormValues) => {
    toast.success("L'offre a été publiée avec succès !")
    console.log('Final Submit', data)
  }

  return (
    <div className="container max-w-4xl py-8 mx-auto space-y-8">
      {/* Header & Stepper */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">Créer une offre</h1>
          <div className="flex items-center space-x-2 text-sm text-slate-500">
            {isSaving ? (
              <span className="flex items-center"><Save className="w-4 h-4 mr-1 animate-pulse" /> Sauvegarde...</span>
            ) : lastSaved ? (
              <span className="flex items-center"><Check className="w-4 h-4 mr-1 text-primary" /> Brouillon enregistré à {lastSaved.toLocaleTimeString()}</span>
            ) : null}
          </div>
        </div>

        {/* Stepper UI */}
        <div className="flex items-center justify-between w-full mt-8">
          {steps.map((step, i) => (
            <div key={step.name} className="relative flex flex-col items-center flex-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-medium z-10 transition-colors
                ${currentStep > step.id ? 'bg-primary text-white' : currentStep === step.id ? 'bg-primary border-2 border-primary text-white' : 'bg-slate-100 text-slate-400 border-2 border-slate-200'}`}>
                {currentStep > step.id ? <Check className="w-5 h-5" /> : step.id}
              </div>
              <span className={`mt-2 text-xs font-medium ${currentStep >= step.id ? 'text-slate-900' : 'text-slate-400'} hidden md:block absolute -bottom-6 text-center w-32`}>
                {step.name}
              </span>
              {i !== steps.length - 1 && (
                <div className={`absolute top-4 left-1/2 w-full h-[2px] -z-0 ${currentStep > step.id ? 'bg-primary' : 'bg-slate-200'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="pt-8 md:pt-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <Card className="border-slate-200 shadow-sm min-h-[400px]">
              <CardContent className="p-6 md:p-8">
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <h2 className="text-xl font-semibold text-slate-900">1. Informations Générales</h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Titre de l'offre</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Développeur Fullstack React" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="contractType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de contrat</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="STAGE">Stage</SelectItem>
                                <SelectItem value="ALTERNANCE">Alternance</SelectItem>
                                <SelectItem value="CDI">CDI</SelectItem>
                                <SelectItem value="CDD">CDD</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="remote"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Télétravail</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez..." />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="FULL">100% Remote</SelectItem>
                                <SelectItem value="HYBRID">Hybride</SelectItem>
                                <SelectItem value="NO">Sur site uniquement</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Localisation (Ville)</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: Paris, France" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <h2 className="text-xl font-semibold text-slate-900">2. Détails du poste</h2>
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description globale de la mission</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Décrivez les missions, le contexte et l'équipe..." 
                              className="min-h-[200px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <h2 className="text-xl font-semibold text-slate-900">3. Pré-requis du candidat</h2>
                    <FormField
                      control={form.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Profil recherché (Compétences, diplôme, etc.)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Ex: Être en M1/M2, maîtriser TS..." 
                              className="min-h-[200px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <h2 className="text-xl font-semibold text-slate-900">4. Avantages & Rémunération</h2>
                    <FormField
                      control={form.control}
                      name="salary"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Rémunération ou Gratification (Optionnel)</FormLabel>
                          <FormControl>
                            <Input placeholder="Ex: 1200€ brut / mois ou 'Selon profil'" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <h2 className="text-xl font-semibold text-slate-900">5. Révision et Validation</h2>
                    <div className="p-6 space-y-4 border rounded-xl bg-slate-50 border-slate-100">
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Titre</h3>
                        <p className="text-lg font-semibold text-slate-900">{form.getValues('title')}</p>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Contrat</h3>
                          <Badge variant="secondary" className="mt-1">{form.getValues('contractType')}</Badge>
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-slate-500">Remote</h3>
                          <Badge variant="outline" className="mt-1">{form.getValues('remote')}</Badge>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-slate-500">Description</h3>
                        <p className="mt-1 text-sm text-slate-700 line-clamp-3">{form.getValues('description')}</p>
                      </div>
                    </div>
                  </div>
                )}

              </CardContent>
              <div className="flex justify-between p-6 border-t border-slate-100 bg-slate-50/50 rounded-b-xl">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  <ChevronLeft className="w-4 h-4 mr-2" /> Retour
                </Button>
                
                {currentStep < steps.length ? (
                  <Button type="button" onClick={nextStep}>
                    Suivant <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit">
                    <Check className="w-4 h-4 mr-2" /> Publier l'offre
                  </Button>
                )}
              </div>
            </Card>
          </form>
        </Form>
      </div>
    </div>
  )
}
