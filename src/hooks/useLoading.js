import { useState } from "react";

export const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const updateLoading = (loadingState) => {
    setIsLoading(loadingState);
  };

  return {
    isLoading,
    setIsLoading,
    updateLoading,
  };
};
