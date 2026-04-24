import { Button, Card, Form, Input, Space, Typography, message } from 'antd'

type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ContactPage() {
  const [api, contextHolder] = message.useMessage()

  const onFinish = async (values: ContactFormValues) => {
    void values
    await api.success('Form submitted (demo). Wire this to your API/email service.')
  }

  return (
    <Space orientation="vertical" size={16} style={{ width: '100%' }}>
      {contextHolder}
      <Typography.Title level={2} style={{ margin: 0 }}>
        Contact
      </Typography.Title>

      <Card style={{ maxWidth: 720 }}>
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
    </Space>
  )
}

