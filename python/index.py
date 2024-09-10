

        # Definindo as funções para cada operação

def add(x, y):
    return x + y

def subtract(x, y):
    return x - y

def multiply(x, y):
    return x * y

def divide(x, y):
    if y == 0:
        return "Erro! Divisão por zero."
    return x / y

# Função principal da calculadora

def calculator():
    print("Selecione a operação:")
    print("1. Soma")
    print("2. Subtração")
    print("3. Multiplicação")
    print("4. Divisão")

    # Recebendo a entrada do usuário para selecionar a operação
    choice = input("Digite a escolha (1/2/3/4): ")

    # Recebendo os números do usuário
    num1 = float(input("Digite o primeiro número: "))
    num2 = float(input("Digite o segundo número: "))

    # Realizando a operação selecionada
    if choice == '1':
        print(f"{num1} + {num2} = {add(num1, num2)}")

    elif choice == '2':
        print(f"{num1} - {num2} = {subtract(num1, num2)}")

    elif choice == '3':
        print(f"{num1} * {num2} = {multiply(num1, num2)}")

    elif choice == '4':
        print(f"{num1} / {num2} = {divide(num1, num2)}")

    else:
        print("Escolha inválida")

# Chamando a função principal para iniciar a calculadora
calculator(13)
