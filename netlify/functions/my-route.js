exports.handler = async function(event, context) {
    const { queryStringParameters: { name } } = event;
    return { body: `Hello ${name || 'world'}!` };
}