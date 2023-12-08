import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { login } from '../../features/auth/authSlice';

export default function Register() {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = async (data) => {
		const res = await dispatch(
			login({
				username: data.username,
				password: data.password,
			}),
		);
		console.log(res);
		if (res?.payload?.success) {
			if (res?.payload?.is_vendor) {
				navigate.push('/');
			} else {
				navigate.push('/');
			}
		} else {
			toast.error('Account does not exists! Please create an account.');
		}
	};
	return (
		<>
			<Form form={form} onFinish={onFinish} className='ps-form--account'>
				<div className='ps-tab active' id='sign-in'>
					<div className='ps-form__content'>
						<h5>Account Registration</h5>
						<div className='form-group'>
							<Form.Item
								name='first_name'
								rules={[
									{
										required: true,
										message: 'First name is required',
									},
								]}
							>
								<Input
									className='form-control'
									placeholder='First name'
								/>
							</Form.Item>
						</div>
                        <div className='form-group'>
							<Form.Item
								name='last_name'
								rules={[
									{
										required: true,
										message: 'Last name is required',
									},
								]}
							>
								<Input
									className='form-control'
									placeholder='Last name'
								/>
							</Form.Item>
						</div>
                        <div className='form-group'>
							<Form.Item
								name='email'
								rules={[
									{
										required: true,
										message: 'Please input your email',
									},
								]}
							>
								<Input
									className='form-control'
									type='email'
									placeholder='Email'
								/>
							</Form.Item>
						</div>
						<div className='form-group form-forgot'>
							<Form.Item
								name='password'
								rules={[
									{
										required: true,
										message: 'Please input your password',
									},
								]}
							>
								<Input
									className='form-control'
									type='password'
									placeholder='Password...'
								/>
							</Form.Item>
						</div>
                        <div className='form-group form-forgot'>
							<Form.Item
								name='confirm_password'
								rules={[
									{
										required: true,
										message: 'Confirm your passowrd before continuing',
									},
								]}
							>
								<Input
									className='form-control'
									type='password'
									placeholder='Confirm password...'
								/>
							</Form.Item>
						</div>
						<div className='form-group'>
							<Link to="/account/login">Log in</Link>
						</div>
						<div className='form-group submit'>
							<Button className='' htmlType='submit'>
                            Register
							</Button>
						</div>
					</div>
				</div>
			</Form>
		</>
	);
}
