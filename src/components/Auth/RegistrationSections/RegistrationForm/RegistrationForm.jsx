import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './RegistrationForm.module.css';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = values => {
    axios
      .post('http://localhost:3000/users/register', {
        email: values.email,
        password: values.password,
      })
      .then(response => {
        form.resetFields();
        toast.success('Перевір пошту та пройди верифікацію!!');
        navigate('/login');
      })
      .catch(error => {
        if (error.response && error.response.status === 409) {
          toast.error('Email вже використовується!');
        } else {
          toast.error('Щось пішло не так! Спробуйте ще раз.');
        }
        console.error('There was an error!', error);
      });
  };

  return (
    <div className={css.container}>
      <ToastContainer />
      <div className={css.formContainer}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          className={css.form}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'Введено невірний E-mail!',
              },
              {
                required: true,
                message: 'Будь ласка, введіть свій E-mail!',
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
            label="Пароль"
            rules={[
              {
                required: true,
                message: 'Будь ласка, введіть свій пароль!',
              },
            ]}
            hasFeedback
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Пароль"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Підтвердіть пароль"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Будь ласка, підтвердіть свій пароль!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Новий пароль, який ви ввели, не збігається!')
                  );
                },
              }),
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Підтвердіть пароль"
            />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button
              type="primary"
              htmlType="submit"
              className={css.registrationFormButton}
            >
              Реєстрація
            </Button>
            <div className={css.link}>
              Якщо вже маєте акаунт - <Link to="/login"> авторизуйтеся!</Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RegistrationForm;
