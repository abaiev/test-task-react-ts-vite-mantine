import { Suspense, lazy, useState } from "react";
import { Button } from "@mantine/core";

/**
 * While it may seem like overkill for this project size,
 * but I've included this to demonstrate the use of lazy loading
 * and code splitting. By utilizing lazy loading, we can load
 * components asynchronously, which in turn reduces the initial
 * bundle size and enhances the application's performance.
 */
const SettingsModal = lazy(() => import('./modules/Settings/Settings'))

export function App() {
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);

  const toggleSettingsModal = () => {
    setIsSettingsModalOpen(isOpen => !isOpen);
  }

  return (
    <>
      <Button color="green" onClick={toggleSettingsModal}>Click to Personalize</Button>
      <Suspense fallback={<div>Loading...</div>}>
        {isSettingsModalOpen && <SettingsModal onClose={toggleSettingsModal}/>}
      </Suspense>
    </>
  )
}
