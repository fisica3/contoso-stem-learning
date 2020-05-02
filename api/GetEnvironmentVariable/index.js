module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? (process.env[name] ? process.env[name] : "No environment variable found for : "+ name)
        : "No variable name provided";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}