import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, TextInput, ScrollView, Modal } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  BottomSheetModal,
  BottomSheetView,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import DropDownPicker from 'react-native-dropdown-picker';

type BottomSheetProps = {
  images: string[]; // Lista de imágenes
  onRemoveImage: (index: number) => void; // Función para eliminar imágenes
  onSubmit: (data: { category: string; description: string; contact: string }) => void; // Función para enviar el formulario
  onClose: () => void; // Función para cerrar el modal y redirigir
};

const BottomSheetComponent: React.FC<BottomSheetProps> = ({
  images,
  onRemoveImage,
  onSubmit,
  onClose,
}) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // Define los puntos de anclaje del BottomSheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], []);

  // Estado para el menú desplegable
  const [category, setCategory] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: 'Limpieza Pública', value: 'limpieza_publica' },
    { label: 'Alumbrado Público', value: 'alumbrado_publico' },
    { label: 'Seguridad', value: 'seguridad' },
    { label: 'Incendio', value: 'incendio' },
  ]);

  // Estado para la descripción, contacto y confirmación
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

  // Callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSubmit = () => {
    if (!category || !description || !contact) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    // Llamar a la función de envío
    onSubmit({ category, description, contact });

    // Mostrar pantalla de confirmación
    setIsConfirmationVisible(true);

    // Redirigir automáticamente después de 2 segundos
    setTimeout(() => {
      setIsConfirmationVisible(false);
      onClose(); // Cerrar el modal y redirigir
    }, 2000);
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheetModalProvider>
        <TouchableOpacity style={styles.openButton} onPress={handlePresentModalPress}>
          <Text style={styles.openButtonText}>Abrir Formulario</Text>
        </TouchableOpacity>

        <BottomSheetModal
          ref={bottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          enablePanDownToClose={true}
        >
          <BottomSheetView style={styles.content}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <Text style={styles.title}>FORMULARIO PUNO SEGURO</Text>

              {/* Vista previa de imágenes */}
              <View style={styles.imageContainer}>
                {images.map((image, index) => (
                  <View key={index} style={styles.imageWrapper}>
                    <Image source={{ uri: image }} style={styles.image} />
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => onRemoveImage(index)} // Llamar a la función para eliminar la imagen
                    >
                      <Text style={styles.removeButtonText}>✕</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </View>

              {/* Menú desplegable para seleccionar la incidencia */}
              <DropDownPicker
                open={open}
                value={category}
                items={items}
                setOpen={setOpen}
                setValue={setCategory}
                setItems={setItems}
                placeholder="Selecciona una incidencia"
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContainer}
              />

              {/* Campo de texto para descripción */}
              <TextInput
                style={styles.textInput}
                placeholder="Describe lo que ocurrió"
                placeholderTextColor="#aaa"
                multiline
                value={description}
                onChangeText={setDescription}
              />

              {/* Campo para referencia de contacto */}
              <TextInput
                style={styles.textInput}
                placeholder="Ingresa tu número de contacto o referencia"
                placeholderTextColor="#aaa"
                keyboardType="phone-pad"
                value={contact}
                onChangeText={setContact}
              />

              {/* Botón de envío */}
              <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>ENVIAR</Text>
              </TouchableOpacity>
            </ScrollView>
          </BottomSheetView>
        </BottomSheetModal>

        {/* Modal de confirmación */}
        <Modal visible={isConfirmationVisible} transparent animationType="fade">
          <View style={styles.confirmationContainer}>
            <View style={styles.confirmationBox}>
              <Text style={styles.confirmationText}>Se envió correctamente</Text>
              <TouchableOpacity style={styles.confirmationButton} onPress={onClose}>
                <Text style={styles.confirmationButtonText}>✔</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  openButton: {
    backgroundColor: '#0088cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    margin: 16,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  scrollContent: {
    flexGrow: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  imageWrapper: {
    position: 'relative',
    marginRight: 8,
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff0000',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  dropdown: {
    marginBottom: 16,
    borderColor: '#ccc',
  },
  dropdownContainer: {
    borderColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
    color: '#000',
  },
  submitButton: {
    backgroundColor: '#0088cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  confirmationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  confirmationBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  confirmationText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  confirmationButton: {
    backgroundColor: '#0088cc',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmationButtonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BottomSheetComponent;