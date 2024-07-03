

function calcularFatorial(numero) {
    if (numero < 0) {
        return "O fatorial não é definido para números negativos.";
    }
    
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

// Exemplo de uso:
let resultado = calcularFatorial(5);
console.log(resultado);  // Saída será 120
```

