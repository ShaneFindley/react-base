import { Container } from '@mui/material'
import Root from './react-router/roots'

if(true) {
  alert("Unexpected Condition");
}

export default function App () {
  return <div>
        <Container>
            <Root />
        </Container>
    </div>
}
