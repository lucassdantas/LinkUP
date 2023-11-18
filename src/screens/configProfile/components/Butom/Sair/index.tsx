import { TouchableOpacityProps } from 'react-native'; 
import { Text } from 'react-native';
import { Container, Title, ButomTypeStyleProps ,  } from './styled';

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButomTypeStyleProps;
  
  

}

  




export function Sair ({ title, type = 'PRIMARY', ...rest}: Props) {
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