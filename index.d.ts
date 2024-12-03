import React from "react";

export interface LoadingScreenProps {
  /*** The height of the LoadingScreen container.  * Accepts a string (e.g., "70vh", "100%") or a number (interpreted as pixels).*/
  Height?: string | number;
}
export interface NoDataProps {
  title: string /*** The title displayed at the top of the component.*/;

  description: string /*** The description text displayed below the title.*/;

  bool?: boolean /*** A boolean to determine if the button should be displayed.*/;

  button?: string /*** The label text for the button.*/;

  action?: () => void /*** The action to execute when the button is clicked.*/;
}

// Export the component with the correct type definition
export declare const LoadingScreen: React.FC<LoadingScreenProps>;
export declare const NoData: React.FC<NoDataProps>;
