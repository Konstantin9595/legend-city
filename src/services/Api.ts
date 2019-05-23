export default class Api {
    private baseUrl = "http://localhost:3001"

     getAllServices = async() => {
        const request = await fetch(`${this.baseUrl}/services`)

        return request.json()
    }

}