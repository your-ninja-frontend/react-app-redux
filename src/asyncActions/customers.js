import { addManyCustomerAction } from '../store/customerReducer';

export const fetchCustomers = () => {
	return (dispatch) =>
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((responce) => responce.json())
			.then((json) => dispatch(addManyCustomerAction(json)));
};
