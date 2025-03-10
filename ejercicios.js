// ejemplo de TypeScript
// Implementación de la interfaz
const persona = {
    nombre: "Uriel",
    edad: 25,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};
// Llamada al método saludar
persona.saludar();
