import page from '../pageobjects/page'

describe('Testes Home Page Buger Eats', ()=>{
    beforeEach(function(){
        cy.visit('https://buger-eats.vercel.app/')
        cy.get('.content main a').click()
    })

    //Caso de teste 4
    it('Verificar se o link “Voltar para home” está redirecionando o usuário para a home page', ()=>{
        cy.get('#page-deliver header a').click()
        cy.get('#page-home .content main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })

    //Caso de teste 5
    it('Realizar um cadastro com dados válidos de um entregador no sistema Buger Eats', ()=>{       
        //Instanciando page
        var page_object = new page()
        //Preenchendo o formulário
        page_object.preencher_formulario()

        //Submetendo o formulário
        cy.get('button[type=submit]').click()

        //Testando se o formulário foi inserido com sucesso
        cy.get('.swal2-container .swal2-html-container').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')
    })

    //Caso de teste 6
    it('Realizar um cadastro com o campo “nome completo” em branco', ()=>{        
        var page_object = new page()
        page_object.preencher_formulario()

        cy.get('input[name="name"]').clear()

        cy.get('button[type=submit]').click()

        //Testando se aparece o mensagem de Nome Completo vazio
        cy.get('form .alert-error').should('have.text', 'É necessário informar o nome')
    })

    //Caso de teste 7
    it('Realizar um cadastro com o campo “CPF somente números” em branco', ()=>{        
        var page_object = new page()
        page_object.preencher_formulario()

        cy.get('input[name="cpf"]').clear()

        cy.get('button[type=submit]').click()

        //Testando se aparece o mensagem de CPF vazio
        cy.get('form .alert-error').should('have.text', 'É necessário informar o CPF')
    })

    //Caso de teste 8
    it('Realizar um cadastro com o campo “E-mail” em branco', ()=>{        
        var page_object = new page()
        page_object.preencher_formulario()

        cy.get('input[name="email"]').clear()

        cy.get('button[type=submit]').click()

        //Testando se aparece o mensagem E-mail vazio
        cy.get('form .alert-error').should('have.text', 'É necessário informar o email')
    })

    //Caso de teste 9
    it('Realizar um cadastro com o campo “CPF somente números” com um CPF inválido', ()=>{        
        var page_object = new page()
        page_object.preencher_formulario()

        cy.get('input[name="cpf"]').clear().type("0741082160400")

        cy.get('button[type=submit]').click()

        //Testando se aparece a mensagem de CPF inválido
        cy.get('form .alert-error').should('have.text', 'Oops! CPF inválido')
    })

    //Caso de teste 13
    it('Validar se a busca pelo CEP retorna Rua, Bairro e Cidade/UF válidos', ()=>{
        cy.get('input[name="postalcode"]').type("35501846")
        cy.get('#page-deliver input[type=button][value="Buscar CEP"]').click()

        //Verifica se a Rua, Bairro e Cidade/UF são inseridos corretamente
        cy.get('input[name="address"]').should('have.value', 'Rua Eldorado')
        cy.get('input[name="district"]').should('have.value', 'Santa Clara')
        cy.get('input[name="city-uf"]').should('have.value', 'Divinópolis/MG')
    })

    //Caso de teste 17
    it('Realizar um cadastro de um entregador com dois métodos de entrega selecionados', ()=>{        
        var page_object = new page()
        page_object.preencher_formulario()

        cy.contains('.delivery-method li', 'Bicicleta').click()

        cy.get('button[type=submit]').click()

        //Testando se aparece a mensagem de dois métodos de entregas selecionados
        cy.get('form .alert-error').should('have.text', 'Oops! Selecione apenas um método de entrega')
    })
})