import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Isso será executado apenas no cliente
  }, []);

  if (!isClient) {
    return null; // Evita renderização do conteúdo no servidor
  }

  // Código que usa 'document' ou APIs específicas do navegador
  return (
    <div>
      {/* Seu conteúdo que depende do DOM */}
      <h1>Componente carregado no cliente!</h1>
    </div>
  );
};

export default MyComponent;