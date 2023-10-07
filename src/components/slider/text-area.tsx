import React from 'react'

interface InputInterface {
    label: string
    placeholder: string
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}


const TextArea = (props: InputInterface) => {
  return (
    <div className={`w-full my-3`}>
            <label
                htmlFor={"name"}
                className={`mt- block text-sm font-light text-white`}
            >
                {props.label}
            </label>
      
                <textarea
                    name={`name`}
                    id={`name`}
                    className={`w-full rounded-[12px] bg-grey font-medium text-[16px] pl-3 my-2 text-[#A7A7AB] border-tp-dark  py-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
        </div>
  )
}

export default TextArea