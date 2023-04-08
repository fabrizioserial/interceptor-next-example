export const transformDescription = (description: string) => {
    return description.slice(0,description.slice(0,80).lastIndexOf(' ')) + '...'
}
