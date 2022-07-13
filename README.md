# 🤞 Projetinho básico! 🤞
    Desenvolvendo um jogo de perguntas e respostas, mais conhecido como quizz

# 🖥️ O projeto terá um futuro?
    Creio que não, se eu pretendo fazer alguma alteração futura, seria alocar mais questões/perguntas e melhorar o nível do CSS 
    Não quero forçar muito o javaS, afinal é uma aplicação bem básica, com foco na manipulação do DOM

# ⚡ Sobre este jogo:
    Você irá ter algumas perguntas que devem ser respondidas, após finalizar cada questão, é mostrado qual a alternativa correta e as erradas
    Assim você saberá qual deveria ter escolhido, e no final de todas as questões, você irá ter um menu mostrando a porcentagem de acerto e quantidade de questões acertadas.


# 💬 Como rodar o projeto?
    Você pode simplesmente clonar o repositório e rodar o index.html com a extensão "Live Server", caso esteja no "Visual Studio Code"
    Ou basta abrir as pastas do projeto, seguindo este caminho: views -> index.html, abra o index.html no seu navegador e pronto. O jogo estará disponível para que você possa testar.

# 💬 E como adicionar mais perguntas?
    Bom, é algo bem simples. Abra a const questions, é um array com vários objetos, e lá você irá copia o padrão a seguir:
    {
      "question": "Texto da pergunta",
      "answers": [
        {
          "answer": "Texto Da Alternativa A",
          "correct": true
        },
        {
          "answer": "Texto Da Alternativa B",
          "correct": false
        },
        {
          "answer": "Texto Da Alternativa C",
          "correct": false
        },
        {
          "answer": "Texto Da Alternativa D",
          "correct": false
        },
      ]
    }
# Observação: 
    O correct = true, quer dizer que é alternativa correta da pergunta, e false são as erradas