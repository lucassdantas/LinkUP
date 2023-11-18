

import { Container, Title, Icon } from './styled';



type Props =  {
  title: string;
 
}

export function Editar({ title }: Props) {
  return (
   
   <Container>
    
   
    
    <Title>
    
    {title}
    
    </Title>

  </Container>
   
  );
}