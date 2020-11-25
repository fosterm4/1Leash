import React from "react"
import '../components/css/email-list.css'

const EmailList = () => {
  return (
    <div class="WholeList">
      <h2>Enter email below to unlock our free beginner course</h2>
      <input
            id="email"
            name="email"
            type="email"
          />
      <button>GO</button>
    </div>
  )
}

export default EmailList