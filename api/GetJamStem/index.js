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
                    "image": "https://dgdemoassets.blob.core.windows.net/demoimages/science.jpg?sp=rl&st=2020-04-28T07:08:43Z&se=2021-04-29T07:08:00Z&sv=2019-10-10&sr=b&sig=6WrtgoRgLyPfbVvyXqTkTRoF4oWkp1fVNlijvl%2BdxFs%3D"
                },
                {
                    "name": "Technology",
                    "description": "Learn how to turn the wildest inventions into reality.",
                    "url": "https://en.wikipedia.org/wiki/Technology",
                    "image": "https://dgdemoassets.blob.core.windows.net/demoimages/code.jpg?sp=rl&st=2020-04-28T06:34:10Z&se=2021-04-28T06:34:00Z&sv=2019-10-10&sr=b&sig=ztWCK8NA1qI2%2BnaiVV4NeyCa6x2osumJR6MrBNV%2Bz0Y%3D"
                },
                {
                    "name": "Engineering",
                    "description": "Learn how to make things that endure the test of time.",
                    "url": "https://en.wikipedia.org/wiki/Engineering",
                    "image": "https://dgdemoassets.blob.core.windows.net/demoimages/engineering.jpg?sp=rl&st=2020-04-28T07:06:11Z&se=2021-04-29T07:06:00Z&sv=2019-10-10&sr=b&sig=3ml4rzUBjhAc95v1mVdqCUjHrdQDnrWGFqIhh6BYAYE%3D"
                },
                {
                    "name": "Math",
                    "description": "Learn about the numbers that power our mesmerizing world.",
                    "url": "https://en.wikipedia.org/wiki/Mathematics",
                    "image": "https://dgdemoassets.blob.core.windows.net/demoimages/math.jpg?sp=rl&st=2020-04-28T07:07:23Z&se=2021-04-29T07:07:00Z&sv=2019-10-10&sr=b&sig=Ak4CNN3ayp1KEtUrgRxmooWqOe1vTrXlml4qGEf2m58%3D"
                }

            ]
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(learningActivities)
    };
}