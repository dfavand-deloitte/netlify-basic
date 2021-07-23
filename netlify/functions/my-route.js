exports.handler = async function(event, context) {
    const { queryStringParameters: { name } } = event;
    return `Hello ${name || 'world'}!`
}