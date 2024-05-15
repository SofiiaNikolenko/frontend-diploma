import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import css from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const onFinish = values => {
    axios
      .post('http://localhost:3000/users/login', {
        email: values.username,
        password: values.password,
      })
      .then(response => {
        console.log(response.data);
        const { token } = response.data;
        localStorage.setItem('token', token);
        navigate('/');
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  return (
    <>
      <Form
        name="normal_login"
        className={css.loginForm}
        initialValues={{
          remember: true,
        }}
        style={{
          maxWidth: 600,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="E-mail"
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
          Or <Link to="/registration"> register now! </Link>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
