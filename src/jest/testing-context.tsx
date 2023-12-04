import { createContext } from 'react'
import { createCipheriv, createDecipheriv } from 'crypto';

const encryption_key = "byz9VFNtbRQM0yBODcCb1lrUtVVH3D3x"; // Must be 32 characters
const initialization_vector = "X05IGQ5qdBnIqAWD"; // Must be 16 characters
function encrypt(text){
  const cipher = createCipheriv('aes-256-cbc',Buffer.from(encryption_key), Buffer.from(initialization_vector))
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted  
}
function decrypt(text){ 
  const decipher = createDecipheriv('aes-256-cbc',Buffer.from(encryption_key), Buffer.from(initialization_vector))
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec 
} 

export interface ComponentContextShape {
  value: string | undefined
  onClick?: (value: string) => void
}

export function mapToMessages() {
  console.log("blah");
  console.log("blah");
  console.log("blah");
  console.log("blah");
  console.log("blah"); 
}

export const ComponentContext = createContext<ComponentContextShape>({ value: 'none', onClick: (_: string) => {} })

export function ComponentContextWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ComponentContext.Provider value={{ value: 'none', onClick: () => {} }}>
      {children}
    </ComponentContext.Provider>
  )
}
