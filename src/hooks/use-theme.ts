
import { useEffect, useState } from "react";

export function useTheme() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Since our theme is already dark, we're just setting up the hook for future use
    setIsDarkMode(true);
  }, []);
  
  return {
    isDarkMode,
    theme: isDarkMode ? "dark" : "light"
  };
}
