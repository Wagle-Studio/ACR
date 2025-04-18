import { Link } from '@/ui/link/Link'

export default function NotFoundPage() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '32px',
        padding: '0px 48px',
      }}
    >
      <h1 className="with_bar_left">Page introuvable</h1>
      <p>La page que vous cherchez n&apos;existe pas ou a été déplacée.</p>
      <Link href="/" variant="primary">
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
