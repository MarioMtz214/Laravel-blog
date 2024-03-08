describe('template spec', () => {
  beforeEach('passes', () => {
    cy.visit('http://localhost:8000/login')
  })

  it('fails', () => {
    

    cy.get('input[name="email"]').type('email')
    cy.get('input[name="password"]').type('password')

    // Haz clic en el botón de inicio de sesión
    cy.contains('Log in').click()

    // También puedes verificar algún elemento específico que se encuentre en el dashboard para confirmar que el inicio de sesión fue exitoso
    // Por ejemplo, puedes verificar que aparezca el nombre del usuario
    // cy.contains('Welcome, {$name}').should('exist')
    
  })

  it('Ingresar credenciales válidas debería dirigir al usuario al dashboard', () => {
    // Ingresa el nombre de usuario y la contraseña en los campos correspondientes
    // Ingresa credenciales inválidas
    cy.get('input[name="email"]').type('email')
    cy.get('input[name="password"]').type('password')

     // Haz clic en el botón de inicio de sesión
     cy.contains('Log in').click()

    // Verifica que la URL cambie a la del dashboard o cualquier página a la que se redirija después del inicio de sesión
    cy.url().should('include', 'http://localhost:8000/login/dashboard')

    // También puedes verificar algún elemento específico que se encuentre en el dashboard para confirmar que el inicio de sesión fue exitoso
    // Por ejemplo, puedes verificar que aparezca el nombre del usuario
    cy.contains('Bienvenido, ${name}').should('exist')
  })

  it('Ingresar credenciales inválidas debería mostrar un mensaje de error', () => {
    // Ingresa credenciales inválidas
    cy.get('input[name="email"]').type('usuario_invalido')
    cy.get('input[name="password"]').type('contraseña_invalida')

    // Haz clic en el botón de inicio de sesión
    cy.get('button[type="submit"]').click()

    // Verifica que se muestre un mensaje de error adecuado
    cy.contains('Credenciales incorrectas').should('exist')
  })




})