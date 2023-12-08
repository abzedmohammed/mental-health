import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { login } from '../../features/auth/authSlice';

export default function Login() {
	const [form] = Form.useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onFinish = async (data) => {
		const res = await dispatch(login(data));

		console.log(res);
		if (res?.payload?.success) {
			if (res?.payload?.is_vendor) {
				navigate.push('/');
			} else {
				navigate.push('/');
			}
		} else {
			toast.error(res?.payload?.non_field_errors?.map((item) => item));
		}
	};
	return (
		<>
			<Form form={form} onFinish={onFinish} className='ps-form--account'>
				<div className='ps-tab active' id='sign-in'>
					<div className='ps-form__content'>
						<h5 className='text-[red] text-6xl'>Hello Diana, Login To Your Account</h5>
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
						<div className='form-group'>
							<Link to='/account/register'>Register</Link>
						</div>
						<div className='form-group submit'>
							<Button className='' htmlType='submit'>
								Login
							</Button>
						</div>
					</div>
				</div>
			</Form>
		</>
	);
}
