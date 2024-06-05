
import { CircularProgress, Fab, useTheme } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save'
import { type FormikContextType, useFormikContext } from 'formik'
import { type CSSProperties } from 'react'
import ConfirmationDialog from '../common/confirmation-dialog/confirmation-dialog'
import { useCallbackPrompt } from '../react-router/use-callback-prompt'

interface Props<T = any> {
  disableOnError?: boolean
  makeLabel?: (formik: FormikContextType<T>) => string
  marginTop?: number
  style?: CSSProperties
  promptWhen?: 'NEVER' | 'LOCATION_CHANGE' | 'PATHNAME_CHANGE'
}

export default function FormikSubmitButton<T = any> ({
  disableOnError,
  makeLabel,
  marginTop,
  style = {},
  promptWhen = 'LOCATION_CHANGE'
}: Props<T>) {
  const formikData = useFormikContext<T>()
  const { dirty, submitForm, isSubmitting, errors } = formikData

  const { showPrompt, confirmNavigation, cancelNavigation } =
        useCallbackPrompt((dirty || isSubmitting) &&
            (promptWhen === 'LOCATION_CHANGE' ||
                (promptWhen === 'PATHNAME_CHANGE')))

  const hasError = Object.keys(errors).length > 0

  const theme = useTheme()
  const gap = theme.spacing(3)
  const zIndex = theme.zIndex.speedDial

  const generatedLabel = makeLabel?.(formikData)

  return <>
        <ConfirmationDialog
            show={showPrompt}
            title={'Please Confirm'}
            children='It looks like you have been editing something. If you leave before saving, your changes will be lost.'
            onCancel={() => { cancelNavigation() }}
            onConfirm={() => { confirmNavigation() }}
            maxWidth={'sm'}
            showCloseButton={true}
        />
    a
        <div
            style={{
              width: '100%',
              position: 'sticky',
              bottom: gap,
              marginTop: marginTop ?? gap,
              zIndex,
              ...style,
              display: 'flex',
              justifyContent: 'flex-end'
            }}
        >
            <Fab
                color='secondary'
                size='large'
                variant='extended'
                disabled={
                    isSubmitting ||
                    !dirty ||
                    (disableOnError && hasError)
                }
                onClick={() => { submitForm() }}
            >
                {generatedLabel ?? (isSubmitting ? 'Saving' : 'Save')}&nbsp;
                {isSubmitting ? <CircularProgress color='inherit' size={20} /> : <SaveIcon />}
            </Fab>
        </div>
    </>
}
