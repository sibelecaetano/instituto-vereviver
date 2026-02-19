import React from 'react';
import Topo from '../../components/Topo/Topo';
import SobreOInstituto from '../../components/SobreOInstituto/SobreOInstituto';
import MissaoVisaoValores from '../../components/MissaoVisaoValores/MissaoVisaoValores';
import NossosProjetos from '../../components/NossosProjetos/NossosProjetos';
import NossaGaleria from '../../components/NossaGaleria/NossaGaleria';
import Contato from '../../components/Contato/Contato';
import Footer from '../../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Topo />
      <SobreOInstituto />
      <MissaoVisaoValores />
      <NossosProjetos />
      <NossaGaleria />
      <Contato />
      <Footer />
    </>
  );
}
