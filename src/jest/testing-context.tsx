import { createContext } from 'react'

export interface ComponentContextShape {
  value: string | undefined
  onClick?: (value: string) => void
}

export const ComponentContext = createContext<ComponentContextShape>({ value: 'none', onClick: (_: string) => {} })

export function ComponentContextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ComponentContext.Provider value={{ value: 'none', onClick: () => {} }}>
      {children}
    </ComponentContext.Provider>
  )
}
