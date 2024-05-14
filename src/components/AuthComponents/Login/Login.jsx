import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import css from './Login.module.css';

const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <div className={css.container}>
      <Form
        name="normal_login"
        className={css.loginForm}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={css.loginFormButton}
          >
            Log in
          </Button>
          {/* Or <a href=""> register now! </a> */}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
