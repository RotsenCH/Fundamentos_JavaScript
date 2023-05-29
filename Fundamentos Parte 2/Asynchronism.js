// Función que obtiene los mensajes de chat desde el servidor
function getChatMessages() {
    return new Promise((resolve, reject) => {
      // Realizar la solicitud GET a la API
      fetch('https://api.example.com/chat/messages')
        .then(response => {
          if (response.ok) {
            // La respuesta es exitosa, devolver los datos en formato JSON
            resolve(response.json());
          } else {
            // La respuesta es un error, rechazar la promesa con el mensaje de error
            reject('Error al obtener los mensajes de chat');
          }
        })
        .catch(error => {
          // Ocurrió un error durante la solicitud, rechazar la promesa con el error
          reject(error);
        });
    });
  }
  
  // Función asincrónica que maneja la obtención de los mensajes de chat
  async function fetchChatMessages() {
    try {
      // Esperar a que se resuelva la promesa y obtener los mensajes de chat
      const messages = await getChatMessages();
      console.log(messages); // Hacer algo con los mensajes de chat
    } catch (error) {
      console.log('Error al obtener los mensajes de chat:', error);
    }
  }
  
  // Llamada a la función asincrónica para obtener los mensajes de chat
  fetchChatMessages();
  