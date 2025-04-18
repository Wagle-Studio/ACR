import { LayoutWithChildren } from '@/types/app'
import { getEntryBySlugCached } from '@/utilities/payload/cached'
import { getExerciceSlugsFromCursus } from '@/utilities/payload/utils'
import { ExerciceLayout } from '@/ui/didacticiel/exercice-layout/ExerciceLayout'

type Props = LayoutWithChildren<'cursus_slug' | 'exercice_slug'>

export default async function ExerciceRootLayout({ children, params }: Props) {
  const { exercice_slug, cursus_slug } = await params

  const exercice = await getEntryBySlugCached('exercices', exercice_slug)
  const cursus = await getEntryBySlugCached('cursus', cursus_slug)
  const exerciceSlugs = cursus ? getExerciceSlugsFromCursus(cursus) : []

  if (!exercice || !cursus) {
    return <div>Exercice introuvable</div>
  }

  return (
    <ExerciceLayout cursus={cursus} exercice={exercice} exerciceSlugs={exerciceSlugs}>
      {children}
    </ExerciceLayout>
  )
}
