document.getElementById('my-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita el comportamiento predeterminado de reinicio del formulario
    // Aquí puedes realizar acciones adicionales, como enviar los datos del formulario a través de Ajax
    // Ejemplo: Envío de datos a través de Ajax utilizando la biblioteca Axios
    var formData = new FormData(this);
    axios.post('procesar.php', formData)
        .then(function (response) {
            // Manipular la respuesta de la subpágina aquí
            console.log(response.data);
        })
        .catch(function (error) {
            // Manejar errores de la solicitud
            console.error(error);
        });
});

