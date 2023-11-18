import { TouchableOpacityProps } from 'react-native'; 

import { Container, Title , ButomTypeStyleProps  } from './styled';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButomTypeStyleProps;
  
  

}

export function Tema({ title, type = 'PRIMARY', ...rest}: Props) {
  return (
   <Container
    type={type}
    {...rest}
   >
    
    <Title>
     
     {title}
    </Title>

  </Container>

  )
}