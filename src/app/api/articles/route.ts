import { NextResponse } from 'next/server'
import { RawFilterValue } from '@/types/filters'
import { buildWhereFromFilters } from '@/utilities/payload/utils'
import { getCollectionWithParams } from '@/utilities/payload/collections'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)

    const rawFilters: Record<string, RawFilterValue> = {
      'categories.slug': {
        operator: 'equals',
        value: searchParams.get('category') ?? undefined,
      },
    }

    const where = buildWhereFromFilters(rawFilters)

    const articles = await getCollectionWithParams('articles', {
      depth: 2,
      sort: 'createdAt',
      where,
    })

    return NextResponse.json(articles)
  } catch (error) {
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de la récupération des articles.' },
      { status: 500 },
    )
  }
}
