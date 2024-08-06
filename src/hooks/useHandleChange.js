import { useState } from "react";

export default function useHandleChange(initialValues) {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e) => {
        const { type, name, value, checked } = e.target;

        if (type === "checkbox") {
            setValues({
                ...values,
                [name]: checked
            });
        } else if (type === "radio") {
            setValues({
                ...values,
                [name]: value
            });
        } else {
            setValues({
                ...values,
                [name]: value
            });
        }
    };

    return {
        values, 
        handleChange
    };
}
