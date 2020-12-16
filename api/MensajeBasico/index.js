module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hola, " + name + ". Este trigger HTTP funciona perfectamente."
        : "Este trigger HTTP funciono perfectamente. Pero con un 'name' en el querystring tendrias una respuesta personalizada.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: { 
            text: responseMessage
          }
    };
}