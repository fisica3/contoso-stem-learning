module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const learningActivities = {
        "results":
            [
                {
                    "name": "Science",
                    "description": "Learn the fundamentals for what makes our world spin.",
                    "url": "https://en.wikipedia.org/wiki/Science",
                    "image": "/images/science.jpg"
                },
                {
                    "name": "Technology",
                    "description": "Aprende como convertir las mas alucinantes invenciones en realidad.",
                    "url": "https://en.wikipedia.org/wiki/Technology",
                    "image": "/images/code-1839406_1920.jpg"
                },
                {
                    "name": "Engineering",
                    "description": "Learn how to make things that endure the test of time.",
                    "url": "https://en.wikipedia.org/wiki/Engineering",
                    "image": "/images/engineering.jpg"
                },
                {
                    "name": "Math",
                    "description": "Learn about the numbers that power our mesmerizing world.",
                    "url": "https://en.wikipedia.org/wiki/Mathematics",
                    "image": "/images/math.jpg"
                }

            ]
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(learningActivities)
    };
}
