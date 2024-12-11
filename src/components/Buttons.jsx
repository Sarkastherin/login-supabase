export function ButtonPrimary({children, type, handleClick}) {
  return (
    <button
      onClick={handleClick}
      type={type? type : 'button'}
      className={`inline-block rounded border border-indigo-600 bg-indigo-600 px-10 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500`}
    >
      {children}
    </button>
  );
}
