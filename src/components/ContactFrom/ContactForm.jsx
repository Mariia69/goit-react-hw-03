import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { nanoid } from 'nanoid'
import css from '../ContactFrom/ContactForm.module.css'


const ContactForm = ({ onSubmit }) => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().min(3).max(50).required(),
		number: Yup.string().min(3).max(50).required(),
	})

	return (
		<Formik
			initialValues={{ name: '', number: '' }}
			onSubmit={(values, actions) => {
				onSubmit({
					id: nanoid(),
					name: values.name,
					number: values.number,
				})
				actions.resetForm()
			}}
			validationSchema={validationSchema}
		>
			<Form>
				<div>
					<label htmlFor='name'>Name</label>
					<Field type='text' id='name' name='name' />
					<ErrorMessage name='name' component='span' />
				</div>
				<div>
					<label htmlFor='number'>Number</label>
					<Field type='text' id='number' name='number' />
					<ErrorMessage name='number' component='span' />
				</div>
				<button type='submit'>Add contact</button>
			</Form>
		</Formik>
	)
}

export default ContactForm
