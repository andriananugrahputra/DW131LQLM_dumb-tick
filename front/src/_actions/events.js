import {GET_EVENT_TODAY} from '../config/constant'

import axios from 'axios'

export const getEvents = () => {
    return{
        type: GET_EVENT_TODAY,
        payload: axios({
            method: 'GET',
            url: 'http://localhost:666/api/v1/events'
          })
    }
}