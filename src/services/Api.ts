export default class Api {
    private baseUrl = "http://localhost:3001"

     getAllServices = async() => {
        const request = await fetch(`${this.baseUrl}/services`)

        return request.json()
    }

    getCategory = async() => {
        const request = await fetch(`${this.baseUrl}/category`)

        return request.json()
    }

    getNavigation = async() => {
        const request = await fetch(`${this.baseUrl}/navigation`)
        return request.json()
    }

    getUser = async(id:number) => {
        const request = await fetch(`${this.baseUrl}/user/${id}`)
        return request.json()
    }

}