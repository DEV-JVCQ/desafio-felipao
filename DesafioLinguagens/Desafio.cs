using Sytem;

public class Desafio
{
    public static void Main()
    {
        //Lê os valores de Entrada:
        float valorSalario = float.Parse(Console.ReadLine());
        float valorBeneficios = float.Parse(Console.ReadLine());

        float valorImposto = 0;
        if(valorSalario >= 0 && valorSalario <= 1100)
        {
            //Atribui a aliquota de 5% mediante o salario:
            valorImposto = 0.05F * valorSalario;
        }
        else if (valorSalario >= 1100.01 && valorSalario <= 2500.00)
        {
            valorImposto = 0.10F * valorSalario;
        }
        else{
            valorImposto = 0.15F * valorSalario;
        }

        //Calcula e imprime a Saída (com 2 casa decimais)
        float saida = valorSalario - valorImposto + valorBeneficios;
        console.writeLine(saida.ToString("0.00"));
    }
}