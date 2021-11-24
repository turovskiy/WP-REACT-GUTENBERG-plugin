import "./frontend.scss"
import React, { useState } from "react"
import ReactDOM from "react-dom"

const divsToUpdate = document.querySelectorAll(".wpReact-update-me")

divsToUpdate.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<OurComponent {...data} />, div)
  div.classList.remove("wpReact-update-me")
})

function OurComponent(props) {
  const [showValueInput1, setShowValueInput1] = useState(false)
  const [showValueInput2, setShowValueInput2] = useState(false)

  return (
    <div className="wpReact-frontend">
      <p>
        <button onClick={() => setShowValueInput1(prev => !prev)}>Значення першого поля вводу</button>
        {showValueInput1 && <span>{props.input1}</span>}
      </p>
      <p>
        <button onClick={() => setShowValueInput2(prev => !prev)}>Значення другого поля вводу</button>
        {showValueInput2 && <span>{props.input2}</span>}
      </p>
    </div>
  )
}
