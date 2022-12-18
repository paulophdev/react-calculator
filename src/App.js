import { useState } from "react";
import { Button, Calculator, Container, Content } from "./style";

function App() {
  const [resultado, setResultado] = useState(0);
  const [calculoAmostra, setCalculoAmostra] = useState("");
  const [resultadoGuardado, setResultadoGuardado] = useState(0);
  const [statusCalc, setStatusCalc] = useState(false);
  const [ultimoMetodo, setUltimoMetodo] = useState("");

  const popValueAmostra = (value) => {
    let valueFinal = 0;

    if (statusCalc) {
      valueFinal = value.target.dataset.value;
      setStatusCalc(false);
    } else {
      valueFinal =
        resultado === 0
          ? value.target.dataset.value
          : resultado + "" + value.target.dataset.value;
    }

    setResultado(parseInt(valueFinal));
  };

  const zerarCalculo = () => {
    setResultado(0);
    setResultadoGuardado(0);
    setCalculoAmostra("");
  };

  const funcaoMetodo = (prefix, tipo) => {
    setResultadoGuardado(resultado);
    setCalculoAmostra(`${resultado} ${prefix}`);
    setStatusCalc(true);
    setUltimoMetodo(tipo);
  };

  const calcularResultado = () => {
    setStatusCalc(true);
    if (resultadoGuardado !== 0 && resultado !== 0) {
      if (!statusCalc) {
        let valorCalculado = calcularAbs(
          ultimoMetodo,
          resultadoGuardado,
          resultado
        );

        setCalculoAmostra(`${calculoAmostra} ${resultado} =`);
        setResultado(valorCalculado);
      }
    }
  };

  const calcularAbs = (param, valor1, valor2) => {
    if (param === "soma") {
      return valor1 + valor2;
    } else if (param === "subtrair") {
      return valor1 - valor2;
    } else if (param === "multiplicacao") {
      return valor1 * valor2;
    } else if (param === "restoDivisao") {
      return valor1 % valor2;
    }
  };

  return (
    <Container>
      <Content>
        <Calculator>
          <div className="head">
            <input
              value={calculoAmostra}
              className="input-min"
              readOnly
              onChange={(e) => setCalculoAmostra(e.target.value)}
            />
            <input
              value={resultado}
              type="number"
              className="input-max"
              readOnly
              onChange={(e) => setResultado(e.target.value)}
            />
          </div>
          <div className="body">
            <Button onClick={(e) => popValueAmostra(e)} data-value="7">
              7
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="8">
              8
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="9">
              9
            </Button>
            <Button
              title="Multiplicar"
              onClick={() => funcaoMetodo("*", "multiplicacao")}
            >
              X
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="4">
              4
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="5">
              5
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="6">
              6
            </Button>
            <Button
              title="Subtrair"
              onClick={() => funcaoMetodo("-", "subtrair")}
            >
              -
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="1">
              1
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="2">
              2
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="3">
              3
            </Button>
            <Button title="Somar" onClick={() => funcaoMetodo("+", "soma")}>
              +
            </Button>
            <Button onClick={(e) => popValueAmostra(e)} data-value="0">
              0
            </Button>
            <Button title="Zerar calculo" onClick={() => zerarCalculo()}>
              C
            </Button>
            <Button title="Obter resultado" onClick={() => calcularResultado()}>
              =
            </Button>
            <Button
              title="Resto da divisão"
              onClick={() => funcaoMetodo("%", "restoDivisao")}
            >
              %
            </Button>
          </div>
        </Calculator>
      </Content>
    </Container>
  );
}

export default App;
