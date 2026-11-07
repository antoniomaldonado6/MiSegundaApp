import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

/**
 * Proyecto: Mi primera aplicación (Segundo proyecto en GitHub)
 * Autor: Antonio Maldonado
 * Fecha: 6 de noviembre del 2026
 */

export default function Index() {
  // Estado para manejar el cambio de texto dinámico
  const [mensaje, setMensaje] = useState('¡Estoy aprendiendo React Native!');

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Mi segunda aplicación</Text>
      <Text style={styles.mensaje}>{mensaje}</Text>

      {/* Botón interactivo */}
      <Pressable
        style={styles.boton}
        onPress={() => setMensaje('¡Mi primer botón funciona!')}
      >
        <Text style={styles.textoBoton}>Púlsame</Text>
      </Pressable>

      {/* Créditos requeridos */}
      <View style={styles.creditosContenedor}>
        <Text style={styles.creditosTexto}>Creado por: Antonio Maldonado</Text>
        <Text style={styles.creditosTexto}>Fecha: 6 de noviembre del 2026</Text>
        <Text style={styles.githubTexto}>Segundo proyecto en GitHub</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#eef4ff',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#173b75',
    marginBottom: 18,
  },
  mensaje: {
    fontSize: 17,
    marginBottom: 22,
    textAlign: 'center',
    color: '#334155',
  },
  boton: {
    backgroundColor: '#2563eb',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombra para Android
  },
  textoBoton: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  creditosContenedor: {
    marginTop: 40,
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    width: '100%',
  },
  creditosTexto: {
    fontSize: 14,
    color: '#475569',
    fontStyle: 'italic',
  },
  githubTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0f172a',
    marginTop: 5,
  },
});
