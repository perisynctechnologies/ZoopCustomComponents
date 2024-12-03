import React from "react";

export interface LoadingScreenProps {
  /**
   * The height of the LoadingScreen container.
   * Accepts a string (e.g., "70vh", "100%") or a number (interpreted as pixels).
   */
  Height?: string | number;
}

// Export the component with the correct type definition
export declare const LoadingScreen: React.FC<LoadingScreenProps>;