# 🧩 Pokémon Type Viewer

A simple web application built using **HTML**, **CSS**, and **JavaScript** that allows users to select a Pokémon type and view all Pokémon from that category along with their images.

<br>

## 🚀 Features

- 🧠 **Dynamic Pokémon Fetching** — Pulls data live from the [PokéAPI](https://pokeapi.co/).
- 🧼 **Category Filter** — Select any Pokémon type to view relevant Pokémon.
- 🎨 **Live Rendering** — Displays Pokémon cards dynamically with images and names.
- 🧹 **Clear Button** — Clears all Pokémon from the display area.
- 🌀 **Loading Indicator** — Shows a "Loading..." message while fetching data.
- 🖼️ **Lazy Image Loading** — Optimized performance using `loading="lazy"` for all images.

<br>

## 🖼️ Preview

![preview](https://user-images.githubusercontent.com/your-screenshot-url.png)

<br>

## 📂 Project Structure

```bash
📁 pokemon-type-viewer/
├── index.html       # Main HTML layout
├── index.css        # Styling and layout
├── index.js         # Core logic, API calls, rendering
└── README.md        # This file
```


## 🛠️ Tech Stack

- **HTML** – Semantic layout  
- **CSS** – Responsive and simple design  
- **JavaScript** – DOM manipulation + API integration  
- **PokéAPI** – Data provider  


## 📦 How to Use

1. **Clone the repo**

    ```bash
    git clone https://github.com/yourusername/pokemon-type-viewer.git
    cd pokemon-type-viewer
    ```

2. **Open `index.html` in your browser**  
   No build setup needed — just run it!


## 🤖 API Used

- `https://pokeapi.co/api/v2/type/{type}`
- `https://pokeapi.co/api/v2/pokemon/{name}`

<br>

## 📸 Screenshots

| Type Selection | Pokémon Grid |
|----------------|--------------|
| (Add screenshot) | (Add screenshot) |

<br>

## 📌 To-Do / Improvements

- Add Pokémon stats popup/modal  
- Pagination for large type categories  
- Improve accessibility (a11y)  
- Replace "Loading..." with animated spinner  
- Use `Promise.all()` for performance boost  

<br>

## 🙌 Acknowledgements

- [PokéAPI](https://pokeapi.co/) — for their awesome free Pokémon API.

<br>

## 📃 License

MIT License – free to use, modify, and distribute.