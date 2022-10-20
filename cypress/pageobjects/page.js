class page {
    preencher_formulario (){
        cy.get('input[name="name"]').type("Alexandre Silva de Oliveira")
        cy.get('input[name="cpf"]').type("07410821604")
        cy.get('input[name="email"]').type("alexandresilvaoliveiranet@gmail.com")
        cy.get('input[name="whatsapp"]').type("37999981446")
        cy.get('input[name="postalcode"]').type("35501846")

        //Pesquisar CEP
        cy.get('#page-deliver input[type=button][value="Buscar CEP"]').click()
        
        cy.get('input[name="address-number"]').type("61")
        cy.get('input[name="address-details"]').type("Apartamento 102")
        cy.contains('.delivery-method li', 'Moto').click()

        //Anexar CNH
        cy.get('input[type="file"]').selectFile("./cypress/fixtures/CarteiraMotorista.jpg", { force: true })
    }
}

export default page;