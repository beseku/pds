// react-i18next [https://react.i18next.com]
import { useTranslation } from 'react-i18next';

// Mantine UI [https://mantine.dev/]
import { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { Stepper } from '@mantine/core'

function StepperPage() {
  const { t } = useTranslation();
  
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
  
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flexStart", gap: "var(--magin-loose)", padding: "1.5rem", border: "solid 1px var(--color-stroke-neutral)", borderRadius: "var(--border-radius-rounded)" }}>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={true} completedIcon={<FaCheck size={12}  />} >
        <Stepper.Step label="First step" />
        <Stepper.Step label="Second step" />
        <Stepper.Step label="Final step" />
      </Stepper>  
    </div>
  )
}

export default StepperPage