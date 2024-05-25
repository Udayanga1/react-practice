type InputProps = {
  label: string
  id: string
}

const Input = ({label, id}: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} />
    </p>
  )
}
export default Input