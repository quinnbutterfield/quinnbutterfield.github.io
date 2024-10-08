import { Title } from "@mantine/core";
import { useEffect, useState } from "react";

interface FuzztextProps {
    text: string
}


  // Function to generate random weight between 400 and 700


function Fuzztext({ text }: FuzztextProps) {

    const [step, setStep] = useState(1); // Start from 1

    useEffect(() => {
      const interval = setInterval(() => {
        setStep((prevStep) => (prevStep < 100 ? prevStep + 1 : -100)); // Cycle between 1 and 10
      }, 5); // Change every 1 second
  
      return () => clearInterval(interval);
    }, []);

    return (

        <Title styles={{
            root: { 
                fontFamily: 'Sixtyfour Convergence',
                fontVariationSettings: `"YELA" ${step}, "BLED" ${-step} `,
            }
        }}>{text}</Title>
    );
}

export default Fuzztext