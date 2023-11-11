import { Dispatch, SetStateAction} from "react";

type inputProps = {
  value: string,
  setValue:Dispatch<SetStateAction<string>>
}

function InputField({value, setValue}:inputProps) {
  
  function handleInputChange(event:React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <input value={value} onChange={handleInputChange} placeholder="Search..."
    className="w-[30%] p-3 m-auto outline-none border border-gray-400 block mt-3 rounded-md" />
  );
}

export default InputField;