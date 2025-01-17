import { useState } from "react"

export default function Input( { onChange, userInput } ){
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => onChange("initialInvestment", event.target.value)}
                    />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>annual Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => onChange("annualInvestment", event.target.value)}
                    />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>expected Return</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => onChange("expectedReturn", event.target.value)}
                    />
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>duration</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => onChange("duration", event.target.value)}
                    />
            </p>
        </div>
    </section>
}