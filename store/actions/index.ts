export const getData = () => ({
    type: 'GET_DATA',
})

export const getDataSuccess = (data) => ({
    type: 'DATA_RECEIVED',
    data: data
})

export const getDataErr = (error) => ({
    type: 'DATA_ERROR',
    error: error
})