import { StyleSheet, ImageStyle } from 'react-native';

// Define el tipo de estilo para la imagen
interface Styles {
  container: {
    flex: number;
    justifyContent: 'center';
    alignItems: 'center';
    backgroundColor: string;
  };
  content: {
    width: '80%';
  };
  title: {
    fontSize: number;
    fontWeight: 'bold';
    marginBottom: number;
  };
  input: {
    height: number;
    borderColor: string;
    borderWidth: number;
    marginBottom: number;
    paddingLeft: number;
  };
  loginButton: {
    backgroundColor: 'FF8537';
    padding: number;
    borderRadius: number;
    alignItems: 'center';
  };
  buttonText: {
    color: string;
    fontWeight: 'bold';
  };
  boton: {
    height: number;
    width: number;
    backgroundColor: string;
    borderRadius: number;
    justifyContent: 'center';
    marginHorizontal: number;
  };
  botonTexto: {
    textAlign: 'center';
    padding: number;
    fontSize: number;
    fontWeight: 'bold';
    color: string;
  };
  // Añade la propiedad 'imagen'
  imagen: ImageStyle;
}

export const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF5900',
  },
  content: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  boton: {
    height: 80,
    width: 80,
    backgroundColor: '#9b9b9b',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  // Estilo para la imagen
  imagen: {
    position: 'absolute',
    left: 21,
    top: 51,
    width: 318,
    height: 68,
    // Agrega cualquier estilo adicional según tus necesidades
  },
});
