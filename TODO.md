# TODO - Fix Auth actions + Responsive UI

## Étape 1: Corriger Auth Register (boutons Étudiant/Entreprise)
- [x] Fichier: `src/app/(auth)/register/page.tsx`
- [x] Ajouter une action mockée (navigation via `useRouter`) pour chaque bouton.
- [x] Ajouter responsive mobile-first (grille des champs en 1 colonne <640).
- [x] S’assurer que hover/focus/disabled sont corrects via le composant `<Button>`.


## Étape 2: Corriger Auth Login (supprimer lien mort)

- [x] Fichier: `src/app/(auth)/login/page.tsx`
- [x] Remplacer `/forgot-password` par un élément non-lié.
- [x] Ajouter mobile-first spacing/padding.


## Étape 3: Responsive Dashboard Student
- [x] Fichier: `src/app/student/dashboard/page.tsx`
- [x] Remplacer `min-w-[250px]` par `w-full md:min-w-[250px]`.
- [x] Mettre un focus/hover accessible sur le CTA “Voir tout”.


## Étape 4: Responsive Create Offer Wizard
- [x] Fichier: `src/app/company/create-offer/page.tsx`
- [x] Adapter l’étape 5: `grid-cols-2` -> `grid-cols-1 md:grid-cols-2`.


## Étape 5: Validation
- [ ] Lancer `pnpm -C bridgeup lint`
- [ ] Lancer `pnpm -C bridgeup build`
- [ ] Vérifier visuellement les 3 breakpoints: <640, 640–1024, ≥1024.


