import PopUpMainSplider from "./PopUpMainSplider";
import PopUpVerticalSplider from "./PopUpVerticalSplider";

export default function ImagePopUp() {
    return (
        <div className="image_popup">
            <PopUpVerticalSplider />
            <PopUpMainSplider />
        </div>
    );
}