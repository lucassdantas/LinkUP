import { TouchableOpacityProps } from 'react-native'; 
import { Text } from 'react-native';
import { Container, Title } from './styled';

type Props = TouchableOpacityProps & {
  title: string;
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