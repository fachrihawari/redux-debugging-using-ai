# State Management debugging using Github Copilot

Kita akan mencoba menggunakan Github Copilot untuk membantu kita melakukan debugging pada aplikasi React yang menggunakan Redux sebagai state management.

## Problem

<details>
  <summary>Problem 1</summary>
  <b>Redux store tidak dipasang melalui Provider</b><br/>
  Pastikan aplikasi dibungkus dengan <code>Provider</code> dan <code>store</code> diteruskan dengan benar untuk menghindari error <em>store is not defined</em>.

  Contoh:
  ```javascript
    // Kurang tepat
    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )


    // Tepat
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
  <summary>Problem 2</summary>
  Problem: Pemanggilan action yang kurang tepat

  Solution: Pastikan action dipanggil dengan benar. Action harus dipanggil menggunakan `dispatch` dan juga action harus dipanggil dengan `()`. Jika action tidak dipanggil dengan `()`, maka action tidak akan dieksekusi.

  Contoh:

  ```javascript
  // Kurang tepat
  increment(); // Memanggil fungsi increment tanpa dispatch
  dispatch(increment); // Memanggil fungsi increment tanpa tanda kurung

  // Tepat
  dispatch(increment()); // Memanggil fungsi increment dengan dispatch dan tanda kurung
  ```
</details>


<details>
  <summary>Problem 3</summary>
  Problem: Penggunaan `useSelector` yang kurang tepat

  Solution: Pastikan `useSelector` dipanggil dengan benar. `useSelector` harus dipanggil dengan fungsi yang mengembalikan nilai state yang diinginkan.

  Contoh:

  ```javascript
  // Kurang tepat
  const count = useSelector(state => {
    state.count
  }); // Mengambil state.count dengan fungsi yang tidak mengembalikan nilai

  // Tepat
  const count = useSelector(state => state.count); // Mengambil state.count dengan mengembalikan nilai
  // atau
  const count = useSelector(state => {
    return state.count;
  }); // Mengambil state.count dengan mengembalikan nilai
  ```
</details>
  