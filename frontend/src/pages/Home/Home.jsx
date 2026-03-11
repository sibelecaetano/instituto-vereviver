import SobreOInstituto from '../../components/SobreOInstituto/SobreOInstituto';
import BeneficiosMunicipio from '../../components/BeneficiosMunicipio/BeneficiosMunicipio';
import MissaoVisaoValores from '../../components/MissaoVisaoValores/MissaoVisaoValores';
import Servicos from '../../components/Servicos/Servicos';
import NossaGaleria from '../../components/NossaGaleria/NossaGaleria';
import Contato from '../../components/Contato/Contato';
import HeroSection from "../../components/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SobreOInstituto />
      <BeneficiosMunicipio />
      <MissaoVisaoValores />
      <Servicos />
      <NossaGaleria />
      <Contato />
    </>
  );
}

