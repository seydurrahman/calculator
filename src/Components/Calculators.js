import React, { useState } from "react";

const AppCalculator = () => {
  const [data, setData] = useState("");

  // Handle number and operator input
  const getValue = (event) => {
    setData(data.concat(event.target.value));
  };

  // Improved calculation function with better error handling
  const calculation = () => {
    try {
      if (!data) return;

      // Handle percentage calculations
      let expression = data;
      expression = expression.replace(/(\d+\.?\d*)%/g, "($1/100)");

      const result = eval(expression);
      setData(result.toString());
    } catch (error) {
      setData("Something Error");
    }
  };

  // Remove last character
  const back = () => {
    setData(data.slice(0, -1));
  };

  // Clear all data
  const clearAll = () => {
    setData("");
  };

  // Handle percentage
  const handlePercentage = () => {
    if (!data) return;

    if (data.slice(-1) === "%") {
      setData(data.slice(0, -1));
    } else {
      setData(data + "%");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const calculatorStyle = {
    background: "white",
    borderRadius: "20px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
    padding: "30px",
    width: "100%",
    maxWidth: "350px",
  };

  const headerStyle = {
    textAlign: "center",
    marginBottom: "25px",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    margin: "0 0 5px 0",
  };

  const subtitleStyle = {
    fontSize: "14px",
    color: "#666",
    margin: "0",
  };

  const displayStyle = {
    width: "90%",
    height: "60px",
    textAlign: "right",
    fontSize: "24px",
    fontFamily: "monospace",
    background: "#f8f9fa",
    border: "2px solid #e9ecef",
    borderRadius: "12px",
    padding: "0 15px",
    marginBottom: "25px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "12px",
    marginBottom: "20px",
  };

  const buttonBaseStyle = {
    height: "55px",
    border: "none",
    borderRadius: "12px",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.2s",
    outline: "none",
  };

  const numberButtonStyle = {
    ...buttonBaseStyle,
    background: "#495057",
    color: "white",
  };

  const operatorButtonStyle = {
    ...buttonBaseStyle,
    background: "#007bff",
    color: "white",
  };

  const functionButtonStyle = {
    ...buttonBaseStyle,
    background: "#dc3545",
    color: "white",
  };

  const equalsButtonStyle = {
    ...buttonBaseStyle,
    background: "linear-gradient(135deg, #28a745, #20c997)",
    color: "white",
    gridColumn: "span 2",
  };

  const clearButtonStyle = {
    ...functionButtonStyle,
    gridColumn: "span 2",
  };

  const zeroButtonStyle = {
    ...numberButtonStyle,
    gridColumn: "span 2",
  };

  const footerStyle = {
    textAlign: "center",
    fontSize: "12px",
    color: "#999",
  };

  return (
    <div style={containerStyle}>
      <div style={calculatorStyle}>
        {/* Header */}
        <div style={headerStyle}>
          <h1 style={titleStyle}>Calculator</h1>
          <p style={subtitleStyle}>Simple & Clean</p>
        </div>

        {/* Display */}
        <input
          style={displayStyle}
          placeholder="0"
          value={data || "0"}
          readOnly
          onFocus={(e) => (e.target.style.borderColor = "#007bff")}
          onBlur={(e) => (e.target.style.borderColor = "#e9ecef")}
        />

        {/* Button Grid */}
        <div style={gridStyle}>
          {/* Row 1 - Function buttons */}
          <button
            style={clearButtonStyle}
            onClick={clearAll}
            onMouseOver={(e) => (e.target.style.background = "#c82333")}
            onMouseOut={(e) => (e.target.style.background = "#dc3545")}
          >
            Clear
          </button>
          <button
            style={{ ...functionButtonStyle, background: "#fd7e14" }}
            onClick={back}
            onMouseOver={(e) => (e.target.style.background = "#e8630a")}
            onMouseOut={(e) => (e.target.style.background = "#fd7e14")}
          >
            ⌫
          </button>
          <button
            style={{ ...functionButtonStyle, background: "#6f42c1" }}
            onClick={handlePercentage}
            onMouseOver={(e) => (e.target.style.background = "#59339d")}
            onMouseOut={(e) => (e.target.style.background = "#6f42c1")}
          >
            %
          </button>

          {/* Row 2 - Parentheses and division */}
          <button
            style={{
              ...buttonBaseStyle,
              background: "#e9ecef",
              color: "#495057",
            }}
            onClick={getValue}
            value="("
            onMouseOver={(e) => (e.target.style.background = "#dee2e6")}
            onMouseOut={(e) => (e.target.style.background = "#e9ecef")}
          >
            (
          </button>
          <button
            style={{
              ...buttonBaseStyle,
              background: "#e9ecef",
              color: "#495057",
            }}
            onClick={getValue}
            value=")"
            onMouseOver={(e) => (e.target.style.background = "#dee2e6")}
            onMouseOut={(e) => (e.target.style.background = "#e9ecef")}
          >
            )
          </button>
          <button
            style={operatorButtonStyle}
            onClick={getValue}
            value="/"
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#007bff")}
          >
            ÷
          </button>
          <button
            style={operatorButtonStyle}
            onClick={getValue}
            value="*"
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#007bff")}
          >
            ×
          </button>

          {/* Row 3 - Numbers 7,8,9 and subtraction */}
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="7"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            7
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="8"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            8
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="9"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            9
          </button>
          <button
            style={operatorButtonStyle}
            onClick={getValue}
            value="-"
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#007bff")}
          >
            −
          </button>

          {/* Row 4 - Numbers 4,5,6 and addition */}
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="4"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            4
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="5"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            5
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="6"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            6
          </button>
          <button
            style={operatorButtonStyle}
            onClick={getValue}
            value="+"
            onMouseOver={(e) => (e.target.style.background = "#0056b3")}
            onMouseOut={(e) => (e.target.style.background = "#007bff")}
          >
            +
          </button>

          {/* Row 5 - Numbers 1,2,3 and decimal */}
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="1"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            1
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="2"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            2
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="3"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            3
          </button>
          <button
            style={numberButtonStyle}
            onClick={getValue}
            value="."
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            .
          </button>

          {/* Row 6 - Zero and equals */}
          <button
            style={zeroButtonStyle}
            onClick={getValue}
            value="0"
            onMouseOver={(e) => (e.target.style.background = "#343a40")}
            onMouseOut={(e) => (e.target.style.background = "#495057")}
          >
            0
          </button>
          <button
            style={equalsButtonStyle}
            onClick={calculation}
            onMouseOver={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #218838, #1e7e34)")
            }
            onMouseOut={(e) =>
              (e.target.style.background =
                "linear-gradient(135deg, #28a745, #20c997)")
            }
          >
            =
          </button>
        </div>

        {/* Footer */}
        <div style={footerStyle}>
          <p>By Seydur Rahman</p>
        </div>
      </div>
    </div>
  );
};

export default AppCalculator;
