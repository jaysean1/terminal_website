import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`        
   _____       _    ____  _             
  / ___/__  __(_)  / __ \(_)___ _____   
  \__ \/ / / / /  / / / / / __ \`/ __ \  
 ___/ / /_/ / /  / /_/ / / /_/ / / / /  
/____/\__,_/_/   \___\_/_/\__,_/_/ /_/   
                                       
                                       
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
   ____        _ 
  / ___| _   _(_)
  \___ \| | | | |
   ___) | |_| | |
  |____/ \__,_|_|
                 
   ____  _             
  / __ \(_)___ _____   
 / / / / / __ \`/ __ \  
/ /_/ / / /_/ / / / /  
\___\_/_/\__,_/_/ /_/   
 
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Sui Qian's terminal portfolio. (Version 2.0.0)</div>
        <Seperator>----</Seperator>
        <div>
          Visit my portfolio at{" "}
          <Link href="https://jaysean1.github.io">
            jaysean1.github.io
          </Link>
          {" "}or check out my projects at{" "}
          <Link href="https://qiansui.notion.site">
            qiansui.notion.site
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
            @@@@@@@@@    
           @@@@@@@@@@@@  
          @#+===+=*#@@@  
     +== @%%@+=*%%#+#@@@ 
   +==+# %****#*++#**@@@ 
 %+====*#%***++*++***##* 
*@*===+% *+*++==+==+**+= 
#%%%**+=+%*+*++==+*#%#   
#%#+===+++##*+++*#%%     
 ###*++====*@@@%%@@%*    
     ##*++===========+++ 
       #*+++===========++
        #*+++=====+++==+*
        #*+++====++**===+
         `}
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
