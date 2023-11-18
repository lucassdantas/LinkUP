import { Container, Title ,  } from './styles';

type Props = {
    title: string;
    
}


export function Suporte({ title }: Props){
 
 
 
  return(
    <Container>

      <Title>

      {title}
    
      </Title>
    
   

    </Container>
  )

}