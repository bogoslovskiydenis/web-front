import { Create, NumberInput, SimpleForm, TextInput } from 'react-admin';

export const MenuCreate = () => (
	<Create>
		<SimpleForm>
			<TextInput source="image" fullWidth/>
			<TextInput source="title" fullWidth/>
			<TextInput source="description" fullWidth/>
			<NumberInput source="price" />
			<NumberInput source="weight" />
		</SimpleForm>
	</Create>
);