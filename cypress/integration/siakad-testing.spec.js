describe('User melakukan proses login pada sistem siakad polinema', () => {
    //Testing 1
    it('Menuju halaman siakad', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });
    
    //Testing 2
    it('Melakukan login dengan username KOSONG dan password KOSONG', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    //Testing 3
    it('Melakukan login dengan username KOSONG dan password TERISI', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#password').type('coba_pasword')
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });
    
    //Testing 4
    it('Melakukan login dengan username TERISI dan password KOSONG', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710107')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    //Testing 5
    it('Melakukan login dengan username SALAH dan password SALAH', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('coba_username')
        cy.get('#password').type('coba_pasword')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    //Testing 6
    it('Melakukan login dengan username BENAR dan password SALAH', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710107')
        cy.get('#password').type('coba_pasword')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    //Testing 7
    it('Melakukan login dengan username SALAH dan password BENAR', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('coba_username')
        cy.get('#password').type('whyalwaysme26')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });

    //Testing 8
    it('Melakukan login dengan username BENAR dan password BENAR', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710107')
        cy.get('#password').type('whyalwaysme26')
        cy.get('.btn-success').click()
        cy.url().should('eq', 'http://siakad.polinema.ac.id/beranda')
    });

    //Testing 9
    it('Menampilkan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710107')
        cy.get('#password').type('coba_password')
        cy.get('#chk_tampilkan').click()
    });
});