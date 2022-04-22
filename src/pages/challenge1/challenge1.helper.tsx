import React, {useState, useEffect} from 'react';

//tipar as variaveis
interface Challenge1HelperProps {
  title: string;
  subtitle: string;
  handleHeaderVisibilityOnClick: () => void;
  isHeaderVisible: boolean;
}

export const Challenge1Helper = (): Challenge1HelperProps => {
  const title = "Challenge 1"
  const subtitle = "I am a subtitle"

  //variavel isHeaderVisible inicializada a true, e funçao do setisHeaderVisible para alterar o falor do isHeaderVisible
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  

  //Função para dar set ao contrario da variavel isHeaderVisible (true para false) e (false para true)
  const handleHeaderVisibilityOnClick = () => {
    // isHeaderVisible ? setIsHeaderVisible(false) : setIsHeaderVisible(true);
    setIsHeaderVisible(!isHeaderVisible)
  }

  //variaveis a serem enviadas do meu helper
  return { 
    title, subtitle, handleHeaderVisibilityOnClick, isHeaderVisible
  }
}
