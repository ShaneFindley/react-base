
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import { isString } from 'lodash'

interface Props {
  show: boolean
  title: string
  children: React.ReactNode | string
  confirmLabel?: string
  cancelLabel?: string
  onConfirm?: () => void
  onCancel?: () => void
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  disableActions?: boolean
  showCloseButton?: boolean
}

export default function ConfirmationDialog (
  {
    show,
    title,
    children,
    confirmLabel,
    cancelLabel,
    onConfirm,
    onCancel,
    maxWidth = 'sm',
    disableActions = false
  }: Readonly<Props>
) {
  const confirm = confirmLabel ?? 'OK'
  const cancel = cancelLabel ?? 'Cancel'

  return <Dialog
            open={show}
            onClose={onCancel}
            maxWidth={maxWidth}
            fullWidth={true}
            scroll={'body'}
            keepMounted={false}
        >
          <DialogTitle children={title}/>
          <DialogContent>
              {
                  isString(children)
                    ? <Typography variant={'body1'} children={children} />
                    : children
              }
          </DialogContent>
          {
              !disableActions && <DialogActions style={{ padding: 24 }}>
                  <Button
                      color={'secondary'}
                      onClick={onCancel}
                      children={cancel}
                      variant='outlined'
                  />
                  <Button
                      autoFocus
                      children={confirm}
                      onClick={onConfirm}
                      variant='outlined'
                  />
              </DialogActions>
          }
      </Dialog>
}
