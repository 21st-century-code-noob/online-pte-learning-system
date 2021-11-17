import { Visibility, VisibilityOff } from "@material-ui/icons"
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import React from "react"

const FormItem = (props) => {
  return (
    <FormControl
      required={props.required}
      className={props.className}
      variant="standard"
      margin="normal"
      fullWidth={true}
      error={props.formControlErrors}>
      <InputLabel htmlFor={props.className}>{props.inputLabel}</InputLabel>
      <Input id={props.className} type={props.type} aria-describedby={props.ariaDescribe} />
      {props.formControlErrors && <FormHelperText>{props.formControlErrors.message}</FormHelperText>}
    </FormControl>
  )
}

const FormItemPassword = (props) => {
  const [passwordVisibility, setPasswordVisibility] = React.useState<boolean>(false)
  const handlePasswordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility)
  }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }
  return (
    <FormControl
      required={props.required}
      className={props.className}
      variant="standard"
      margin="normal"
      fullWidth={true}
      error={props.hasError}>
      <InputLabel htmlFor={props.className}>{props.inputLabel}</InputLabel>
      <Input
        id={props.className}
        type={props.type}
        aria-describedby={props.ariaDescribe}
        {...props.register}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handlePasswordVisibilityChange}
              onMouseDown={handleMouseDownPassword}>
              {passwordVisibility ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {props.formControlErrors && <FormHelperText>{props.formControlErrors.message}</FormHelperText>}
    </FormControl>
  )
}

export default { FormItem, FormItemPassword }
