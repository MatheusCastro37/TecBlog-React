import { Card } from './styles';
import Post from '../../assets/images/imagem1.jpg';
import Post2 from '../../assets/images/imagem2.jpg';

// eslint-disable-next-line react/prop-types
function CardContainer({img, title}) {
  return (
    <Card>
      <h2>{title}</h2>
      <p>postado 20 de março de 2022</p>
      <hr/>
      <img src={img === "Post" ? Post : Post2} alt="Imagem da Postagem" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, repellat animi? Fugit ad, fugiat quaerat illum earum numquam! Iste itaque cumque iusto ullam nostrum temporibus voluptatum molestiae natus ea! Nesciunt!</p>
      <a href="#">Leia Mais</a>
    </Card>
  )
}

export default CardContainer