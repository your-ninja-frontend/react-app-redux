import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './asyncActions/customers';

function App() {
	const dispatch = useDispatch();
	const cash = useSelector((state) => state.cash.cash);
	const customers = useSelector((state) => state.customers.customers)

	const addCash = (cash) => {
		dispatch({ type: 'ADD_CASH', payload: cash })
	}
	const getCash = (cash) => {
		dispatch({ type: 'GET_CASH', payload: cash })
	}

	const addCustomer = (name) => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = (customer) => {
		dispatch(removeCustomerAction(customer.id))
	}

	return (
		<div className='App'>
			<div className='cash'>{cash}</div>
			<div className='buttons'>
				<button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
				<button onClick={() => getCash(Number(prompt()))}>Вывести</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>Загрузить из базы</button>
			</div>
			{customers.length ?
				<div>
					{customers.map((customer) =>
						<div className='customer' onClick={() => removeCustomer(customer)}>
							{customer.name}
						</div>
					)}
				</div>
				:
				<div style={{ fontSize: 30 }}>Клиентов нет.</div>
			}
		</div>);
}

export default App;
