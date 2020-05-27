import axios from 'axios';

/**
 * IOS com Emulador: localhost
 * IOS com físico: IP da máquina
 * Android com Emulador: localhost(Terminal: add reverse tcp:3333 tcp:3333)
 * Android com Emulador (Android Studio): 10.0.2.2 
 * Android com Emulador (Genymotion): 10.0.3.2
 * Android com disposito físicco: IP da máquina
 */

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;