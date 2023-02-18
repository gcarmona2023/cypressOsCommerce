function userAccount() {
    const userMail = 'gabriel.carmona@yahoo.com';
    const userPass = 'upctest';
    return {
        email: userMail,
        password: userPass
    };
}

const userCredentials = userAccount();

describe('osCommerce buying tablets samsung', () => {
    it('passes', () => {
        const email = userCredentials.email;
        const pass = userCredentials.password;

        const expectedTitle = 'DemoSQAUPC';
        cy.visit('http://sqademosatp.net/catalog/index.php');
        cy.title().should('eq', expectedTitle);
        cy.screenshot();

        //Buscar producto
        cy.get('[name="keywords"]').clear();
        cy.get('[name="keywords"]').type('Samsung galaxy tab{enter}');
        cy.get('a[id="tdb4"]').click();

        //Actualizar cantidad
        cy.get('[name="cart_quantity[]"]').click().clear().type('2');
        cy.get('.ui-button-text:contains("Update")').click();

        //Realizar Checkout
        cy.get('a[id="tdb5"]').click();

        //Iniciar sesión
        cy.get('[name="email_address"]').type(email);
        cy.get('[name="password"]').type(pass);
        cy.get('[id="tdb1"]').click();

        //Continuar Shipping method
        cy.get('.ui-button-text:contains("Continue")').click();

        //Seleccionar tipo de pago
        cy.get('input[name="payment"][value="cod"]').click();
        //cy.wait(1000);
        cy.get('.ui-button-text:contains("Continue")').click();

        //Confirmar orden
        cy.get('.ui-button-text:contains("Confirm Order")').click();

        //Validar texto de cabecera
        cy.get('h1').should('have.text', 'Your Order Has Been Processed!');
        cy.get('.ui-button-text:contains("Continue")').click();
    });
});
