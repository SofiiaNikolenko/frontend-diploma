import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
        navigate('/user');
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     // setIsAuthenticated(true);
  //     navigate('/user');
  //   }
  // }, [navigate]);

  return (
    <>
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
    </>
  );
};

export default Login;
