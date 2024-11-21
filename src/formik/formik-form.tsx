import { Button, Container, Paper, Typography } from '@mui/material'
import Heading from '../common/heading/heading'

import FormikImg from './hero6.webp'
import DemoForm from './demo-form'


export default function FormikForm () {
  return <Container style={{ paddingTop: 10 }}>
        <Heading
            imgUrl={FormikImg}
            title='Formik & Yup'
            links={
                <>
                    <Button color='primary' variant='contained' href='https://formik.org/' target='_blank'>Formik</Button>
                    <Button color='primary' variant='contained' href='https://github.com/jquense/yup' target='_blank'>Yup</Button>
                </>
            }
        >
            <Typography variant="body2" color="text.secondary">
                Formik takes care of the repetitive and annoying stuff—keeping track of values/errors/visited
                fields, orchestrating validation, and handling submission—so you don't have to. This means you
                spend less time wiring up state and change handlers and more time focusing on your business logic.
            </Typography>
            <br />
            <Typography variant="body2" color="text.secondary">
                Yup is a schema builder for runtime value parsing and validation. Define a schema, transform
                a value to match, assert the shape of an existing value, or both. Yup schema are extremely
                expressive and allow modeling complex, interdependent validations, or value transformation.
            </Typography>
        </Heading>

        <br />
        <br />

        <Paper>
            <DemoForm />
        </Paper>
    </Container>
}
