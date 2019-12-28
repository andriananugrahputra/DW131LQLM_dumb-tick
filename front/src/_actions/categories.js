import {GET_CATEGORIES} from '../config/constant'

import axios from 'axios'

export const getCategories = () => {
    return{
        type: GET_CATEGORIES,
        payload: axios({
            method: 'GET',
            url: 'http://localhost:666/api/v1/categories'
          })
    }
}