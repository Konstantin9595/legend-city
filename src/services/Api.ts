import {async} from "q";

export default class Api {
    private baseUrl = "http://localhost:3001"

    private getEntity = async (id: number) => {
        const request = await fetch(`${this.baseUrl}/services/${id}`)

        return request.json()
    }
    private updateEntity  = async (id: number, data: {}) => {
        const request = await fetch(
            `${this.baseUrl}/services/${id}`,
            {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        return request.ok
    }

    getAllServices = async () => {
        const request = await fetch(`${this.baseUrl}/services`)
        return request.json()
    }

    getCategory = async () => {
        const request = await fetch(`${this.baseUrl}/category`)
        return request.json()
    }

    getNavigation = async () => {
        const request = await fetch(`${this.baseUrl}/navigation`)
        return request.json()
    }

    getUser = async (id: number) => {
        const request = await fetch(`${this.baseUrl}/user/${id}`)
        return request.json()
    }

    getWhere = async(path:string, where: any) => {
        const queryString = Object.keys(where).map((key:any) => key + '=' + where[key]).join('&')
        const request = await fetch(`${this.baseUrl}/${path}?${queryString}`)

        return request.json()
    }

    updateFavoriteEntity = async (id: number, dataFavorites: boolean) => {
        // get Entity by id
        const res = await this.getEntity(id)
            .then(data => {

                //change favorites field value in entity
                const changeData = {...data, favorites: !dataFavorites}

                // update database value entity
                return this.updateEntity(id, changeData)
                    .then(result => result)
                    .catch(error => console.log(error))
            })
            .catch(err => console.log(err))

        return res
    }

}