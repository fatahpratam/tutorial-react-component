# Chapter 6: Props, Tailwind, dan Component

## GitHub Pages
Link untuk deployment: [Props Component](https://fatahpratam.github.io/tutorial-react-component/)

## Youtube Tutorial
- Link: [Full Stack React Developer Course with Appwrite](https://www.youtube.com/watch?v=Bvwq_S0n2pk)
- Creator: [HiteshCodeLab](https://www.youtube.com/@HiteshCodeLab)

## Detail lebih lanjut tentang jsx
- Karena beberapa keyword digunakan oleh JavaScript, beberapa attribute html dikonversi menjadi berikut:
- `class` -> `className`
- `for` -> `htmlFor`
- Untuk menggunakan array dan object sebagai component argument, dapat menggunakan {}. Contoh:
```jsx
<App myArray={[1, 2, 3]} />
```

## Instalasi Tailwind
- `npm install -D tailwindcss postcss autoprefixer`
- `npx tailwindcss init -p`
- Tambahkan jalur ke semua berkas templat Anda di berkas `tailwind.config.js`.
- Tambahkan arahan @tailwind untuk setiap layer Tailwind ke berkas `./src/index.css` Anda.

## Component
- Component dapat didefinisikan sebagai sebuah fungsi yang diawali dengan huruf kapital yang mengembalikan composite component atau host component lainnya.
- Component yang tidak memiliki parameter dinamakan dumb component.
- Component membuat sebuah UI dapat digunakan berulang-ulang.

## Props
- Nilainya berasal dari parameter component
- Bentuknya key dan value
- Untuk memberikan argumen pada component, cukup dengan memberikan atribute saat memanggil component-nya
- Props dapat diberikan default value
- Dapat destructure props langsung di dalam parameter
- Contoh pendeklarasikan component dengan props:
```js
function App(props) {
  return (
    <p>String: {props.str}</p>
  )
}
```
- Contoh pemanggilan component dengan props:
<App str="test" />
