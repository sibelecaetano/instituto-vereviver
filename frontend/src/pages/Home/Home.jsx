import SobreOInstituto from '../../components/SobreOInstituto/SobreOInstituto';
import MissaoVisaoValores from '../../components/MissaoVisaoValores/MissaoVisaoValores';
import NossosProjetos from '../../components/NossosProjetos/NossosProjetos';
import NossaGaleria from '../../components/NossaGaleria/NossaGaleria';
import Contato from '../../components/Contato/Contato';
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreOInstituto />
      <MissaoVisaoValores />
      <NossosProjetos />
      <NossaGaleria />
      <Contato />
    </>
  );
}

