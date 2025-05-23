/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    users: User;
    media: Media;
    articles: Article;
    exercices: Exercice;
    cursus: Cursus;
    categories: Category;
    events: Event;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    articles: ArticlesSelect<false> | ArticlesSelect<true>;
    exercices: ExercicesSelect<false> | ExercicesSelect<true>;
    cursus: CursusSelect<false> | CursusSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    events: EventsSelect<false> | EventsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    homepage: Homepage;
    process: Process;
  };
  globalsSelect: {
    homepage: HomepageSelect<false> | HomepageSelect<true>;
    process: ProcessSelect<false> | ProcessSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  firstname: string;
  lastname: string;
  avatar?: (number | null) | Media;
  fullName?: string | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt: string;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    avatar?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    avatar_large?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    content?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles".
 */
export interface Article {
  id: number;
  slug?: string | null;
  title: string;
  description: string;
  categories?: (number | Category)[] | null;
  author?: (number | null) | User;
  blocks?:
    | (
        | {
            richText?: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            } | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'content';
          }
        | {
            cards?:
              | {
                  title: string;
                  description: string;
                  internalLink: {
                    label: string;
                    article: number | Article;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'discoveries';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  slug?: string | null;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exercices".
 */
export interface Exercice {
  id: number;
  slug?: string | null;
  title: string;
  blocks?:
    | {
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cursus".
 */
export interface Cursus {
  id: number;
  slug?: string | null;
  title: string;
  exercices?: (number | Exercice)[] | null;
  categories?: (number | Category)[] | null;
  blocks?:
    | {
        richText?: {
          root: {
            type: string;
            children: {
              type: string;
              version: number;
              [k: string]: unknown;
            }[];
            direction: ('ltr' | 'rtl') | null;
            format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
            indent: number;
            version: number;
          };
          [k: string]: unknown;
        } | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'content';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events".
 */
export interface Event {
  id: number;
  slug?: string | null;
  title: string;
  description: string;
  'on-site': boolean;
  date: string;
  'meeting-location': string;
  capacity: number;
  status: 'Programmé' | 'Confirmé' | 'Annulé' | 'Reporté';
  categories?: (number | Category)[] | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null)
    | ({
        relationTo: 'articles';
        value: number | Article;
      } | null)
    | ({
        relationTo: 'exercices';
        value: number | Exercice;
      } | null)
    | ({
        relationTo: 'cursus';
        value: number | Cursus;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'events';
        value: number | Event;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  firstname?: T;
  lastname?: T;
  avatar?: T;
  fullName?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        avatar?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        avatar_large?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        content?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "articles_select".
 */
export interface ArticlesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  description?: T;
  categories?: T;
  author?: T;
  blocks?:
    | T
    | {
        content?:
          | T
          | {
              richText?: T;
              id?: T;
              blockName?: T;
            };
        discoveries?:
          | T
          | {
              cards?:
                | T
                | {
                    title?: T;
                    description?: T;
                    internalLink?:
                      | T
                      | {
                          label?: T;
                          article?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "exercices_select".
 */
export interface ExercicesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  blocks?:
    | T
    | {
        content?:
          | T
          | {
              richText?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cursus_select".
 */
export interface CursusSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  exercices?: T;
  categories?: T;
  blocks?:
    | T
    | {
        content?:
          | T
          | {
              richText?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "events_select".
 */
export interface EventsSelect<T extends boolean = true> {
  slug?: T;
  title?: T;
  description?: T;
  'on-site'?: T;
  date?: T;
  'meeting-location'?: T;
  capacity?: T;
  status?: T;
  categories?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: number;
  blocks?:
    | (
        | {
            title: string;
            subtitle: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            image?: (number | null) | Media;
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'introduction';
          }
        | {
            title: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            image?: (number | null) | Media;
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'introduction_events';
          }
        | {
            title: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            'highlight-video': {
              title: string;
              miniature: number | Media;
              video: number | Media;
            };
            members?:
              | {
                  'profile-picture': number | Media;
                  id?: string | null;
                }[]
              | null;
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'introduction_team';
          }
        | {
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'instagram';
          }
        | {
            cards?:
              | {
                  title: string;
                  description: string;
                  internalLink: {
                    label: string;
                    article: number | Article;
                  };
                  id?: string | null;
                }[]
              | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'discoveries';
          }
        | {
            type: 'Les trois prochains événements';
            id?: string | null;
            blockName?: string | null;
            blockType: 'events';
          }
        | {
            title: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'cursus';
          }
        | {
            type: 'Les trois derniers articles';
            id?: string | null;
            blockName?: string | null;
            blockType: 'articles';
          }
      )[]
    | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "process".
 */
export interface Process {
  id: number;
  blocks?:
    | (
        | {
            title: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'page_hero_banner';
          }
        | {
            title: string;
            subtitle: string;
            item?:
              | {
                  title: string;
                  description: string;
                  id?: string | null;
                }[]
              | null;
            image?: (number | null) | Media;
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'workshop_charter';
          }
        | {
            title: string;
            description: {
              root: {
                type: string;
                children: {
                  type: string;
                  version: number;
                  [k: string]: unknown;
                }[];
                direction: ('ltr' | 'rtl') | null;
                format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
                indent: number;
                version: number;
              };
              [k: string]: unknown;
            };
            videos?:
              | {
                  title: string;
                  miniature: number | Media;
                  video: number | Media;
                  id?: string | null;
                }[]
              | null;
            background?: boolean | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'feedback';
          }
      )[]
    | null;
  _status?: ('draft' | 'published') | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage_select".
 */
export interface HomepageSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        introduction?:
          | T
          | {
              title?: T;
              subtitle?: T;
              description?: T;
              image?: T;
              background?: T;
              id?: T;
              blockName?: T;
            };
        introduction_events?:
          | T
          | {
              title?: T;
              description?: T;
              image?: T;
              background?: T;
              id?: T;
              blockName?: T;
            };
        introduction_team?:
          | T
          | {
              title?: T;
              description?: T;
              'highlight-video'?:
                | T
                | {
                    title?: T;
                    miniature?: T;
                    video?: T;
                  };
              members?:
                | T
                | {
                    'profile-picture'?: T;
                    id?: T;
                  };
              background?: T;
              id?: T;
              blockName?: T;
            };
        instagram?:
          | T
          | {
              background?: T;
              id?: T;
              blockName?: T;
            };
        discoveries?:
          | T
          | {
              cards?:
                | T
                | {
                    title?: T;
                    description?: T;
                    internalLink?:
                      | T
                      | {
                          label?: T;
                          article?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
        events?:
          | T
          | {
              type?: T;
              id?: T;
              blockName?: T;
            };
        cursus?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        articles?:
          | T
          | {
              type?: T;
              id?: T;
              blockName?: T;
            };
      };
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "process_select".
 */
export interface ProcessSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        page_hero_banner?:
          | T
          | {
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        workshop_charter?:
          | T
          | {
              title?: T;
              subtitle?: T;
              item?:
                | T
                | {
                    title?: T;
                    description?: T;
                    id?: T;
                  };
              image?: T;
              background?: T;
              id?: T;
              blockName?: T;
            };
        feedback?:
          | T
          | {
              title?: T;
              description?: T;
              videos?:
                | T
                | {
                    title?: T;
                    miniature?: T;
                    video?: T;
                    id?: T;
                  };
              background?: T;
              id?: T;
              blockName?: T;
            };
      };
  _status?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}