import React from "react";

interface InputInterface {
    label: string
    placeholder: string
    onChange:  React.ChangeEventHandler<HTMLInputElement>
}

const Input = (props: InputInterface) => {
    return (
        <div className={`w-full my-3`}>
            <label
                htmlFor={"name"}
                className={`block text-sm font-light  text-white`}
            >
                {props.label}
            </label>
          
                <input
                    type={`text`}
                    name={`name`}
                    id={`name`}
                    className={`w-full rounded-[12px] bg-grey font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            
        </div>
    );
};

export default Input;