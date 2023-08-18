import * as S from "./styles";
export interface ICard {
  data: string
  cidade: string
  tipodecarga: string
}
export const Card = ({ data, cidade, tipodecarga }: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Data: </strong> {data}
      </h3>
      <h4>cidade: {cidade}</h4>
      <p>tipo de carga: {tipodecarga}</p>
    </S.Aside>
  );
};
