import axios from '@/plugins/axios'

const api = {
    getPlaces() {
        return axios.get('/api/place')
    },

    addMap(params) {
        return axios.post('/api/map', params)
    },
    deleteMap(id) {
        return axios.delete(`/api/map/${id}`)
    },
    updateMap(id, params) {
        return axios.put(`/api/map/${id}`, params)
    },
    getMaps(params) {
        return axios.get('/api/map', { params })
    },

    addEvent(params) {
        return axios.post('/api/event', params)
    },
    deleteEvent(id) {
        return axios.delete(`/api/event/${id}`)
    },
    updateEvent(id, params) {
        return axios.put(`/api/event/${id}`, params)
    },
    getEvents(params) {
        return axios.get('/api/event', { params })
    },

    addCar(params) {
        return axios.post('/api/car', params)
    },
    deleteCar(id) {
        return axios.delete(`/api/car/${id}`)
    },
    updateCar(id, params) {
        return axios.put(`/api/car/${id}`, params)
    },
    getCars(params) {
        return axios.get('/api/car', { params })
    },

    upload(type, formData) {
        return axios.post(`/api/upload/${type}`, formData)
    }
}

export default api;