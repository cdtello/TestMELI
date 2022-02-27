export const generalResult = (data?: unknown) => ({
    statusCode: 200,
    body: JSON.stringify(data)
})

export const generalError = (data?: unknown) => ({
    statusCode: 403,
    body: JSON.stringify(data)
})