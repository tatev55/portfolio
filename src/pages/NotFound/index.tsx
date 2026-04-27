import { Button, Result } from 'antd'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import type { NotFoundPageProps } from './types'

export const NotFoundPage: FC<NotFoundPageProps> = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link to="/">Back home</Link>
        </Button>
      }
    />
  )
}

