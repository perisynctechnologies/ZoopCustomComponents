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
export interface ConfirmationModalProps {
  open: boolean /*** Controls whether the modal is open.*/;

  onClose?: () => void /*** Function called when the modal is closed.*/;

  fullScreen?: boolean /*** Determines whether the modal should take up the full screen.*/;

  title?: string /*** Title displayed in the modal content area.*/;

  description?: string /*** Description text displayed in the modal content area.*/;

  disabled?: boolean /*** Determines whether the confirm button is disabled.*/;

  confirm?: () => void /*** Function called when the confirm button is clicked.*/;

  cancel?: () => void /*** Function called when the cancel button is clicked.*/;

  loader?: boolean /*** Controls the loading state of the confirm button.*/;

  footer?: boolean /*** Toggles whether the footer buttons are displayed.*/;

  header?: string /*** Header text displayed at the top of the modal.*/;

  yes?: string /*** Text displayed on the confirm button.*/;

  no?: string /*** Text displayed on the cancel button.*/;

  customComp?: React.ReactNode /*** Custom React component to render in the modal content.*/;

  alert?: boolean /*** If true, disables closing the modal by clicking outside or pressing escape.*/;

  size?:
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl" /*** Size of the modal (e.g., "xs", "sm", "md", "lg", "xl").*/;
}

export interface CustomTagsCompProps {
  /**
   * Local state object containing the tags and temporary tag input.
   */
  localState: {
    tags: string[]; // Array of existing tags
    temptag: string; // Temporary input for a new tag
  };

  /**
   * Function to update the local state.
   * @param state - The updated state object
   */
  setLocalState: (state: { tags: string[]; temptag: string }) => void;

  /**
   * Function to set an update flag.
   * @param update - Boolean flag indicating an update
   */
  setUpdate: (update: boolean) => void;
}

// Export the component with the correct type definition
export declare const LoadingScreen: React.FC<LoadingScreenProps>;
export declare const NoData: React.FC<NoDataProps>;
export declare const ConfirmationModal: React.FC<ConfirmationModalProps>;
export declare const CustomTagsComp: React.FC<CustomTagsCompProps>;
