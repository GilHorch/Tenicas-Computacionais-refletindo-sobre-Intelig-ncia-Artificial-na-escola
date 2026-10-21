
const nomes=["Gilmar","Julia", "Miguel","Vitória","Victor","Ana Paula","Márcio"]

export function aleatorio (lista){
        const posicao = Math.floor(Math.random()* lista.length);
        return lista[posicao];
}

export const nome= aleatorio(nomes);