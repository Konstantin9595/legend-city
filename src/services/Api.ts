export default class Api {
    private baseUrl = "http://localhost:3001"

     getAllServices = async() => {
        const request = await fetch(`${this.baseUrl}/services`)

        return request.json()
    }

}



// application state (ACTIONS)
    // addServicesReducer
        // ADD_TO_FAVORITES
    // requestServicesReducer
        // REQUEST_CATEGORY_SERVICES
    // sortServicesReducer
        // SORT_DATA_SERVICES
        // SORT_FAVORITE_SERVICES