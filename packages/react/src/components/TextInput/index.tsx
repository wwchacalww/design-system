import { ComponentProps, forwardRef, Ref } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
}

export const TextInput = forwardRef<Ref<HTMLInputElement>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref as any} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
