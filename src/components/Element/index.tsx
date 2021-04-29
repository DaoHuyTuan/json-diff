import React, { useMemo } from 'react'
import Container from '../Container'
import { ElementProps } from './interfaces'

const Element = ({
  name,
  className,
  theme,
  hidden,
  loading,
  disabled,
  children
}: ElementProps) => {
  const clssName = useMemo(() => {}, [
    className,
    theme,
    hidden,
    loading,
    disabled
  ])
  return <Container>{}</Container>
}

export default Element
