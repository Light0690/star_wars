import { useState } from "react";
import UIInput from "./UIInput";

export default {
    title : 'Ui-Kit/UIInput',
    component: UIInput
}

const Template = (args) => {
    const [value,setValue] = useState('');
    const handleInputChange = value => {
        setValue(value)
    }

    return (
        <UIInput {...args} 
            value={value}
            handleInputChange={handleInputChange}
        />
    )
};

const props = {
    value : '',
    handleInputChange : () => console.log('input Change'),
    placeholder : 'placeholder',
    classes : '',
}

export const Default = Template.bind({});

Default.args = {
    ...props
};
