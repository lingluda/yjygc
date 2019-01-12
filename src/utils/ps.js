import axios from 'axios'
import qs from 'qs'
import router from '../router'

let ps = {}
ps.post = function (url,params,callback) {
  axios.post(url,qs.stringify(params)).then(resp => {
    callback(resp.data.hits)
    setTimeout(() => {
      console.log('setTimeout')
    },10*1000)
  })
}
axios.defaults.baseURL = 'http://tour.tcloud.mobi/ytbi/func/'
export default ps
