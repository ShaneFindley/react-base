/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test'
    readonly PUBLIC_URL: string
  }
}

declare module '*.avif' {
  const src: string
  export default src
}

declare module '*.bmp' {
  const src: string
  export default src
}

declare module '*.gif' {
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}

declare module '*.svg' {
  import type * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
  SVGSVGElement
  > & { title?: string }>

  const src: string
  export default src
}

declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.scss' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '*.module.sass' {
  const classes: Readonly<Record<string, string>>
  export default classes
}

declare module '@ckeditor/ckeditor5-react' {
  import type ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  import { type EditorConfig } from '@ckeditor/ckeditor5-core/src/editor/editorconfig'
  import type Event from '@ckeditor/ckeditor5-utils/src/eventinfo'
  import type * as React from 'react'

  const CKEditor: React.FunctionComponent<{
    disabled?: boolean
    editor: typeof ClassicEditor
    data?: string
    id?: string
    config?: EditorConfig
    rows?: number
    onReady?: (editor: ClassicEditor) => void
    onChange?: (event: Event, editor: ClassicEditor) => void
    onBlur?: (event: Event, editor: ClassicEditor) => void
    onFocus?: (event: Event, editor: ClassicEditor) => void
    onError?: (event: Event, editor: ClassicEditor) => void
  }>
  export { CKEditor }
}

declare namespace T {
  export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
}
