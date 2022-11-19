import {createClient} from 'contentful'

export const client = createClient({
    space:'elwxznc0zqn9',
    accessToken:'llcW3UyuetnH4xFp7rVmIIGD4uom4T30XObKPwQuGiI'
    // space:process.env.REACT_APP_SPACE_ID,
    // accessToken:process.env.REACT_APP_ACCESS_TOKEN
})