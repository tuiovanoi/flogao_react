import * as S from './styles'
import TruckLeft from "../../assets/cavalomecanico.jpg"
import TruckRight from "../../assets/mercedes1113.jpg"

export function Home() {
  return (
    <S.Section>
      <img src={TruckLeft} alt="Caminhão na esquerda" />
      <img src={TruckRight} alt="Caminhão na direita" />
    </S.Section>
  )
}
