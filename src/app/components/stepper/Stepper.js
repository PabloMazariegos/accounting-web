import Step from "./Step";

const steps = [
  { text: 'Sales' },
  { text: 'Purchases' },
  { text: 'Summary' }
]

export default function Stepper() {
  return (
    <ol className="flex w-full items-center space-x-5 space-y-0 md:block md:space-x-0 md:space-y-4">
      {
        steps.map((step, index) => (
          <Step index={index + 1} title={step.text} />
        ))
      }      
    </ol>
  );
}
