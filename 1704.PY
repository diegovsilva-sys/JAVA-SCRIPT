produtos = {}

def cadastrarProduto():
    codigo = input("Codigo do produto: ")
    nome = input("Nome: ")
    preco = input("Preço: ")
    quantidade = input("Quantidade: ")
    produtos [codigo] = {"nome": nome, "preco": preco, "quantidade": quantidade}
    print("Produto cadastrado com sucesso !!\n")

def listarProdutos():
    if not produtos:
        print("Nenhum produto cadastrado !! \n")
        return
    for codigo, dados in produtos .items():
        print(f"codigo: {codigo} | Nome:{dados['nome']} | preco:{dados['preço']} | quantidade :{dados['quantidade']} ")
    print()

def pesquisarProdutos():
    codigo =  input("Informe o  codigo do produto:  ")
    if codigo in produtos:
        print(f"Nome: {produtos[codigo]['nome']}")
        print(f"preco:{produtos[codigo]['preco']}")
        print(f"quantidade: {produtos[codigo] ['quantidade']}")
    else:
        print("Produto não encontrado !!!  ")

def alterarProdutos():
    codigo = input("Informe o codigo do cliente para alterar: ")
    if codigo in produtos:
        nome = input("Novo nome:  ")
        preco = input("Novo preco:  ")
        quantidade = input("Novo quantidade:  ")
        produtos[codigo] = {"nome": nome, "preco": preco, "quantidade": quantidade}
        print("Dados alterados com sucesso !!! ")


def deletarProdutos():
    codigo = input("Informe o codigo do produto para deletar:  ")
    if codigo in produtos:
        del produtos [codigo]
        print("Produto removido com sucesso !!! ")
    else:
        print("Produto não encontrado !!! \n")


def menuProdutos():
    while True:
        print(" ==== MENU DE PRODUTOS ==== ")
        print(" 1 - Cadastrar Produto: ")
        print(" 2 - Listar Produto:  ")
        print(" 3 - Pesquisar Produto: ")
        print(" 4 - Alterar Produto:  ")
        print(" 5 - Deletar Produto:  ")
        print(" 0 = Sair ")

        opcao = input("Escolha uma opção: ")

        if opcao =='1':
            cadastrarProduto()
        elif opcao == "2":
            listarProdutos()
        elif opcao == "3":
            pesquisarProdutos()
        elif opcao == "4":
            alterarProdutos()
        elif opcao == "5":
            deletarProdutos()
        elif opcao == "0":
            print(" Saindo do sistema.... até logo !!! ")
            break
        else:
            print("Opção inválida. Tente novamente !!! ")

# Programa principal

menuProdutos()