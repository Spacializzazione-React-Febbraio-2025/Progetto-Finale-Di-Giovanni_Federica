# WeatherTrack 🌦️

WeatherTrack è una web app sviluppata in React che consente agli utenti di registrarsi, accedere e consultare il meteo in tempo reale di diverse città tramite l'API OpenWeatherMap.

## ✨ Features

- Autenticazione utente (Supabase)
- Dashboard personalizzata
- Chiamate API in tempo reale
- Gestione stato globale con React Context
- Interfaccia responsive con TailwindCSS
- Deploy consigliato su Vercel

## 🔧 Setup

1. Clona il progetto
2. Installa le dipendenze:

   ```bash
   npm install
   ```

3. Crea un file `.env` nella root con queste variabili (vedi `.env.example`):

   ```env
   VITE_SUPABASE_URL=...
   VITE_SUPABASE_ANON_KEY=...
   VITE_WEATHER_API_KEY=...
   ```

4. Avvia il progetto:

   ```bash
   npm run dev
   ```

## 🚀 Deploy

Il progetto può essere facilmente distribuito tramite [Vercel](https://vercel.com/). Effettua il push su GitHub e collega la repository da Vercel.

---

> Progetto finale del corso React - Specializzazione Frontend 🚀  
