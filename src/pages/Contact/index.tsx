import { Button, Card, Flex, Form, Input, Space, Typography, message } from 'antd'
import type { FC } from 'react'
import styles from './styles.module.css'
import type { ContactFormValues, ContactPageProps } from './types'

export const ContactPage: FC<ContactPageProps> = () => {
  const [api, contextHolder] = message.useMessage()

  const onFinish = async (values: ContactFormValues) => {
    void values
    await api.success('Form submitted (demo). Wire this to your API/email service.')
  }

  return (
    <Flex vertical gap={16} className={styles.root}>
      {contextHolder}
      <Typography.Title level={2}>Contact</Typography.Title>

      <Card className={styles.card}>
        <Form layout="vertical" onFinish={onFinish} requiredMark="optional">
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input placeholder="Your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please enter your email' },
              { type: 'email', message: 'Please enter a valid email' },
            ]}
          >
            <Input placeholder="you@example.com" />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter a message' }]}
          >
            <Input.TextArea placeholder="Tell me about your project..." rows={5} />
          </Form.Item>

          <Space>
            <Button type="primary" htmlType="submit">
              Send
            </Button>
            <Button htmlType="reset">Reset</Button>
          </Space>
        </Form>
      </Card>
    </Flex>
  )
}

