import { Container,  BackButton, BackIcon , ImageIcon , } from "./styles";
import { Highlight } from "../../Highlight";
import logoimg from '/Users/Luiz Felipe/config/assets/icon-perfil-vazio.png';
import { Icon } from "../Butom/Editar/styled";

export function Header(){
    return (
      <Container>
    <BackIcon /> 
    
    
    
    <BackButton>
     
     
     
     <ImageIcon />
      
     

    </BackButton>
    
    

          <Highlight 
          
         title = "Gabriel Modesto"
         subtitle="GabrielModesto@gmail"
          
          />

         

      </Container>
  

    )
}