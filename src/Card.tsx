import { CardContainer } from "./styles";

interface CardProps {
  text: string;
  id: string;
}
const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};

export default Card;
