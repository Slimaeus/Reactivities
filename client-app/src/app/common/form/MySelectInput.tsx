import { useField } from 'formik';
import { Form, Label, Select } from 'semantic-ui-react';

interface IMySelectInputProps {
    placeholder: string
    name: string
    options: any
    label?: string
}

export function MySelectInput(props: IMySelectInputProps) {
    const [field, meta, helpers] = useField(props.name)

    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select
                clearable
                options={props.options}
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                placeholder={props.placeholder}

            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    );
}
