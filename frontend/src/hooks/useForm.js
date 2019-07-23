import { useState } from "react";

function useForm() {
	const [form, setForm] = useState({});

	const handleInput = e => {
		e.persist();
		setForm(prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		}));
	};

	return [form, handleInput];
}

export default useForm;