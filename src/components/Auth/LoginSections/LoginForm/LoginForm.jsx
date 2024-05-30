import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
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
    <div className={css.loginForm}>
      <ToastContainer />
      <Form
        name="normal_login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              type: 'email',
              message: 'Невірно введено E-mail!',
            },
            {
              required: true,
              message: 'Будь ласка, введіть свій E-mail!',
            },
          ]}
          className={css.loginFormItem}
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
              message: 'Будь ласка, введіть свій Пароль!',
            },
            {
              min: 8,
              message: 'Пароль повинен містити щонайменше 8 символів!',
            },
          ]}
          className={css.loginFormItem}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Пароль"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={css.loginFormButton}
          >
            Авторизація
          </Button>
          <div className={css.link}>
            Або <Link to="/registration">зареєструйтеся зараз!</Link>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
