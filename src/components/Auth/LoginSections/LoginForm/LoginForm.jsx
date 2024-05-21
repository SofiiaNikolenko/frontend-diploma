import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const navigate = useNavigate();

  const onFinish = values => {
    axios
      .post('http://localhost:3000/users/login', {
        email: values.username,
        password: values.password,
      })
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        toast.success('Успішний вхід!');
        navigate('/');
        window.location.reload();
      })
      .catch(error => {
        console.error('There was an error!', error);
        if (error.response && error.response.status === 401) {
          toast.error('Неправильний email або пароль!');
        } else {
          toast.error('Щось пішло не так! Спробуйте ще раз.');
        }
      });
  };

  return (
    <>
      <ToastContainer />
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
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
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

export default LoginForm;
