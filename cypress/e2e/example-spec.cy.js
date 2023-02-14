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
        cy.get('[name="keywords"]').clear();
        cy.get('[name="keywords"]').type('Samsung galaxy tab{enter}');
        cy.get('a[id="tdb4"]').click();
        cy.get('[name="cart_quantity[]"]').click().clear().type('2');
        cy.get('a[id="tdb5"]').click();
        //revisar la actualizacion del carro de compras
        //cy.get('a[id="tdb6"]').click();
        cy.get('[name="email_address"]').type(email + '{enter}');
        cy.get('[name="password"]').type(pass + '{enter}');
        cy.get('[id="tdb1"]').click();
    });
});
/*
describe('My second test'),
    () => {
        it('');
    };
*/
