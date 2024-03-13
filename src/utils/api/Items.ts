import api from "."

const getItems = async(page: number, searchValue: string) => {
    try {
        const response = await api.get(`/elastic?limit=20&p=${page}&q=${searchValue || ''}&world=de`)
        return response.data
    } catch (error) {
        throw(error)
    }
}

export default {getItems}