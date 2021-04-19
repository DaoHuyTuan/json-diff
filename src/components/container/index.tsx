import React, { useMemo } from 'react'
import { ContainerProps } from '../../interfaces/index'
import clssNname from 'classnames/bind'
import styles from './container.module.css'

const Container = ({ children, classNames, ...props }: ContainerProps) => {
  let cx = clssNname.bind(styles)
  const clssNames = useMemo(() => {
    return cx({
      container: styles.container,
      [classNames]: classNames
    })
  }, [classNames, cx])

  return (
    <div className={clssNames} {...props}>
      {children}
    </div>
  )
}
export default Container
