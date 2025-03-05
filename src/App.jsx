import Title from "./components/Title"
import Counter from "./components/Counter"
import './App.css'

import useCountdown from "./hooks/useCountdown";

function App() {
  const [days, hours, minutes, seconds] = useCountdown("May 1, 2025 00:00:00");
  return (
    <div className="App">
      <div className="container">
        <Title title="Contagem Regressiva" />
        <div className="countdown-container">
          <Counter title="Dias" number={days} />
          <Counter title="Horas" number={hours} />
          <Counter title="Minutos" number={minutes} />
          <Counter title="Segundos" number={seconds} />
        </div>
      </div>
    </div>
  )
}

export default App
