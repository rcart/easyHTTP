/*
 * EasyHTTP v2 Libray
 *
 * @version 2.0.0
 * @author Ronny Cardona
 * @licence MIT
 * 
 * */

class EasyHTTP {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err))
    });
  }

  post(url, data) {
    return new Promise((resolve, rejected) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => rejected(err))
    });
  }

  put(url, data) {
    return new Promise((resolve, rejected) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => rejected(err))
    });
  }

  delete(url) {
    return new Promise((resolve, rejected) => {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'applicacion/json'
        }
      })
        .then(res => res.json())
        .then(()=> resolve('Resource delete'))
        .catch(err => rejected(err))
    });
  }
}
