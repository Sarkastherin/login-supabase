export function InputComponent({theme, id, label, type, placeholder}) {
  return (
    <div>
      <label
        htmlFor={id}
        className={`block text-sm font-medium text-gray-600 ${theme==='dark' ? 'dark:text-gray-200':''}`}
      >
        {label}
      </label>

      <input
        type={type ? type : 'text'}
        id={id}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-transparent ${theme==='dark' ? 'dark:border-gray-500  dark:text-white': ''}`}
      />
    </div>
  );
}
export function Input({theme, id, type, placeholder}) {
  return (
      <input
        type={type ? type : 'text'}
        id={id}
        placeholder={placeholder}
        className={`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-transparent ${theme==='dark' ? 'dark:border-gray-500  dark:text-white': ''}`}
      />
  );
}
export function Select({theme, id, emptyValue, options=[]}) {
  return (
    <select
    name={id}
    id={id}
    className={`mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm bg-transparent ${theme==='dark' ? 'dark:border-gray-500  dark:text-white': ''}`}
  >
    <option value="">{emptyValue}</option>
    {options.map(item => (
      <option key={item.value} value={item.value}>
        {item.label}
      </option>
    ))}
  </select>
  );
}
