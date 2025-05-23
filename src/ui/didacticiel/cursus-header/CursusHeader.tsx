import './style.scss'
import { Exercice } from '@/payload-types'
import clsx from 'clsx'
import { CursusDocument } from '@/types/documents'
import { Tag } from '@/ui/tag/Tag'

interface Props extends React.HTMLAttributes<HTMLElement> {
  cursus: CursusDocument
}

export const CursusHeader: React.FC<Props> = ({ cursus, className, ...props }) => {
  const updatedAt = cursus.updatedAt ? new Date(cursus.updatedAt) : null

  const formatdDate = (date: Date) =>
    new Intl.DateTimeFormat('fr-FR', {
      dateStyle: 'long',
    }).format(date)

  const formatExercicesSize = (exercices: Exercice[]) =>
    [exercices?.length, exercices?.length > 1 ? 'exercices' : 'exercice'].join(' ')

  return (
    <div className={clsx('cursus_header', className)} {...props}>
      <h2>{cursus.title}</h2>
      <ul className="cursus_header__categories">
        {cursus.categories?.map(
          (category) =>
            typeof category !== 'number' && (
              <li key={category.id} className="cursus_header__categories__item">
                <Tag label={category.title} />
              </li>
            ),
        )}
      </ul>
      {(updatedAt || cursus.exercices) && (
        <div className="cursus_header__information">
          {updatedAt && <p>{formatdDate(updatedAt)}</p>}
          {cursus.exercices && (
            <p className="cursus_header__information__exercices_nmb">
              {formatExercicesSize(
                cursus.exercices.filter((e): e is Exercice => typeof e !== 'number'),
              )}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
