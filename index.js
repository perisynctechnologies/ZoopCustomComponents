// Import LoadingScreen from its source
import { LoadingScreen as LoadingScreenComponent } from "./src/components/ViewScreens/LoadingScreen";
import { NoData as NoDataComponent } from "./src/components/ViewScreens/NoData";
import { ConfirmationModal as ConfirmationModalComponent } from "./src/components/Modals/ConfirmationModal";
import { CustomTagsComp as CustomTagsCompFunc } from "./src/components/Functionalities/CustomTagsComp";

// Export the imported LoadingScreen
export const LoadingScreen = LoadingScreenComponent;
export const NoData = NoDataComponent;
export const ConfirmationModal = ConfirmationModalComponent;
export const CustomTagsComp = CustomTagsCompFunc;
