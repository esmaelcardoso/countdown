import "./Counter.css"

const Counter = ({ title, number }) => {
  return (
    <div className="counter">
      <p className="count-number">{number}</p>
      <p className="count-title">{title}</p>
    </div>
  )
}

export default Counter