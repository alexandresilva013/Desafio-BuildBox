describe('Testes Home Page Buger Eats', ()=>{
    beforeEach(function(){
        cy.visit('https://buger-eats.vercel.app/')
    })

    //Caso de teste 1
    it('Verificar se o home page do site Buger Eats possui o botão Cadastre-se para fazer entregas', ()=>{
        cy.get('#page-home .content main a strong').should('have.text', 'Cadastre-se para fazer entregas')
    })

    //Caso de teste 2
    it('Verificar se o home page do site Buger Eats possui a tag H1 com o título Seja um parceiro entregador pela Buger Eats', ()=>{
        cy.get('#page-home .content main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })

    //Caso de teste 3
    it('Verificar se a página de cadastro foi direcionada corretamente', ()=>{
        cy.get('.content main a').click()
        cy.get('#page-deliver h1').should('have.text', 'Cadastre-se para  fazer entregas')
    })
})