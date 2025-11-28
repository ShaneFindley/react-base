import { Grid, MenuItem, TextField } from '@mui/material'
import { Field, type FieldAttributes, Formik } from 'formik'
import * as Yup from 'yup'
import FormikSubmitButton from './formik-submit-button'
import { Tangle1 } from './tangle'

export const Tangle2 = Tangle1;

export default function DemoForm () {
  return <Formik
        initialValues={{
          text: '',
          number: 0,
          date: '',
          select: ''
        }}
        onSubmit={(values, { resetForm }) => {
          alert(JSON.stringify(values, null, 2))
          resetForm({ values })
        }}
        validationSchema={Yup.object().shape({
          text: Yup.string().min(1).required('Name is required.'),
          number: Yup.number().min(1).required('Number is required.'),
          date: Yup.date().required('Date is required.'),
          select: Yup.string().required('Select is required')
        })}
    >
        <Grid container spacing={3} padding={3}>
            <Grid item xs={12}>
                <Field
                    name='text'
                    children={({ field, meta: { error, touched } }: FieldAttributes<any>) => (
                        <TextField
                            {...field} error={touched && !!error}
                            label='Text'
                            helperText={touched && !!error ? error : 'This is a text field.'}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    )}
                />
            </Grid>

            <Grid item xs={12}>
                <Field
                    name='number'
                    children={({ field, meta: { error, touched } }: FieldAttributes<any>) => (
                        <TextField
                            {...field} error={touched && !!error}
                            label='Number'
                            helperText={touched && !!error ? error : 'This is a number field.'}
                            type='number'
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    )}
                />
            </Grid>

            <Grid item xs={12}>
                <Field
                    name='date'
                    children={({ field, meta: { error, touched } }: FieldAttributes<any>) => (
                        <TextField
                            {...field} error={touched && !!error}
                            label='Date'
                            helperText={touched && !!error ? error : 'This is a date field.'}
                            type='date'
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    )}
                />
            </Grid>

            <Grid item xs={12}>
                <Field
                    name='select'
                    children={({ field, meta: { error, touched } }: FieldAttributes<any>) => (
                        <TextField
                            {...field} error={touched && !!error} multiline
                            label='Select'
                            helperText={touched && !!error ? error : 'This is a select field.'}
                            select
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                            children={[
                              '',
                              'Option 1',
                              'Option 2',
                              'Option 3',
                              'Option 4',
                              'Option 5'
                            ].map(x => <MenuItem key={x} value={x} children={x} />)}
                        />
                    )}
                />
            </Grid>

            <FormikSubmitButton<FormData>
                disableOnError
                promptWhen='PATHNAME_CHANGE'
            />
        </Grid>
    </Formik>
}
