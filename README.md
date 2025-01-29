# State Management debugging using AI

Kita akan mencoba menggunakan AI untuk membantu kita melakukan debugging pada aplikasi React yang menggunakan Redux sebagai state management.

## Problems

<details>
  <summary>(Bug) Error: could not find react-redux context value; please ensure the component is wrapped in a <code>Provider</code></summary>

  Problem: App component kita, belum dibungkus dengan Provider dari react-redux.

  Solution: Bungkus App component dengan Provider dari react-redux. biasanya ada di main.jsx atau index.jsx

  Contoh:

  ```javascript
// file: main.jsx

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux' // Import the Provider component
import './index.css'
import App from './App.jsx'
import store from './store/index.js' // Import the Redux store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)

  ```
</details>

<details>
  <summary>(Bug) Fitur keranjang belanja tidak menampilkan data produk</summary>

  Problem: 

  Solution:

  Contoh:
  
  ```javascript
  ```
</details>

<details>
  <summary>(Bug) Fitur menambahkan produk ke dalam keranjang tidak bekerja</summary>

  Problem: 

  Solution:

  Contoh:
  
  ```javascript
  ```
</details>

<details>
  <summary>(Baru) Fitur menghapus produk dari keranjang</summary>

  Problem: 

  Solution:

  Contoh:
  
  ```javascript
  ```
</details>

<details>
  <summary>(Perbaikan) Fitur tambah produk seharusnya menambah jumlah quantity jika produk sudah ada di keranjang</summary>

    Problem: 

    Solution:

    Contoh:
    
    ```javascript
    ```
</details>