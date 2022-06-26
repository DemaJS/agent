
export function convertDate(date: string) {
    return new Date(date).toLocaleString().split(',')[0]
}


