import { useEffect, useState } from "react";

function useIsOnline() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    const handleIsOffline = () => setIsOnline(false);
    const handleIsOnline = () => setIsOnline(true);

    window.addEventListener("online", handleIsOnline);
    window.addEventListener("offline", handleIsOffline);
  }, []);

  console.log(isOnline);
  return { isOnline };
}

export default useIsOnline;
